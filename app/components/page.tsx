"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, ChevronDown, ChevronRight, LucideSearch } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { DataTablePagination } from "@/components/date_pagination";
import { Input } from "@/components/ui/input";

type Platform = "next" | "flutter" | "logic";

type PropItem = {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description: string;
};

type EventItem = {
  name: string;
  payload?: string;
  description: string;
};

type CodeSnippet = {
  title?: string;
  description?: string;
  code: string;
};

type SectionGuideline = {
  title: string;
  content: string;
  tags?: string[];
};

type ComponentSection = {
  title: string;
  description?: string;
  preview?: React.ReactNode;
  flutterPreviewImage?: string;
  codeSnippets?: CodeSnippet[];
  instructions?: string;
  guidelines?: SectionGuideline[];
};

type ComponentItem = {
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

/* ================= PREVIEW COMPONENTS ================= */

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

const FlutterPreviewFallback = ({ src }: { src?: string }) => (
  <img
    src={src || "/images/flutter_preview_placeholder.png"}
    alt="Flutter Widget Preview"
    className="w-full max-w-sm rounded border shadow-sm"
  />
);

/* ================= DATA ================= */

export const componentsList: ComponentItem[] = [
  {
    id: "data-table-pagination",
    name: "DataTablePagination",
    description: "Reusable pagination component for tables",
    category: "Next UI",
    platform: "next",
    tags: ["pagination", "table"],
    props: [
      { name: "page", type: "number", description: "Current page" },
      { name: "pageSize", type: "number", description: "Items per page" },
      { name: "total", type: "number", description: "Total items" },
    ],
    events: [
      { name: "onPageChange", payload: "number", description: "Fires when page changes" },
      { name: "onPageSizeChange", payload: "number", description: "Fires when pageSize changes" },
    ],
    sections: [
      {
        title: "Interactive Pagination",
        preview: <DataTablePaginationPreview />,
        instructions: `1. Import component
2. Pass page, pageSize, total
3. Handle page changes`,
        codeSnippets: [
          {
            title: "Basic Usage",
            description: "Minimal setup for a static table",
            code: `<DataTablePagination page={1} pageSize={10} total={123} />`,
          },
          {
            title: "With State",
            description: "Dynamic page and pageSize handling",
            code: `const [page, setPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

<DataTablePagination
  page={page}
  pageSize={pageSize}
  total={123}
  onPageChange={setPage}
  onPageSizeChange={setPageSize}
/>`,
          },
          {
            title: "Server-side Pagination",
            description: "Fetch data from API on page change",
            code: `const fetchData = async (page, pageSize) => {
  const res = await fetch(\`/api/items?page=\${page}&size=\${pageSize}\`);
  const data = await res.json();
  setItems(data.items);
  setTotal(data.total);
};

<DataTablePagination
  page={page}
  pageSize={pageSize}
  total={total}
  onPageChange={(p) => { setPage(p); fetchData(p, pageSize); }}
  onPageSizeChange={(size) => { setPageSize(size); fetchData(page, size); }}
/>`,
          },
        ],
        guidelines: [
          {
            title: "Accessibility",
            content: "Use proper labels for screen readers and ensure keyboard navigation works.",
          },
          {
            title: "Performance",
            content: "Avoid re-rendering parent components unnecessarily on page change.",
          },
        ],
      },
    ],
  },
  {
    id: "searchable-dropdown",
    name: "Searchable Dropdown (Flutter)",
    description: "Dropdown with search functionality",
    category: "Flutter UI",
    platform: "flutter",
    tags: ["dropdown", "search", "form"],
    sections: [
      {
        title: "Flutter Widget",
        flutterPreviewImage:
          "https://cdn.dribbble.com/userupload/17247258/file/original-3b6c5b6aefdb7033defd3f15fa2eb32b.png?resize=400x0",
        instructions:
          "Use this Flutter widget in your app to allow searchable dropdown selection.",
        codeSnippets: [
          {
            title: "Basic Dropdown",
            code: `DropdownButton<String>(
  value: selectedValue.isEmpty ? null : selectedValue,
  hint: Text('Select an option'),
  onChanged: (value) { setState(() { selectedValue = value!; }); },
  items: options.map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(),
)`,
          },
          {
            title: "With Search Filter",
            code: `TextField(
  decoration: InputDecoration(hintText: 'Search...'),
  onChanged: (query) {
    setState(() {
      filteredOptions = options.where((o) => o.contains(query)).toList();
    });
  },
)
DropdownButton<String>(
  value: selectedValue.isEmpty ? null : selectedValue,
  items: filteredOptions.map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(),
  onChanged: (value) { setState(() { selectedValue = value!; }); },
)`,
          },
          {
            title: "Custom Styling",
            code: `DropdownButton<String>(
  value: selectedValue,
  dropdownColor: Colors.blueGrey,
  style: TextStyle(color: Colors.white),
  items: options.map((e) => DropdownMenuItem(value: e, child: Text(e))).toList(),
  onChanged: (value) { setState(() { selectedValue = value!; }); },
)`,
          },
        ],
        guidelines: [
          {
            title: "UX Tip",
            content: "Keep option lists short or use search to improve usability.",
          },
        ],
      },
    ],
  },
  {
    id: "debounce",
    name: "Debounce Function",
    description: "Optimize function calls",
    category: "Logic",
    platform: "logic",
    tags: ["performance", "optimization"],
    sections: [
      {
        title: "Debounce",
        instructions: "Wrap functions with debounce to limit the number of times they are called.",
        codeSnippets: [
          {
            title: "Basic Debounce",
            code: `export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}`,
          },
          {
            title: "Debounce with Immediate Option",
            code: `export function debounce(fn, delay = 300, immediate = false) {
  let timer;
  return (...args) => {
    const callNow = immediate && !timer;
    clearTimeout(timer);
    timer = setTimeout(() => { timer = null; if(!immediate) fn(...args); }, delay);
    if(callNow) fn(...args);
  };
}`,
          },
        ],
        guidelines: [
          {
            title: "Use Cases",
            content: "Ideal for search input, window resize, or scroll events to improve performance.",
          },
        ],
      },
    ],
  },
  {
    id: "modal-dialog",
    name: "Modal Dialog",
    description: "Reusable modal component for displaying content overlays",
    category: "Next UI",
    platform: "next",
    tags: ["modal", "overlay", "dialog"],
    props: [
      { name: "isOpen", type: "boolean", description: "Controls modal visibility" },
      { name: "onClose", type: "() => void", description: "Callback when modal closes" },
      { name: "title", type: "string", description: "Modal header title" },
    ],
    events: [
      { name: "onOpen", payload: "void", description: "Fires when modal opens" },
      { name: "onClose", payload: "void", description: "Fires when modal closes" },
    ],
    sections: [
      {
        title: "Modal Examples",
        codeSnippets: [
          {
            title: "Basic Modal",
            code: `<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello Modal">
  <p>This is modal content</p>
</Modal>`,
          },
          {
            title: "Modal with Footer Buttons",
            code: `<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action">
  <p>Are you sure you want to continue?</p>
  <ModalFooter>
    <Button onClick={cancel}>Cancel</Button>
    <Button onClick={confirm}>Confirm</Button>
  </ModalFooter>
</Modal>`,
          },
        ],
      },
    ],
  },
  {
    id: "form-input",
    name: "Form Input",
    description: "Text input component with validation",
    category: "Next UI",
    platform: "next",
    tags: ["form", "input", "validation"],
    props: [
      { name: "value", type: "string", description: "Current input value" },
      { name: "onChange", type: "(value: string) => void", description: "Fires on input change" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
      { name: "error", type: "string", description: "Validation error message" },
    ],
    sections: [
      {
        title: "Input Examples",
        codeSnippets: [
          {
            title: "Basic Input",
            code: `<FormInput value={text} onChange={setText} placeholder="Enter your name" />`,
          },
          {
            title: "Input with Error",
            code: `<FormInput value={text} onChange={setText} placeholder="Enter email" error={error} />`,
          },
          {
            title: "Input with Custom Styles",
            code: `<FormInput value={text} onChange={setText} placeholder="Enter name" className="border-red-500 rounded-md" />`,
          },
        ],
      },
    ],
  },
  {
    id: "tabs",
    name: "Tabs Component",
    description: "Tab navigation for switching between views",
    category: "Next UI",
    platform: "next",
    tags: ["tabs", "navigation"],
    props: [
      { name: "activeTab", type: "number", description: "Index of the active tab" },
      { name: "onTabChange", type: "(index: number) => void", description: "Callback when tab changes" },
      { name: "tabs", type: "string[]", description: "List of tab labels" },
    ],
    events: [
      { name: "onTabChange", payload: "number", description: "Fires when user changes tab" },
    ],
    sections: [
      {
        title: "Tabs Example",
        codeSnippets: [
          {
            title: "Simple Tabs",
            code: `<Tabs tabs={['Home', 'Profile', 'Settings']} activeTab={0} onTabChange={setActiveTab} />`,
          },
        ],
        guidelines: [
          {
            title: "Accessibility",
            content: "Use proper ARIA roles and keyboard navigation for tabs.",
          },
        ],
      },
    ],
  },
  {
    id: "toast-notification",
    name: "Toast Notification",
    description: "Temporary notifications for user actions",
    category: "Next UI",
    platform: "next",
    tags: ["notification", "alert"],
    props: [
      { name: "message", type: "string", description: "Notification message" },
      { name: "type", type: "'info' | 'success' | 'error' | 'warning'", description: "Notification type" },
      { name: "duration", type: "number", description: "Auto-close duration in ms", defaultValue: "3000" },
    ],
    sections: [
      {
        title: "Toast Example",
        codeSnippets: [
          {
            title: "Basic Toast",
            code: `toast({ message: 'Saved successfully!', type: 'success', duration: 3000 })`,
          },
        ],
        guidelines: [
          {
            title: "UX Tip",
            content: "Keep notifications short and actionable. Avoid stacking too many.",
          },
        ],
      },
    ],
  },
  {
    id: "animated-button",
    name: "Animated Button",
    description: "Button with hover and click animations",
    category: "Flutter UI",
    platform: "flutter",
    tags: ["button", "animation", "ui"],
    sections: [
      {
        title: "Flutter Button Example",
        flutterPreviewImage:
          "https://cdn.dribbble.com/userupload/17247258/file/original-animated_button.png?resize=400x0",
        instructions: "Use this button to provide interactive feedback in your Flutter app.",
        codeSnippets: [
          {
            title: "Basic Animated Button",
            code: `ElevatedButton(
  onPressed: () {},
  style: ButtonStyle(
    overlayColor: MaterialStateProperty.all(Colors.blueAccent),
  ),
  child: Text('Click Me'),
)`,
          },
        ],
        guidelines: [
          {
            title: "Performance",
            content: "Keep animations lightweight to avoid jank in Flutter apps.",
          },
        ],
      },
    ],
  },
  {
    id: "throttle",
    name: "Throttle Function",
    description: "Limit the frequency of function calls",
    category: "Logic",
    platform: "logic",
    tags: ["optimization", "performance"],
    sections: [
      {
        title: "Throttle Usage",
        instructions: "Use throttle to avoid expensive function calls running too often.",
        codeSnippets: [
          {
            title: "Basic Throttle",
            code: `export function throttle(fn, limit = 300) {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if(now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}`,
          },
        ],
        guidelines: [
          {
            title: "Use Cases",
            content: "Good for scroll, resize, and mouse move events to optimize performance.",
          },
        ],
      },
    ],
  },
  {
    id: "file-uploader",
    name: "File Uploader",
    description: "Drag-and-drop or select files to upload",
    category: "Next UI",
    platform: "next",
    tags: ["upload", "form", "file"],
    props: [
      { name: "onUpload", type: "(files: File[]) => void", description: "Callback after files are selected" },
      { name: "multiple", type: "boolean", description: "Allow multiple files", defaultValue: "false" },
      { name: "accept", type: "string", description: "Accepted file types (e.g. .png, .jpg)" },
    ],
    sections: [
      {
        title: "Uploader Example",
        codeSnippets: [
          {
            title: "Basic Usage",
            code: `<FileUploader multiple accept=".png,.jpg" onUpload={(files) => console.log(files)} />`,
          },
        ],
        guidelines: [
          {
            title: "UX Tip",
            content: "Provide clear instructions and file size limits to users.",
          },
        ],
      },
    ],
  },
  {
    id: "deep-clone",
    name: "Deep Clone",
    description: "Deep clone objects or arrays without references",
    category: "Logic",
    platform: "logic",
    tags: ["clone", "immutable"],
    sections: [
      {
        title: "Deep Clone Function",
        instructions: "Use deepClone to avoid reference issues when copying objects or arrays.",
        codeSnippets: [
          {
            title: "Basic Deep Clone",
            code: `export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}`,
          },
          {
            title: "Deep Clone with Recursion",
            code: `export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const copy = {};
  for (const key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}`,
          },
        ],
        guidelines: [
          {
            title: "Caution",
            content: "JSON-based cloning does not handle functions or circular references.",
          },
        ],
      },
    ],
  },

  {
    id: "format-date",
    name: "Format Date",
    description: "Format JavaScript dates into readable strings",
    category: "Logic",
    platform: "logic",
    tags: ["date", "format"],
    sections: [
      {
        title: "Date Formatter",
        instructions: "Convert Date objects into `YYYY-MM-DD` or other formats.",
        codeSnippets: [
          {
            title: "Basic YYYY-MM-DD",
            code: `export function formatDate(date) {
  const d = new Date(date);
  return \`\${d.getFullYear()}-\${(d.getMonth()+1).toString().padStart(2,'0')}-\${d.getDate().toString().padStart(2,'0')}\`;
}`,
          },
          {
            title: "Custom Format",
            code: `export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date);
  const map = {
    YYYY: d.getFullYear(),
    MM: (d.getMonth()+1).toString().padStart(2,'0'),
    DD: d.getDate().toString().padStart(2,'0'),
    hh: d.getHours().toString().padStart(2,'0'),
    mm: d.getMinutes().toString().padStart(2,'0'),
    ss: d.getSeconds().toString().padStart(2,'0'),
  };
  return format.replace(/YYYY|MM|DD|hh|mm|ss/g, matched => map[matched]);
}`,
          },
        ],
        guidelines: [
          {
            title: "Tip",
            content: "Always handle invalid date inputs to prevent runtime errors.",
          },
        ],
      },
    ],
  },

  {
    id: "unique-array",
    name: "Unique Array",
    description: "Remove duplicates from arrays",
    category: "Logic",
    platform: "logic",
    tags: ["array", "unique", "filter"],
    sections: [
      {
        title: "Unique Array Function",
        instructions: "Use to deduplicate arrays efficiently.",
        codeSnippets: [
          {
            title: "Using Set",
            code: `export const uniqueArray = (arr) => [...new Set(arr)];`,
          },
          {
            title: "Using Filter",
            code: `export const uniqueArray = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);`,
          },
        ],
      },
    ],
  },

  {
    id: "capitalize",
    name: "Capitalize Text",
    description: "Capitalize first letter of a string or every word",
    category: "Logic",
    platform: "logic",
    tags: ["string", "text", "format"],
    sections: [
      {
        title: "String Capitalization",
        codeSnippets: [
          {
            title: "First Letter Capital",
            code: `export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);`,
          },
          {
            title: "Capitalize Each Word",
            code: `export const capitalizeWords = (str) =>
  str.replace(/\\b\\w/g, char => char.toUpperCase());`,
          },
        ],
      },
    ],
  },

  {
    id: "random-id",
    name: "Random ID Generator",
    description: "Generate random alphanumeric IDs",
    category: "Logic",
    platform: "logic",
    tags: ["id", "random", "utility"],
    sections: [
      {
        title: "Generate Random IDs",
        codeSnippets: [
          {
            title: "Random String",
            code: `export const randomId = (length = 8) =>
  Math.random().toString(36).substring(2, 2 + length);`,
          },
          {
            title: "UUID-like",
            code: `export const uuid = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });`,
          },
        ],
      },
    ],
  },

  {
    id: "debounce-improved",
    name: "Debounce Function (Advanced)",
    description: "Debounce with leading/trailing edge support",
    category: "Logic",
    platform: "logic",
    tags: ["performance", "optimization", "debounce"],
    sections: [
      {
        title: "Advanced Debounce",
        codeSnippets: [
          {
            title: "Debounce with Immediate Call",
            code: `export function debounce(fn, wait = 300, immediate = false) {
  let timer;
  return function(...args) {
    const context = this;
    const later = () => {
      timer = null;
      if (!immediate) fn.apply(context, args);
    };
    const callNow = immediate && !timer;
    clearTimeout(timer);
    timer = setTimeout(later, wait);
    if (callNow) fn.apply(context, args);
  };
}`,
          },
        ],
        guidelines: [
          {
            title: "Use Cases",
            content: "Best for search input, window resize, scroll events, and live filtering.",
          },
        ],
      },
    ],
  },
];
/* ================= PAGE ================= */

export default function ComponentsPage() {
  const [selected, setSelected] = useState<ComponentItem>(
    componentsList[0]
  );
  const [expanded, setExpanded] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState<Platform | "all">("all");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const filtered = componentsList.filter((c) => {
    const s = c.name.toLowerCase().includes(search.toLowerCase());
    const p = platform === "all" || c.platform === platform;
    return s && p;
  });

  const categories = [...new Set(filtered.map((c) => c.category))];

  const fullCode = selected.sections
    .flatMap((s) => s.codeSnippets?.map((c) => c.code) || [])
    .join("\n\n");

  const copy = (code: string, i?: number) => {
    navigator.clipboard.writeText(code);
    if (i !== undefined) setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 1200);
  };

  return (
    <>
      <Navbar
        links={[
          { name: "Home", href: "/" },
          { name: "Components & Logics", href: "/components" },
        ]}
        languages={[
          { code: "en", label: "English" },
          { code: "am", label: "Amharic" },
          { code: "om", label: "Oromo" },
        ]}
      />
      <main className="max-w-7xl mx-auto px-4 pt-24 flex gap-6">

        {/* ================= SIDEBAR ================= */}
        <aside className="w-64">
          <Card className="h-full sticky top-24">
            <CardContent className="p-2 space-y-3">
            <div className="w-full relative">
            <Input
              placeholder="Search components..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10" // padding-left for icon space
            />
            <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
          </div>

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

              <ScrollArea className="h-[500px] mt-2">
                {categories.map((cat) => {
                  const items = filtered.filter((c) => c.category === cat);
                  return (
                    <div key={cat} className="mb-2">
                      <Button
                        variant="ghost"
                        className="w-full justify-between"
                        onClick={() =>
                          setExpanded((prev) =>
                            prev.includes(cat)
                              ? prev.filter((c) => c !== cat)
                              : [...prev, cat]
                          )
                        }
                      >
                        {cat}
                        {expanded.includes(cat) ? (
                          <ChevronDown size={16} />
                        ) : (
                          <ChevronRight size={16} />
                        )}
                      </Button>

                      {expanded.includes(cat) &&
                        items.map((comp) => (
                          <Button
                            key={comp.id}
                            size="sm"
                            variant={
                              selected.id === comp.id
                                ? "default"
                                : "outline"
                            }
                            className="w-full justify-between mt-1"
                            onClick={() => setSelected(comp)}
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
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              <Button
                className="mt-3"
                onClick={() => copy(fullCode)}
              >
                Copy Full Code
              </Button>
            </CardContent>
          </Card>

          {/* PROPS */}
          {selected.props && (
            <Card>
              <CardHeader>
                <CardTitle>Props</CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          )}

          {/* SECTIONS */}
          {selected.sections.map((section, i) => (
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
                    {section.guidelines && (
                      <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                    )}
                  </TabsList>

                  <TabsContent value="preview" className="pt-3">
                    {section.preview ? (
                      section.preview
                    ) : selected.platform === "flutter" ? (
                      <FlutterPreviewFallback src={section.flutterPreviewImage} />
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        No preview available.
                      </p>
                    )}
                  </TabsContent>

                  <TabsContent value="code" className="pt-3 space-y-3">
                    {section.codeSnippets?.map((snip, idx) => (
                      <div key={idx} className="relative">
                        {snip.title && (
                          <p className="text-sm font-medium mb-1">{snip.title}</p>
                        )}
                        {snip.description && (
                          <p className="text-xs text-muted-foreground mb-2">
                            {snip.description}
                          </p>
                        )}
                        <SyntaxHighlighter style={oneDark}>
                          {snip.code}
                        </SyntaxHighlighter>
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
                    <pre className="text-sm whitespace-pre-wrap">
                      {section.instructions || "No instructions provided."}
                    </pre>
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
      </main>

      <Footer />
    </>
  );
}