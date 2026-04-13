// src/pages/reference/components/ComponentPreview.tsx
interface PreviewProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ComponentPreview({ title, description, children }: PreviewProps) {
  return (
    <div className="space-y-4 mb-10">
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-bold">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="rounded-md border bg-card p-10 flex items-center justify-center shadow-sm">
        {children}
      </div>
    </div>
  );
}