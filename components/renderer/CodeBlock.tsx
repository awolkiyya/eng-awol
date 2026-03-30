"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="relative">
      <SyntaxHighlighter language="tsx" style={oneDark}>
        {code}
      </SyntaxHighlighter>

      <Button
        size="sm"
        className="absolute top-2 right-2"
        onClick={copy}
      >
        <Copy size={14} /> {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}