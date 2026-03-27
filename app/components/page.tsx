"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, ChevronDown, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { DataTablePagination } from "@/components/date_pagination";


/* ================= EXAMPLE PREVIEW ================= */
const DataTablePaginationPreview = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  return (
    <DataTablePagination
      page={page}
      pageSize={pageSize}
      total={123}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
    />
  );
};


type CodeSnippet = {
  title?: string;
  description?: string;       // Optional explanation or details about this snippet
  code: string;
};

type ComponentSection = {
  title: string;
  preview?: React.ReactNode;
  codeSnippets?: CodeSnippet[];
  instructions?: string;
};

type ComponentItem = {
  name: string;
  category: string;
  sections: ComponentSection[];
};

/* ================= COMPONENT DATA ================= */
export const componentsList: ComponentItem[] = [
    {
      name: "DataTablePagination",
      category: "UI",
      sections: [
        {
          title: "Interactive Pagination",
          instructions: `Steps:
  1. Import DataTablePagination
  2. Pass page, pageSize, total, onPageChange, onPageSizeChange
  3. Optionally customize pageSizeOptions`,
          preview: <DataTablePaginationPreview />, // live preview
          codeSnippets: [
            {
              title: "Basic Usage",
              code: `<DataTablePagination
    page={1}
    pageSize={10}
    total={123}
    onPageChange={(page) => console.log(page)}
    onPageSizeChange={(size) => console.log(size)}
  />`,
              description: "The simplest usage showing a static total with default page size and handling page/pageSize changes."
            },
            {
              title: "Custom Page Sizes",
              code: `'use client'
  
  import { Field, FieldLabel } from '@/components/ui/field'
  import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
  } from '@/components/ui/pagination'
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from '@/components/ui/select'
  import { cn } from '@/lib/utils'
  
  type DataTablePaginationProps = {
    page: number
    pageSize: number
    total: number
    onPageChange: (page: number) => void
    onPageSizeChange: (size: number) => void
    pageSizeOptions?: number[]
    className?: string
    disabled?: boolean
  }
  
  export function DataTablePagination({
    page,
    pageSize,
    total,
    onPageChange,
    onPageSizeChange,
    pageSizeOptions = [10, 25, 50, 100],
    className,
    disabled
  }: DataTablePaginationProps) {
    const totalPages = Math.max(1, Math.ceil(total / pageSize))
    const from = total === 0 ? 0 : (page - 1) * pageSize + 1
    const to = Math.min(page * pageSize, total)
    const canPrevious = page > 1
    const canNext = page < totalPages
    const isDisabled = disabled || total === 0
  
    return (
      <div className={cn('flex flex-col gap-3 border-t bg-background px-4 py-3 sm:flex-row sm:items-center sm:justify-between', className)}>
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium text-foreground">{from}</span>–
          <span className="font-medium text-foreground">{to}</span> of{' '}
          <span className="font-medium text-foreground">{total}</span>
        </p>
  
        <div className="flex flex-wrap items-center gap-3">
          <Field orientation="horizontal" className="w-fit gap-2">
            <FieldLabel htmlFor="rows-per-page" className="text-xs text-muted-foreground">
              Rows
            </FieldLabel>
            <Select value={String(pageSize)} onValueChange={v => onPageSizeChange(Number(v))}>
              <SelectTrigger id="rows-per-page" className="h-8 w-[72px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent align="end">
                <SelectGroup>
                  {pageSizeOptions.map(size => (
                    <SelectItem key={size} value={String(size)}>{size}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
  
          <Pagination className="mx-0 w-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  aria-disabled={!canPrevious || isDisabled}
                  className={cn('h-8', (!canPrevious || isDisabled) && 'pointer-events-none opacity-50')}
                  onClick={e => { e.preventDefault(); if(canPrevious && !isDisabled) onPageChange(page-1) }}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#"
                  aria-disabled={!canNext || isDisabled}
                  className={cn('h-8', (!canNext || isDisabled) && 'pointer-events-none opacity-50')}
                  onClick={e => { e.preventDefault(); if(canNext && !isDisabled) onPageChange(page+1) }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    )
  }`,
              description: "Demonstrates a fully functional pagination component with selectable page sizes and proper next/previous controls."
            },
            {
              title: "Disabled State",
              code: `<DataTablePagination
    page={1}
    pageSize={10}
    total={0}
    disabled
  />`,
              description: "Shows the component when there is no data; pagination controls are disabled automatically."
            }
          ]
        }
      ]
    }
  ];

