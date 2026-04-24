// src/pages/reference/components/ComponentPreview.tsx
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Code2 } from "lucide-react";

interface PreviewProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code?: string;
}

export function ComponentPreview({
  title,
  description,
  children,
  code,
}: PreviewProps) {
  return (
    <div className="space-y-4 mb-10">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="rounded-md border bg-card p-10 flex items-center justify-center shadow-sm">
        {children}
      </div>

      {code && (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="code"
            className="border rounded-md shadow-sm overflow-hidden"
          >
            <AccordionTrigger className="py-2.5 px-4 hover:no-underline hover:bg-muted/50 transition-all text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Code2 className="h-3.5 w-3.5" />
                <span>View Source Code</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="p-0 border-t bg-slate-50 dark:bg-slate-900">
              <pre className="p-4 text-xs font-mono overflow-x-auto leading-relaxed text-slate-700 dark:text-slate-300">
                <code>{code.trim()}</code>
              </pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}
