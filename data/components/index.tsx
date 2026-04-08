/* ================= DATA ================= */

import { ComponentItem} from "@/app/components/page";
import { DataTablePagination } from "@/components/date_pagination";
import { useState } from "react";

/* ================= PREVIEW COMPONENTS ================= */

export const DataTablePaginationPreview = () => {
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
        preview: <DataTablePaginationPreview/>,
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
    id: "next-api-cors-logic",
    name: "Next.js API + CORS Logic (Axios)",
    description: "Production-ready architecture for handling CORS, authentication, and API proxy using Axios in Next.js",
    category: "Logic",
    platform: "logic",
    tags: ["cors", "middleware", "axios", "api", "auth"],
    difficulty: "advanced",
    sections: [
      {
        title: "System Flow",
        instructions: `Client → Next.js (/api) → Backend API
  
  This is the correct architecture:
  
  1. Client uses Axios to call /api/*
  2. Next.js rewrites request to backend
  3. Middleware checks authentication (cookies)
  4. Backend processes request and returns response
  
  ⚠️ Important:
  - Browser never talks directly to backend
  - This avoids ALL CORS issues`,
        codeSnippets: [
          {
            title: "✅ Axios Request (Correct)",
            description: "Always call through Next.js API proxy",
            code: `import axios from "axios";
  
  const api = axios.create({
    baseURL: "/api",
    withCredentials: true, // 🔥 important for cookies
  });
  
  const res = await api.get("/users");
  console.log(res.data);`,
          },
          {
            title: "❌ Wrong (CORS Error)",
            description: "Direct backend call will break in browser",
            code: `axios.get("http://localhost:8000/api/users")`,
          },
        ],
        guidelines: [
          {
            title: "Key Rule",
            content: "Always use baseURL: '/api' in Axios. Never expose backend URL to browser.",
          },
        ],
      },
  
      {
        title: "Axios Instance (Best Practice)",
        instructions: "Create a reusable Axios instance for all API calls.",
        codeSnippets: [
          {
            title: "api.ts",
            code: `import axios from "axios";
  
  export const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });`,
          },
        ],
        guidelines: [
          {
            title: "Why this matters",
            content: "Centralizes config → cleaner code, easier scaling.",
          },
        ],
      },
  
      {
        title: "Axios Interceptors (🔥 Advanced)",
        instructions: "Handle errors and auth globally (very important in real apps).",
        codeSnippets: [
          {
            title: "Response Interceptor",
            code: `api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.log("Unauthorized → redirect to login");
        window.location.href = "/";
      }
  
      return Promise.reject(error);
    }
  );`,
          },
        ],
        guidelines: [
          {
            title: "Use Case",
            content: "Automatically handle expired sessions or invalid tokens.",
          },
        ],
      },
  
      {
        title: "Middleware Logic",
        instructions: "Protect private routes using cookies (refresh_token).",
        codeSnippets: [
          {
            title: "Auth Middleware",
            code: `export function middleware(request) {
    const token = request.cookies.get("refresh_token")?.value;
  
    if (!token) {
      return Response.redirect("/");
    }
  
    return Response.next();
  }`,
          },
        ],
        guidelines: [
          {
            title: "Purpose",
            content: "Blocks unauthorized users from accessing protected pages.",
          },
        ],
      },
  
      {
        title: "Rewrite (CORS Fix)",
        instructions: "Proxy API requests from Next.js to backend.",
        codeSnippets: [
          {
            title: "next.config.ts",
            code: `async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:8000/:path*",
      },
    ];
  }`,
          },
        ],
        guidelines: [
          {
            title: "Why it works",
            content: "Browser sees same origin (/api) → no CORS → Next.js forwards request.",
          },
        ],
      },
  
      {
        title: "Debug Logs (Axios Flow)",
        instructions: "Track full request lifecycle for debugging.",
        codeSnippets: [
          {
            title: "Request Log",
            code: `api.interceptors.request.use((config) => {
    console.log("🚀 Request:", config.url);
    return config;
  });`,
          },
          {
            title: "Response Log",
            code: `api.interceptors.response.use((res) => {
    console.log("✅ Response:", res.data);
    return res;
  });`,
          },
          {
            title: "Error Log",
            code: `api.interceptors.response.use(
    (res) => res,
    (err) => {
      console.log("❌ API Error:", err.response?.data);
      return Promise.reject(err);
    }
  );`,
          },
        ],
        guidelines: [
          {
            title: "Debugging Tip",
            content: "Use interceptors instead of scattered console.log → cleaner debugging.",
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
  {
    id: "nextjs-app-folder-guide",
    name: "Next.js Folder Structure",
    description: "Comprehensive guide for organizing Next.js 13+ projects using the modern app/ folder for Dashboard, Public, and Hybrid apps, with root-level shared utilities and configs.",
    category: "Logic",
    platform: "logic",
    tags: [
      "folder","structure","nextjs","app-router","dashboard",
      "hybrid","public","layout","components","hooks",
      "utils","typescript"
    ],
    difficulty: "beginner",
    sections: [
      {
        title: "Dashboard-based Apps",
        description: "Structure for internal/admin dashboards using app/ folder with layouts, pages, and nested routes.",
        instructions: `
  This setup is ideal for internal admin dashboards. 
  - Keep all dashboard pages under app/dashboard.
  - Use layout.tsx for sidebar, header, and footer.
  - Root-level folders (components, providers, services, utils, lib, hooks, store, types, constants, config) are shared for maintainability.
  - Sidebar items can be loaded dynamically based on user roles.
        `,
        codeSnippets: [
          {
            title: "Dashboard App Structure",
            description: "Production-ready file structure for a modern Next.js dashboard",
            code: `
  my-nextjs-dashboard/
  ├─ app/
  │  ├─ dashboard/
  │  │  ├─ layout.tsx
  │  │  ├─ page.tsx
  │  │  ├─ settings/page.tsx
  │  │  └─ users/page.tsx
  ├─ components/              
  ├─ providers/               
  ├─ services/                
  ├─ utils/                   
  ├─ lib/                     
  ├─ hooks/                    
  ├─ store/                    
  ├─ types/                    
  ├─ constants/               
  ├─ config/                   
  ├─ public/                   
  ├─ styles/
  ├─ next.config.js
  ├─ package.json
  └─ tsconfig.json
            `
          },
          {
            title: "Starter Code Examples",
            description: "Hooks, store, providers, utils, lib, services, and components for Dashboard",
            code: `
  /* hooks/useAuth.ts */
  import { useEffect, useState } from "react";
  import { authStore } from "../store/authStore";
  export const useAuth = () => {
    const [user, setUser] = useState(authStore.getState().user);
    useEffect(() => authStore.subscribe(s => setUser(s.user)), []);
    return { user, login: u=>authStore.setState({user:u}), logout: ()=>authStore.setState({user:null}) };
  };
  
  /* store/authStore.ts */
  import { create } from "zustand";
  export const authStore = create((set) => ({ user:null, setUser:(user)=>set({user}) }));
  
  /* providers/AuthProvider.tsx */
  "use client";
  import { createContext, useContext, ReactNode } from "react";
  import { useAuth } from "../hooks/useAuth";
  const AuthContext = createContext(undefined);
  export const AuthProvider = ({children}:{children:ReactNode})=>{
    const auth = useAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
  };
  export const useAuthContext = ()=>{ const c = useContext(AuthContext); if(!c)throw new Error("useAuthContext must be inside AuthProvider"); return c; };
  
  /* lib/axios.ts */
  import axios from "axios";
  export default axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL, headers: {"Content-Type":"application/json"} });
  
  /* lib/validators.ts */
  export const isEmail = (email:string)=>/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  export const isPhoneNumber = (phone:string)=>/^\\+?\\d{10,15}$/.test(phone);
  
  /* utils/cn.ts */
  export const cn = (...classes:(string|boolean|undefined)[])=>classes.filter(Boolean).join(" ");
  
  /* services/api.ts */
  import axios from "../lib/axios";
  export const fetchUsers = async()=> (await axios.get("/users")).data;
  
  /* components/Sidebar.tsx */
  "use client";
  import Link from "next/link"; 
  import { useAuthContext } from "../providers/AuthProvider";
  const items = [{label:"Dashboard",href:"/dashboard"},{label:"Users",href:"/dashboard/users",roles:["admin"]}];
  export const Sidebar = ()=>{ const {user} = useAuthContext();
    return <nav><ul>{items.filter(i=>!i.roles||i.roles.includes(user?.role)).map(i=><li key={i.href}><Link href={i.href}>{i.label}</Link></li>)}</ul></nav>;
  };
  
  /* components/Header.tsx */
  "use client"; 
  import { useAuthContext } from "../providers/AuthProvider";
  export const Header=()=>{ const {user,logout} = useAuthContext();
  return <header className="flex justify-between p-4 bg-gray-100"><h1>Dashboard</h1>{user?<div><span>{user.name}</span><button onClick={logout}>Logout</button></div>:<span>Guest</span>}</header>;};
  
  /* app/dashboard/layout.tsx */
  import { ReactNode } from "react";
  import { Sidebar } from "../../components/Sidebar";
  import { Header } from "../../components/Header";
  export default function DashboardLayout({children}:{children:ReactNode}){
    return <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>;
  }
  
  /* app/dashboard/page.tsx */
  export default function DashboardHome(){ return <div>Welcome to Dashboard</div>; }
            `
          }
        ],
        guidelines: [
          {
            title: "Dashboard Best Practices",
            content: `
  - Keep dashboard routes under app/dashboard.
  - Layout.tsx handles sidebar, header, footer.
  - Sidebar items load dynamically based on roles.
  - Components modular and reusable.
  - Root-level folders shared for maintainability.
  - Document folder structure in README.
            `
          }
        ]
      },
      {
        title: "Public / Marketing Apps",
        description: "Structure for public-facing websites or marketing pages using app/ folder.",
        instructions: `
  - Top-level pages under app/ for SEO-friendly routing.
  - layout.tsx for header/footer/meta.
  - Root-level shared folders for components, providers, services, utils, lib, hooks, store, types, constants, config.
        `,
        codeSnippets: [
          {
            title:"Public App Structure",
            description:"Ready-to-use Public app scaffold",
            code: `
  my-nextjs-public/
  ├─ app/
  │  ├─ layout.tsx
  │  ├─ page.tsx
  │  ├─ about/page.tsx
  │  └─ contact/page.tsx
  ├─ components/
  ├─ providers/
  ├─ services/
  ├─ utils/
  ├─ lib/
  ├─ hooks/
  ├─ store/
  ├─ types/
  ├─ constants/
  ├─ config/
  ├─ public/
  ├─ styles/
  ├─ next.config.js
  ├─ package.json
  └─ tsconfig.json
  
  /* app/layout.tsx */
  import { ReactNode } from "react";
  export default function PublicLayout({children}:{children:ReactNode}) {
    return <div>
      <header className="p-4 bg-blue-600 text-white">Public Header</header>
      <main>{children}</main>
      <footer className="p-4 bg-gray-200 text-center">Footer</footer>
    </div>;
  }
  
  /* app/page.tsx */
  export default function HomePage(){ return <div>Welcome to Home Page</div>; }
  
  /* app/about/page.tsx */
  export default function AboutPage(){ return <div>About Us</div>; }
  
  /* app/contact/page.tsx */
  export default function ContactPage(){ return <div>Contact Page</div>; }
            `
          }
        ],
        guidelines: [
          { title:"Public App Best Practices", content:"Top-level pages for clean routing, layout.tsx for header/footer/meta, shared root-level folders for utilities." }
        ]
      },
      {
        title: "Hybrid Apps (Dashboard + Public)",
        description: "Structure for apps containing both admin dashboards and public-facing pages.",
        instructions: `
  - Dashboard and Public sections separated in app/.
  - Each section has its own layout.tsx.
  - Root-level folders for shared components/services/hooks/etc.
  - Sidebar loads items dynamically by user role.
        `,
        codeSnippets: [
          {
            title:"Hybrid App Structure",
            description:"Production-ready hybrid scaffold",
            code: `
  my-nextjs-hybrid/
  ├─ app/
  │  ├─ dashboard/
  │  │  ├─ layout.tsx
  │  │  ├─ page.tsx
  │  │  └─ users/page.tsx
  │  ├─ layout.tsx
  │  ├─ page.tsx
  │  └─ about/page.tsx
  ├─ components/
  ├─ providers/
  ├─ services/
  ├─ utils/
  ├─ lib/
  ├─ hooks/
  ├─ store/
  ├─ types/
  ├─ constants/
  ├─ config/
  ├─ public/
  ├─ styles/
  ├─ next.config.js
  ├─ package.json
  └─ tsconfig.json
  
  /* app/layout.tsx */
  import { ReactNode } from "react";
  export default function PublicLayout({children}:{children:ReactNode}) {
    return <div>
      <header className="p-4 bg-blue-600 text-white">Public Header</header>
      <main>{children}</main>
      <footer className="p-4 bg-gray-200 text-center">Footer</footer>
    </div>;
  }
  
  /* app/dashboard/layout.tsx */
  // Same as Dashboard Layout above
            `
          }
        ],
        guidelines: [
          {
            title:"Hybrid App Best Practices",
            content:"Keep dashboard/public separated, dynamic sidebar, root-level shared folders, document clearly."
          }
        ]
      }
    ],
    links: [
      { label:"Next.js App Router Docs", url:"https://nextjs.org/docs/app" },
      { label:"Next.js Layouts", url:"https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts" },
      { label:"Next.js Routing Patterns", url:"https://nextjs.org/docs/app/building-your-application/routing" }
    ],
    version: "1.0.2",
    updatedAt: "2026-04-08"
  },
  {
    id: "role-based-sidebar",
    name: "Role-Based Sidebar",
    description: "Sidebar navigation with role & permission-based visibility, supporting nested groups, active highlight, and collapsible menus",
    category: "Logic",
    platform: "logic",
    tags: ["sidebar", "navigation", "roles", "permissions", "access-control", "collapsible", "active-state"],
    props: [
      { name: "userRole", type: "string", description: "Role of the current user" },
      { name: "permissions", type: "string[]", description: "Permissions assigned to the user" },
      { name: "items", type: "SidebarItem[]", description: "List of sidebar items with roles/permissions" },
      { name: "currentPath", type: "string", description: "Current URL path to highlight active menu item" }
    ],
    sections: [
      {
        title: "Enhanced Role-Based Sidebar",
        instructions: `
  1. Pass the current user role.
  2. Sidebar only shows items if user has the required role.
  3. Page actions are controlled separately via permissions.
  4. Supports collapsible groups and highlights the active page.
  5. Flexible for enterprise apps with nested navigation.
        `,
        codeSnippets: [
          {
            title: "Types for Sidebar & Actions",
            code: `export interface ActionItem {
    label: string;
    permissions?: string[];
    onClick?: () => void;
    href?: string;
  }
  
  export interface SidebarItem {
    label: string;
    href?: string | (() => void);
    icon?: React.ElementType;
    roles?: string[];
    children?: SidebarItem[];
    actions?: ActionItem[];
  }`
          },
          {
            title: "Sidebar Configuration Example",
            code: `import { SidebarItem } from "../types/sidebar";
  import { Home, Users, Settings, FileText } from "lucide-react";
  
  export const sidebarConfig: SidebarItem[] = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: Home,
      roles: ["admin", "manager", "editor"]
    },
    {
      label: "Management",
      roles: ["admin", "manager"],
      children: [
        {
          label: "Users",
          href: "/dashboard/users",
          icon: Users,
          roles: ["admin"],
          actions: [
            { label: "Add User", permissions: ["create_user"] },
            { label: "Export", permissions: ["export_user"] }
          ]
        },
        {
          label: "Reports",
          href: "/dashboard/reports",
          icon: FileText,
          roles: ["admin", "manager"],
          actions: [
            { label: "Generate PDF", permissions: ["generate_report"] }
          ]
        }
      ]
    },
    {
      label: "Settings",
      roles: ["admin"],
      children: [
        { label: "Profile", href: "/dashboard/settings/profile", icon: Settings },
        { label: "Permissions", href: "/dashboard/settings/permissions", roles: ["admin"] }
      ]
    }
  ];`
          },
          {
            title: "Role-Based Sidebar Component (Collapsible & Active Highlight)",
            code: `import Link from "next/link";
  import { useState } from "react";
  import { SidebarItem } from "../types/sidebar";
  
  interface SidebarProps {
    items: SidebarItem[];
    userRole: string;
    currentPath: string;
  }
  
  export const RoleBasedSidebar = ({ items, userRole, currentPath }: SidebarProps) => {
    const renderItems = (items: SidebarItem[]) =>
      items
        .filter(item => !item.roles || item.roles.includes(userRole))
        .map(item => {
          const hasChildren = item.children?.length > 0;
          const isActive = item.href && (typeof item.href === "string") && currentPath.startsWith(item.href);
          const [open, setOpen] = useState(isActive || false);
  
          return (
            <li key={item.label}>
              <div className="flex items-center justify-between">
                {item.href ? (
                  typeof item.href === "string" ? (
                    <Link href={item.href} className={\`flex items-center gap-2 \${isActive ? 'font-bold text-blue-500' : ''}\`}>
                      {item.icon && <item.icon size={16} />} {item.label}
                    </Link>
                  ) : (
                    <button onClick={item.href} className="flex items-center gap-2">
                      {item.icon && <item.icon size={16} />} {item.label}
                    </button>
                  )
                ) : (
                  <span className="flex items-center gap-2">{item.icon && <item.icon size={16} />} {item.label}</span>
                )}
  
                {hasChildren && (
                  <button onClick={() => setOpen(!open)} aria-label="Toggle submenu">
                    {open ? "▾" : "▸"}
                  </button>
                )}
              </div>
  
              {hasChildren && open && (
                <ul className="pl-4">{renderItems(item.children!)}</ul>
              )}
            </li>
          );
        });
  
    return <ul>{renderItems(items)}</ul>;
  };`
          },
          {
            title: "Permission Action Wrapper",
            code: `interface PermissionActionProps {
    permissions: string[];
    userPermissions: string[];
    children: React.ReactNode;
  }
  
  export const PermissionAction = ({ permissions, userPermissions, children }: PermissionActionProps) => {
    const hasAccess = permissions.every(p => userPermissions.includes(p));
    if (!hasAccess) return null;
    return <>{children}</>;
  };`
          },
          {
            title: "Usage Example with Active Highlight",
            code: `import { RoleBasedSidebar } from "@/components/RoleBasedSidebar";
  import { PermissionAction } from "@/components/PermissionAction";
  import { sidebarConfig } from "@/config/sidebar";
  import { useRouter } from "next/router";
  
  const userRole = "admin";
  const userPermissions = ["create_user", "export_user"];
  
  export default function UsersPage() {
    const router = useRouter();
    const currentPath = router.pathname;
  
    return (
      <div className="flex gap-4">
        <aside className="w-60">
          <RoleBasedSidebar items={sidebarConfig} userRole={userRole} currentPath={currentPath} />
        </aside>
  
        <main className="flex-1">
          <h1 className="text-xl font-bold mb-4">Users</h1>
  
          <PermissionAction permissions={["create_user"]} userPermissions={userPermissions}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Add User</button>
          </PermissionAction>
  
          <PermissionAction permissions={["export_user"]} userPermissions={userPermissions}>
            <button className="ml-2 px-4 py-2 bg-gray-500 text-white rounded">Export</button>
          </PermissionAction>
        </main>
      </div>
    );
  }`
          }
        ],
        guidelines: [
          {
            title: "Tip",
            content: "Always validate user roles and permissions on the server side to prevent unauthorized access."
          },
          {
            title: "UX",
            content: "Hide items and actions the user cannot access to reduce confusion and clutter."
          },
          {
            title: "Scalability",
            content: "Adding new roles, permissions, or menu items is done only in the JSON; components remain untouched."
          },
          {
            title: "Enterprise",
            content: "Supports collapsible groups and active highlights for multi-level navigation, suitable for large apps."
          }
        ]
      }
    ]
  }
  
];