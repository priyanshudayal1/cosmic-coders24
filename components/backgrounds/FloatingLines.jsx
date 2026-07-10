import { useEffect, useRef } from 'react';
import {
  Scene,
  OrthographicCamera,
  WebGLRenderer,
  PlaneGeometry,
  Mesh,
  ShaderMaterial,
  Vector3,
  Vector2,
  Clock
} from 'three';

const vertexShader = `
precision highp float;

void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Key shader optimizations:
// - precision mediump (sufficient for backgrounds, faster on mobile GPUs)
// - log(length(baseUv)) computed once per pixel, not once per loop iteration
// - rotate() and mat2 computed once per wave group, outside the loop
// - exp() (bendOffset) computed once per pixel, not inside every wave() call
const fragmentShader = `
precision mediump float;

uniform float iTime;
uniform vec3  iResolution;
uniform float animationSpeed;

uniform bool enableTop;
uniform bool enableMiddle;
uniform bool enableBottom;

uniform int topLineCount;
uniform int middleLineCount;
uniform int bottomLineCount;

uniform float topLineDistance;
uniform float middleLineDistance;
uniform float bottomLineDistance;

uniform vec3 topWavePosition;
uniform vec3 middleWavePosition;
uniform vec3 bottomWavePosition;

uniform vec2 iMouse;
uniform bool interactive;
uniform float bendRadius;
uniform float bendStrength;
uniform float bendInfluence;

uniform bool parallax;
uniform float parallaxStrength;
uniform vec2 parallaxOffset;

uniform vec3 lineGradient[8];
uniform int lineGradientCount;

const vec3 BLACK = vec3(0.0);
const vec3 PINK  = vec3(233.0, 71.0, 245.0) / 255.0;
const vec3 BLUE  = vec3(47.0,  75.0, 162.0) / 255.0;

mat2 rotate(float r) {
  return mat2(cos(r), sin(r), -sin(r), cos(r));
}

vec3 background_color(vec2 uv) {
  vec3 col = vec3(0.0);
  float y = sin(uv.x - 0.2) * 0.3 - 0.1;
  float m = uv.y - y;
  col += mix(BLUE, BLACK, smoothstep(0.0, 1.0, abs(m)));
  col += mix(PINK, BLACK, smoothstep(0.0, 1.0, abs(m - 0.8)));
  return col * 0.5;
}

vec3 getLineColor(float t, vec3 baseColor) {
  if (lineGradientCount <= 0) return baseColor;
  if (lineGradientCount == 1) return lineGradient[0] * 0.5;

  float clampedT = clamp(t, 0.0, 0.9999);
  float scaled = clampedT * float(lineGradientCount - 1);
  int idx = int(floor(scaled));
  float f = fract(scaled);
  int idx2 = min(idx + 1, lineGradientCount - 1);
  return mix(lineGradient[idx], lineGradient[idx2], f) * 0.5;
}

// bendOffset is precomputed once per pixel and passed in, avoiding exp() inside loops
float wave(vec2 uv, float offset, float bendOffset) {
  float time = iTime * animationSpeed;
  float amp = sin(offset + time * 0.2) * 0.3;
  float y = sin(uv.x + offset + time * 0.1) * amp + bendOffset;
  float m = uv.y - y;
  return 0.0175 / max(abs(m) + 0.01, 1e-3) + 0.01;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 baseUv = (2.0 * fragCoord - iResolution.xy) / iResolution.y;
  baseUv.y *= -1.0;

  if (parallax) {
    baseUv += parallaxOffset;
  }

  vec3 col = vec3(0.0);
  vec3 b = lineGradientCount > 0 ? vec3(0.0) : background_color(baseUv);

  vec2 mouseUv = vec2(0.0);
  if (interactive) {
    mouseUv = (2.0 * iMouse - iResolution.xy) / iResolution.y;
    mouseUv.y *= -1.0;
  }

  // exp() computed once per pixel instead of once per loop iteration per wave group
  float bendOffset = 0.0;
  if (interactive && bendInfluence > 0.001) {
    vec2 d = baseUv - mouseUv;
    float influence = exp(-dot(d, d) * bendRadius);
    bendOffset = (mouseUv.y - baseUv.y) * influence * bendStrength * bendInfluence;
  }

  // log(length()) computed once, reused by all three wave groups
  float baseLen = log(length(baseUv) + 1.0);

  if (enableBottom) {
    // rotate() computed once outside loop
    mat2 rot = rotate(bottomWavePosition.z * baseLen);
    vec2 ruv = baseUv * rot;
    for (int i = 0; i < bottomLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(bottomLineCount - 1), 1.0);
      col += getLineColor(t, b) * wave(
        ruv + vec2(bottomLineDistance * fi + bottomWavePosition.x, bottomWavePosition.y),
        1.5 + 0.2 * fi,
        bendOffset
      ) * 0.2;
    }
  }

  if (enableMiddle) {
    mat2 rot = rotate(middleWavePosition.z * baseLen);
    vec2 ruv = baseUv * rot;
    for (int i = 0; i < middleLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(middleLineCount - 1), 1.0);
      col += getLineColor(t, b) * wave(
        ruv + vec2(middleLineDistance * fi + middleWavePosition.x, middleWavePosition.y),
        2.0 + 0.15 * fi,
        bendOffset
      );
    }
  }

  if (enableTop) {
    mat2 rot = rotate(topWavePosition.z * baseLen);
    vec2 ruv = baseUv * rot;
    ruv.x *= -1.0;
    for (int i = 0; i < topLineCount; ++i) {
      float fi = float(i);
      float t = fi / max(float(topLineCount - 1), 1.0);
      col += getLineColor(t, b) * wave(
        ruv + vec2(topLineDistance * fi + topWavePosition.x, topWavePosition.y),
        1.0 + 0.2 * fi,
        bendOffset
      ) * 0.1;
    }
  }

  fragColor = vec4(col, 1.0);
}

