// src/shared/components/table/UseYnBadge.tsx
import type { ICellRendererParams } from "ag-grid-community";

export const UseYnBadge = (params: ICellRendererParams) => {
  const value = params.value;
  if (!value) return null;

  // API 개발 후 DB에서 다국어처리 함께 진행
  const isY = value === "Valid";
  const label = isY ? "유효" : "유효하지 않음";

  return (
    <div className="flex items-center h-full">
        {label}
    </div>
  );
};