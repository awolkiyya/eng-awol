"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Menu, ChevronDown, ChevronRight, LucideSearch, Copy } from "lucide-react";
import { Transition } from "@headlessui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { componentsList } from "@/data/components";
export type Platform = "next" | "flutter" | "logic";

export type PropItem = {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description: string;
};

export type EventItem = {
  name: string;
  payload?: string;
  description: string;
};

export type CodeSnippet = {
  title?: string;
  description?: string;
  code: string;
};

export type SectionGuideline = {
  title: string;
  content: string;
  tags?: string[];
};

export type ComponentSection = {
  title: string;
  description?: string;
  preview?: React.ReactNode;
  flutterPreviewImage?: string;
  codeSnippets?: CodeSnippet[];
  instructions?: string;
  guidelines?: SectionGuideline[];
};

export type ComponentItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  platform: Platform;
  tags?: string[];
  props?: PropItem[];
  events?: EventItem[];
  sections: ComponentSection[];
  links?: { label: string; url: string }[];
  difficulty?: "beginner" | "intermediate" | "advanced";
  version?: string;
  updatedAt?: string;
};

export default function ComponentsPage() {
  const [selected, setSelected] = useState<ComponentItem>(componentsList[0]);
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState<"all" | "next" | "flutter" | "logic">("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filtered = useMemo(() => {
    return componentsList.filter(
      (c) =>
        (platform === "all" || c.platform === platform) &&
        c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [platform, search]);

  const categories = useMemo(() => [...new Set(filtered.map((c) => c.category))], [filtered]);

  const copy = (code: string, idx?: number) => {
    navigator.clipboard.writeText(code);
    if (idx !== undefined) setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1200);
  };

  return (
    <>
      <Navbar
        links={[{ name: "Home", href: "/" }, { name: "Components & Logics", href: "/components" }]}
        languages={[
          { code: "en", label: "English" },
          { code: "am", label: "Amharic" },
          { code: "om", label: "Oromo" },
        ]}
      />
{/* ================= DEVELOPER REFERENCE BANNER ================= */}
<section className="max-w-7xl mx-auto px-2 pt-24 ">
  <div className=" border-l-4 border-blue-500 rounded-lg p-6 flex flex-col md:flex-row md:items-center gap-6 shadow-sm">
    
    {/* Text Section */}
    <div className="flex-1 space-y-2">
      <h1 className="text-xl md:text-3xl font-bold text-blue-900">
        Developer Component Hub
      </h1>
      <p className="text-sm md:text-base text-blue-800">
        Instantly access curated <span className="font-medium">Next.js components</span>, 
        <span className="font-medium">Flutter widgets</span>, and 
        <span className="font-medium"> reusable logic snippets</span> from experienced developers.
        Solve common challenges faster and build smarter applications.
      </p>

      {/* Badges for quick visual cue */}
      <div className="flex gap-2 mt-2 flex-wrap">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">Next.js</span>
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">Flutter</span>
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">Logic</span>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex-shrink-0">
      <img
        src="/assets/a-3d-web-development-icon-with-gears-isolated-on-transparent-background-png.webp"
        alt="Developer Components"
        className="w-32 md:w-40"
      />
    </div>
  </div>
</section>
      <div className="flex max-w-7xl mx-auto px-4 pt-10 gap-6">
        {/* ================= SIDEBAR ================= */}
        <ResponsiveSidebar
          categories={categories}
          components={filtered}
          selected={selected}
          onSelect={(c) => setSelected(c)}
          search={search}
          setSearch={setSearch}
          platform={platform}
          setPlatform={setPlatform}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          isDesktop={isDesktop}
        />

        {/* ================= CONTENT ================= */}
        <section className="flex-1 space-y-6">
          {/* HEADER */}
          <Card>
            <CardHeader>
              <CardTitle>{selected.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{selected.description}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                <Badge>{selected.platform.toUpperCase()}</Badge>
                {selected.tags?.map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* PROPS */}
          {selected.props && selected.props.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Props</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="max-h-80">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left px-2 py-1">Name</th>
                        <th className="text-left px-2 py-1">Type</th>
                        <th className="text-left px-2 py-1">Required</th>
                        <th className="text-left px-2 py-1">Default</th>
                        <th className="text-left px-2 py-1">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selected.props.map((p, i) => (
                        <tr key={i} className="border-t">
                          <td className="font-medium px-2 py-1">{p.name}</td>
                          <td className="px-2 py-1">{p.type}</td>
                          <td className="px-2 py-1">{p.required ? "Yes" : "No"}</td>
                          <td className="px-2 py-1">{p.defaultValue || "-"}</td>
                          <td className="px-2 py-1">{p.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
              </CardContent>
            </Card>
          )}

          {/* EVENTS */}
          {selected.events && selected.events.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Events</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="max-h-80">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left px-2 py-1">Name</th>
                        <th className="text-left px-2 py-1">Payload</th>
                        <th className="text-left px-2 py-1">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selected.events.map((e, i) => (
                        <tr key={i} className="border-t">
                          <td className="font-medium px-2 py-1">{e.name}</td>
                          <td className="px-2 py-1">{e.payload || "-"}</td>
                          <td className="px-2 py-1">{e.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
              </CardContent>
            </Card>
          )}

          {/* SECTIONS */}
          {selected.sections.map((section: ComponentSection, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="preview">
                  <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                    <TabsTrigger value="instructions">Instructions</TabsTrigger>
                    {section.guidelines && <TabsTrigger value="guidelines">Guidelines</TabsTrigger>}
                  </TabsList>

                  <TabsContent value="preview" className="pt-3">
                    {section.preview ? (
                      section.preview
                    ) : selected.platform === "flutter" ? (
                      <img
                        src={section.flutterPreviewImage || "/images/flutter_preview_placeholder.png"}
                        alt="Flutter Preview"
                        className="w-full max-w-sm rounded border shadow-sm"
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground">No preview available.</p>
                    )}
                  </TabsContent>

                  <TabsContent value="code" className="pt-3 max-w-4xl space-y-3">
                    {section.codeSnippets?.map((snip, idx) => (
                      <div key={idx} className="relative">
                        {snip.title && <p className="text-sm font-medium mb-1">{snip.title}</p>}
                        <SyntaxHighlighter style={oneDark}>{snip.code}</SyntaxHighlighter>
                        <Button
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => copy(snip.code, idx)}
                        >
                          {copiedIndex === idx ? "Copied" : <Copy size={14} />}
                        </Button>
                      </div>
                    ))}
                  </TabsContent>

                  <TabsContent value="instructions" className="pt-3">
                    <pre className="text-sm whitespace-pre-wrap">{section.instructions || "No instructions provided."}</pre>
                  </TabsContent>

                  {section.guidelines && (
                    <TabsContent value="guidelines" className="pt-3 space-y-2">
                      {section.guidelines.map((g, idx) => (
                        <Card key={idx} className="border-l-4 border-indigo-500">
                          <CardContent>
                            <p className="font-medium">{g.title}</p>
                            <p className="text-sm text-muted-foreground">{g.content}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </TabsContent>
                  )}
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>

      <Footer />
    </>
  );
}



interface SidebarProps {
  categories: string[];
  components: ComponentItem[];
  selected: ComponentItem | null;
  onSelect: (item: ComponentItem) => void;
  search: string;
  setSearch: (value: string) => void;
  platform: "all" | "next" | "flutter" | "logic";
  setPlatform: (p: "all" | "next" | "flutter" | "logic") => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  isDesktop: boolean;
}

export const ResponsiveSidebar = ({
  categories,
  components,
  selected,
  onSelect,
  search,
  setSearch,
  platform,
  setPlatform,
  mobileOpen,
  setMobileOpen,
  isDesktop,
}: SidebarProps) => {
  const [expanded, setExpanded] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return components.filter(
      (c) =>
        (platform === "all" || c.platform === platform) &&
        c.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [components, search, platform]);

  return (
    <>
      {/* Mobile Toggle */}
      {!isDesktop && (
        <Button
          className="mb-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          size="sm"
          variant="outline"
        >
          <Menu size={16} /> Menu
        </Button>
      )}

      {/* Sidebar */}
      <Transition
        show={mobileOpen || isDesktop}
        enter="transition-transform duration-200"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
        
      >
        <aside className="w-64 md:w-64">
          <Card className="h-[calc(100vh-6rem)] sticky top-24 md:top-24">
            <CardContent className="p-2 space-y-3">
              {/* Search */}
              <div className="relative w-full">
                <Input
                  placeholder="Search components..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
                <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Platform Filter */}
              <div className="flex gap-2 flex-wrap mt-2">
                {["all", "next", "flutter", "logic"].map((p) => (
                  <Button
                    key={p}
                    size="sm"
                    variant={platform === p ? "default" : "outline"}
                    onClick={() => setPlatform(p as any)}
                  >
                    {p.toUpperCase()}
                  </Button>
                ))}
              </div>

              {/* Categories */}
              <ScrollArea className="h-[500px] mt-2 no-scrollbar">
                {categories.map((cat) => {
                  const items = filtered.filter((c) => c.category === cat);
                  if (!items.length) return null;

                  const isExpanded = expanded.includes(cat);

                  return (
                    <div key={cat} className="mb-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-between"
                        onClick={() =>
                          setExpanded((prev) =>
                            isExpanded
                              ? prev.filter((c) => c !== cat)
                              : [...prev, cat]
                          )
                        }
                      >
                        {cat}
                        {isExpanded ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </Button>

                      {isExpanded &&
                        items.map((comp) => (
                          <Button
                            key={comp.id}
                            size="sm"
                            variant={selected?.id === comp.id ? "default" : "outline"}
                            className="w-full justify-between mt-1 text-left"
                            onClick={() => {
                              onSelect(comp);
                              !isDesktop && setMobileOpen(false);
                            }}
                          >
                            {comp.name}
                          </Button>
                        ))}
                    </div>
                  );
                })}
              </ScrollArea>
            </CardContent>
          </Card>
        </aside>
      </Transition>
    </>
  );
};