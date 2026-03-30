export type Platform = "next" | "flutter" | "logic";

export type PropItem = {
  name: string;
  type: string;
  required?: boolean;
  description: string;
};

export type CodeSnippet = {
  title?: string;
  description?: string;
  code: string;
};

export type ComponentSection = {
  title: string;
  preview?: any;
  codeSnippets?: CodeSnippet[];
  instructions?: string;
};

export type ComponentItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  platform: Platform;
  tags: string[];
  props?: PropItem[];
  sections: ComponentSection[];
  author?: string;
  version: string;
};