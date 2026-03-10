"use client";
import { motion } from "framer-motion";
import ServiceHero from "@/components/Services/ServiceHero";
import ResumeForm from "@/components/Careers/ResumeForm";
import CTACard from "@/components/ui/CTACard";
import { Particles } from "@/components/ui/particles";

export default function Careers() {
  const handleApplyClick = (e) => {
    e.preventDefault();
    document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen font-(family-name:--font-geist-sans) bg-[#0F061A] text-white selection:bg-purple-500/30">
      <main className="grow">
        <div className="relative">
          {/* ── Particles & Glow backdrop ── */}
          <motion.div
            className="absolute -top-10 -bottom-10 left-1/2 -translate-x-1/2 w-[220%] max-w-[1400px] pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(168,85,247,0.10) 0%, rgba(139,92,246,0.03) 50%, transparent 75%)",
              }}
            />
            <Particles
              className="absolute inset-0 w-full h-full"
              quantity={80}
              staticity={40}
              ease={60}
              size={0.5}
              color="#a855f7"
              vx={0}
              vy={-0.05}
            />
          </motion.div>
          <ServiceHero
            title="Join Our"
            highlightedText="Team"
            subtitle="Be part of a creative, innovative team that's shaping the future of digital experiences. We're always looking for talented individuals who are passionate about their craft."
            ctaText="Apply Now"
            ctaHref="#apply"
            onCtaClick={handleApplyClick}
          />
        </div>
        {/* Application Form Section */}
        <section className="py-20 px-4" id="apply">
          <div className="max-w-3xl mx-auto">
            <ResumeForm showRoleDropdown={true} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <CTACard
            title="Don't See Your Role?"
            description="We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities."
            buttonText="Contact Us"
            buttonHref="/about-contact"
          />
        </section>
      </main>
    </div>
  );
}
