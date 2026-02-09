"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import { Bold, Italic, Underline as UnderlineIcon, Strikethrough, Code, List, ListOrdered, Heading1, Heading2, Heading3, Quote, Undo, Redo, Link2, ImageIcon, AlignLeft, AlignCenter, AlignRight, AlignJustify, Highlighter, Minus } from "lucide-react";

const RichTextEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Image,
      Link.configure({ openOnClick: false }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight.configure({ multicolor: true }),
      TextStyle,
      Color,
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "prose prose-invert max-w-none focus:outline-none min-h-[400px] px-4 py-3 prose-headings:text-white prose-p:text-zinc-300 prose-strong:text-white prose-em:text-zinc-300 prose-code:text-purple-400 prose-code:bg-zinc-900 prose-pre:bg-zinc-900 prose-blockquote:border-purple-500 prose-blockquote:text-zinc-400 prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300 prose-li:text-zinc-300 prose-ul:text-zinc-300 prose-ol:text-zinc-300 prose-hr:border-zinc-700",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
      <div className="flex items-center gap-1 p-2 border-b border-zinc-800 flex-wrap">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("bold") ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("italic") ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("underline") ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <UnderlineIcon className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("strike") ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <Strikethrough className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("code") ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("highlight") ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <Highlighter className="w-4 h-4" />
        </button>
        
        <div className="w-px h-6 bg-zinc-800 mx-1" />
        
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("heading", { level: 1 }) ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <Heading1 className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("heading", { level: 2 }) ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <Heading2 className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("heading", { level: 3 }) ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <Heading3 className="w-4 h-4" />
        </button>
        
        <div className="w-px h-6 bg-zinc-800 mx-1" />
        
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive({ textAlign: "left" }) ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <AlignLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive({ textAlign: "center" }) ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <AlignCenter className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive({ textAlign: "right" }) ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <AlignRight className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive({ textAlign: "justify" }) ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <AlignJustify className="w-4 h-4" />
        </button>
        
        <div className="w-px h-6 bg-zinc-800 mx-1" />
        
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("bulletList") ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <List className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("orderedList") ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-zinc-800 transition-colors ${editor.isActive("blockquote") ? "bg-zinc-800 text-white" : "text-zinc-400"}`}
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="p-2 rounded hover:bg-zinc-800 transition-colors text-zinc-400"
        >
          <Minus className="w-4 h-4" />
        </button>
        
        <div className="w-px h-6 bg-zinc-800 mx-1" />
        
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-zinc-800 transition-colors text-zinc-400 disabled:opacity-30"
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-zinc-800 transition-colors text-zinc-400 disabled:opacity-30"
        >
          <Redo className="w-4 h-4" />
        </button>
      </div>
      <EditorContent editor={editor} className="text-white" />
    </div>
  );
};

export default RichTextEditor;