/* ================= PAGE ================= */
export default function ComponentsPage() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentItem>(
    componentsList[0]
  );
  const [copied, setCopied] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["UI"]);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  const categories = Array.from(new Set(componentsList.map((c) => c.category)));

  return (
    <>
      <Navbar
        links={[
          { name: "Home", href: "/" },
          { name: "Components", href: "/components" },
        ]}
        languages={[
          { code: "en", label: "English" },
          { code: "am", label: "Amharic" },
          { code: "om", label: "Oromo" },
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 pt-24 flex flex-col lg:flex-row gap-6">
        {/* ================= Sidebar ================= */}
        <aside className="lg:w-64 sticky top-24 h-[calc(100vh-6rem)]">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Components</CardTitle>
            </CardHeader>
            <CardContent className="p-0 h-full">
              <ScrollArea className="h-full">
                <div className="flex flex-col gap-1 p-2">
                  {categories.map((cat) => {
                    const isExpanded = expandedCategories.includes(cat);
                    const catComponents = componentsList.filter(
                      (comp) => comp.category === cat
                    );
                    return (
                      <div key={cat} className="mb-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-full justify-between font-semibold"
                          onClick={() =>
                            setExpandedCategories((prev) =>
                              prev.includes(cat)
                                ? prev.filter((c) => c !== cat)
                                : [...prev, cat]
                            )
                          }
                        >
                          <span>{cat}</span>
                          {isExpanded ? (
                            <ChevronDown size={16} />
                          ) : (
                            <ChevronRight size={16} />
                          )}
                        </Button>
                        {isExpanded && (
                          <div className="flex flex-col gap-1 mt-1 ml-2">
                            {catComponents.map((comp) => (
                              <Button
                                key={comp.name}
                                variant={
                                  selectedComponent.name === comp.name
                                    ? "default"
                                    : "outline"
                                }
                                size="sm"
                                className="justify-between w-full text-left"
                                onClick={() => setSelectedComponent(comp)}
                              >
                                <span>{comp.name}</span>
                                <Badge variant="default" className="text-xs ml-2">
                                  {comp.category}
                                </Badge>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </aside>

        {/* ================= Main Content ================= */}
        <section className="flex-1 space-y-6">
          {selectedComponent.sections.map((section, idx) => (
            <Card
              key={idx}
              className="bg-gray-50 dark:bg-gray-900 transition border border-gray-200 dark:border-gray-800"
            >
              <CardHeader>
                <CardTitle>{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="preview" className="space-y-4">
                  <TabsList>
                    {section.preview && <TabsTrigger value="preview">Preview</TabsTrigger>}
                    {section.codeSnippets && <TabsTrigger value="code">Code</TabsTrigger>}
                    {section.instructions && (
                      <TabsTrigger value="instructions">Instructions</TabsTrigger>
                    )}
                  </TabsList>

                  {section.preview && (
                    <TabsContent value="preview">
                      <div className="p-2">{section.preview}</div>
                    </TabsContent>
                  )}

{section.codeSnippets && (
  <TabsContent value="code">
    {section.codeSnippets.map((snippet, idx) => (
      <Card key={idx} className="my-2 relative">
        {snippet.title && (
          <CardHeader>
            <CardTitle className="text-sm">{snippet.title}</CardTitle>
          </CardHeader>
        )}

        <CardContent className="relative">
          {/* Description */}
          {snippet.description && (
            <p className="text-xs text-muted-foreground mb-2">{snippet.description}</p>
          )}

          {/* Code */}
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            className="rounded"
          >
            {snippet.code}
          </SyntaxHighlighter>

          {/* Copy Button */}
          <Button
            variant="secondary"
            size="sm"
            className="absolute top-2 right-2 flex items-center gap-1"
            onClick={() => copyToClipboard(snippet.code)}
          >
            <Copy size={14} /> {copied ? "Copied" : "Copy"}
          </Button>
        </CardContent>
      </Card>
    ))}
  </TabsContent>
)}

                  {section.instructions && (
                    <TabsContent value="instructions">
                      <pre className="whitespace-pre-wrap text-sm text-muted-foreground">
                        {section.instructions}
                      </pre>
                    </TabsContent>
                  )}
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .animate-fade {
          animation: fadeOut 1.2s ease forwards;
        }
        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  );
}