void main() {
  vec4 color = vec4(0.0);
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}
`;

const MAX_GRADIENT_STOPS = 8;

function hexToVec3(hex) {
  let value = hex.trim();
  if (value.startsWith('#')) value = value.slice(1);

  let r = 255, g = 255, b = 255;
  if (value.length === 3) {
    r = parseInt(value[0] + value[0], 16);
    g = parseInt(value[1] + value[1], 16);
    b = parseInt(value[2] + value[2], 16);
  } else if (value.length === 6) {
    r = parseInt(value.slice(0, 2), 16);
    g = parseInt(value.slice(2, 4), 16);
    b = parseInt(value.slice(4, 6), 16);
  }
  return new Vector3(r / 255, g / 255, b / 255);
}

export default function FloatingLines({
  linesGradient,
  enabledWaves = ['top', 'middle', 'bottom'],
  lineCount = [6],
  lineDistance = [5],
  topWavePosition,
  middleWavePosition,
  bottomWavePosition = { x: 2.0, y: -0.7, rotate: -1 },
  animationSpeed = 1,
  interactive = true,
  bendRadius = 5.0,
  bendStrength = -0.5,
  mouseDamping = 0.05,
  parallax = true,
  parallaxStrength = 0.2,
  mixBlendMode = 'screen',
  pixelRatio
}) {
  const containerRef = useRef(null);
  const targetMouseRef = useRef(new Vector2(-1000, -1000));
  const currentMouseRef = useRef(new Vector2(-1000, -1000));
  const targetInfluenceRef = useRef(0);
  const currentInfluenceRef = useRef(0);
  const targetParallaxRef = useRef(new Vector2(0, 0));
  const currentParallaxRef = useRef(new Vector2(0, 0));

  // Refs for WebGL objects shared between effects
  const uniformsRef = useRef(null);
  const rendererRef = useRef(null);

  // Pause flags
  const isVisibleRef = useRef(true);
  const isInViewRef = useRef(true);

  // Live prop refs so event handlers and render loop always see current values
  // without needing to recreate them
  const interactiveRef = useRef(interactive);
  const parallaxRef = useRef(parallax);
  const parallaxStrengthRef = useRef(parallaxStrength);
  const mouseDampingRef = useRef(mouseDamping);

  useEffect(() => {
    interactiveRef.current = interactive;
    parallaxRef.current = parallax;
    parallaxStrengthRef.current = parallaxStrength;
    mouseDampingRef.current = mouseDamping;
  }, [interactive, parallax, parallaxStrength, mouseDamping]);

  const getLineCount = waveType => {
    if (typeof lineCount === 'number') return lineCount;
    if (!enabledWaves.includes(waveType)) return 0;
    return lineCount[enabledWaves.indexOf(waveType)] ?? 6;
  };

  const getLineDistance = waveType => {
    if (typeof lineDistance === 'number') return lineDistance;
    if (!enabledWaves.includes(waveType)) return 0.1;
    return lineDistance[enabledWaves.indexOf(waveType)] ?? 0.1;
  };

  const topLineCount    = enabledWaves.includes('top')    ? getLineCount('top')    : 0;
  const middleLineCount = enabledWaves.includes('middle') ? getLineCount('middle') : 0;
  const bottomLineCount = enabledWaves.includes('bottom') ? getLineCount('bottom') : 0;

  const topLineDistance    = enabledWaves.includes('top')    ? getLineDistance('top')    * 0.01 : 0.01;
  const middleLineDistance = enabledWaves.includes('middle') ? getLineDistance('middle') * 0.01 : 0.01;
  const bottomLineDistance = enabledWaves.includes('bottom') ? getLineDistance('bottom') * 0.01 : 0.01;

  // Mount/unmount only — creates WebGL context and animation loop once
  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new Scene();
    const camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
    camera.position.z = 1;

    const renderer = new WebGLRenderer({ antialias: false, alpha: false });
    // Cap at 1.25 — background shaders don't need retina-level precision
    const dpr = pixelRatio
      ? Math.min(pixelRatio, 1.25)
      : Math.min(window.devicePixelRatio || 1, 1.25);
    renderer.setPixelRatio(dpr);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const uniforms = {
      iTime:           { value: 0 },
      iResolution:     { value: new Vector3(1, 1, 1) },
      animationSpeed:  { value: animationSpeed },

      enableTop:    { value: enabledWaves.includes('top') },
      enableMiddle: { value: enabledWaves.includes('middle') },
      enableBottom: { value: enabledWaves.includes('bottom') },

      topLineCount:    { value: topLineCount },
      middleLineCount: { value: middleLineCount },
      bottomLineCount: { value: bottomLineCount },

      topLineDistance:    { value: topLineDistance },
      middleLineDistance: { value: middleLineDistance },
      bottomLineDistance: { value: bottomLineDistance },

      topWavePosition:    { value: new Vector3(topWavePosition?.x ?? 10.0, topWavePosition?.y ?? 0.5, topWavePosition?.rotate ?? -0.4) },
      middleWavePosition: { value: new Vector3(middleWavePosition?.x ?? 5.0, middleWavePosition?.y ?? 0.0, middleWavePosition?.rotate ?? 0.2) },
      bottomWavePosition: { value: new Vector3(bottomWavePosition?.x ?? 2.0, bottomWavePosition?.y ?? -0.7, bottomWavePosition?.rotate ?? 0.4) },

      iMouse:        { value: new Vector2(-1000, -1000) },
      interactive:   { value: interactive },
      bendRadius:    { value: bendRadius },
      bendStrength:  { value: bendStrength },
      bendInfluence: { value: 0 },

      parallax:        { value: parallax },
      parallaxStrength: { value: parallaxStrength },
      parallaxOffset:  { value: new Vector2(0, 0) },

      lineGradient:      { value: Array.from({ length: MAX_GRADIENT_STOPS }, () => new Vector3(1, 1, 1)) },
      lineGradientCount: { value: 0 }
    };

    if (linesGradient && linesGradient.length > 0) {
      const stops = linesGradient.slice(0, MAX_GRADIENT_STOPS);
      uniforms.lineGradientCount.value = stops.length;
      stops.forEach((hex, i) => {
        const color = hexToVec3(hex);
        uniforms.lineGradient.value[i].set(color.x, color.y, color.z);
      });
    }

    uniformsRef.current = uniforms;

    const material = new ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    const geometry = new PlaneGeometry(2, 2);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    const clock = new Clock();

    const setSize = () => {
      if (!containerRef.current) return;
      const el = containerRef.current;
      const width = el.clientWidth || 1;
      const height = el.clientHeight || 1;
      renderer.setSize(width, height, false);
      uniforms.iResolution.value.set(
        renderer.domElement.width,
        renderer.domElement.height,
        1
      );
    };
    setSize();

    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(setSize) : null;
    if (ro && containerRef.current) ro.observe(containerRef.current);

    // Pause rendering when tab is hidden
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Pause rendering when component is scrolled off screen
    const io = typeof IntersectionObserver !== 'undefined'
      ? new IntersectionObserver(([entry]) => { isInViewRef.current = entry.isIntersecting; }, { threshold: 0 })
      : null;
    if (io && containerRef.current) io.observe(containerRef.current);

    // Throttle pointer events — 60fps is more than enough for smooth interaction
    let lastPointerTime = 0;
    const handlePointerMove = event => {
      const now = performance.now();
      if (now - lastPointerTime < 16) return;
      lastPointerTime = now;

      const rect = renderer.domElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const dpr = renderer.getPixelRatio();

      targetMouseRef.current.set(x * dpr, (rect.height - y) * dpr);
      targetInfluenceRef.current = 1.0;

      if (parallaxRef.current) {
        const offsetX = (x - rect.width  / 2) / rect.width;
        const offsetY = (rect.height / 2 - y) / rect.height;
        targetParallaxRef.current.set(
          offsetX * parallaxStrengthRef.current,
          offsetY * parallaxStrengthRef.current
        );
      }
    };

    const handlePointerLeave = () => {
      targetInfluenceRef.current = 0.0;
    };

    renderer.domElement.addEventListener('pointermove', handlePointerMove);
    renderer.domElement.addEventListener('pointerleave', handlePointerLeave);

    let raf = 0;
    const renderLoop = () => {
      raf = requestAnimationFrame(renderLoop);

      // Skip render when off-screen or tab hidden
      if (!isVisibleRef.current || !isInViewRef.current) return;

      uniforms.iTime.value = clock.getElapsedTime();

      const damping = mouseDampingRef.current;

      if (interactiveRef.current) {
        currentMouseRef.current.lerp(targetMouseRef.current, damping);
        uniforms.iMouse.value.copy(currentMouseRef.current);

        currentInfluenceRef.current += (targetInfluenceRef.current - currentInfluenceRef.current) * damping;
        uniforms.bendInfluence.value = currentInfluenceRef.current;
      }

      if (parallaxRef.current) {
        currentParallaxRef.current.lerp(targetParallaxRef.current, damping);
        uniforms.parallaxOffset.value.copy(currentParallaxRef.current);
      }

      renderer.render(scene, camera);
    };
    renderLoop();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (ro) ro.disconnect();
      if (io) io.disconnect();
      renderer.domElement.removeEventListener('pointermove', handlePointerMove);
      renderer.domElement.removeEventListener('pointerleave', handlePointerLeave);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      uniformsRef.current = null;
      rendererRef.current = null;
      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update uniforms in-place when props change — no renderer recreation needed
  useEffect(() => {
    const u = uniformsRef.current;
    if (!u) return;

    u.animationSpeed.value  = animationSpeed;
    u.interactive.value     = interactive;
    u.bendRadius.value      = bendRadius;
    u.bendStrength.value    = bendStrength;
    u.parallax.value        = parallax;
    u.parallaxStrength.value = parallaxStrength;

    u.enableTop.value    = enabledWaves.includes('top');
    u.enableMiddle.value = enabledWaves.includes('middle');
    u.enableBottom.value = enabledWaves.includes('bottom');

    u.topLineCount.value    = topLineCount;
    u.middleLineCount.value = middleLineCount;
    u.bottomLineCount.value = bottomLineCount;

    u.topLineDistance.value    = topLineDistance;
    u.middleLineDistance.value = middleLineDistance;
    u.bottomLineDistance.value = bottomLineDistance;

    u.topWavePosition.value.set(
      topWavePosition?.x ?? 10.0,
      topWavePosition?.y ?? 0.5,
      topWavePosition?.rotate ?? -0.4
    );
    u.middleWavePosition.value.set(
      middleWavePosition?.x ?? 5.0,
      middleWavePosition?.y ?? 0.0,
      middleWavePosition?.rotate ?? 0.2
    );
    u.bottomWavePosition.value.set(
      bottomWavePosition?.x ?? 2.0,
      bottomWavePosition?.y ?? -0.7,
      bottomWavePosition?.rotate ?? 0.4
    );

    if (linesGradient && linesGradient.length > 0) {
      const stops = linesGradient.slice(0, MAX_GRADIENT_STOPS);
      u.lineGradientCount.value = stops.length;
      stops.forEach((hex, i) => {
        const color = hexToVec3(hex);
        u.lineGradient.value[i].set(color.x, color.y, color.z);
      });
    } else {
      u.lineGradientCount.value = 0;
    }

    // Update pixel ratio without recreating renderer
    if (rendererRef.current) {
      const newDpr = pixelRatio
        ? Math.min(pixelRatio, 1.25)
        : Math.min(window.devicePixelRatio || 1, 1.25);
      rendererRef.current.setPixelRatio(newDpr);
    }
  }, [
    linesGradient, enabledWaves,
    topLineCount, middleLineCount, bottomLineCount,
    topLineDistance, middleLineDistance, bottomLineDistance,
    topWavePosition, middleWavePosition, bottomWavePosition,
    animationSpeed, interactive, bendRadius, bendStrength,
    parallax, parallaxStrength, pixelRatio
  ]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden floating-lines-container"
      style={{ mixBlendMode }}
    />
  );
}
