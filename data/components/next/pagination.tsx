"use client";

import { DataTablePagination } from "@/components/date_pagination";
import { ComponentItem } from "@/types/commen";
import { useState } from "react";

/* ===== Preview Component ===== */
const Preview = () => {
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

/* ===== Component Object ===== */
export const paginationComponent: ComponentItem = {
  id: "data-table-pagination",
  name: "DataTablePagination",
  description: "Reusable pagination component for tables",
  category: "Data Display",
  platform: "next",
  tags: ["pagination", "table", "ui"],
  version: "1.0.0",

  props: [
    { name: "page", type: "number", description: "Current page" },
    { name: "pageSize", type: "number", description: "Items per page" },
    { name: "total", type: "number", description: "Total records" },
  ],

  sections: [
    {
      title: "Interactive Preview",
      preview: <Preview />,
      codeSnippets: [
        {
          title: "Basic Usage",
          code: `<DataTablePagination
  page={1}
  pageSize={10}
  total={123}
  onPageChange={(p) => console.log(p)}
  onPageSizeChange={(s) => console.log(s)}
/>`,
          description: "Basic usage of pagination",
        },
      ],
      instructions: `1. Import component
2. Pass page, pageSize, total
3. Handle page changes`,
    },
  ],
};