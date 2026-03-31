// src/features/mdm/types/factory.ts
import type { ColDef } from "ag-grid-community";
import { UseYnBadge } from "../../../shared/components/table/UseYnBadge";

export interface FactoryData {
  factoryId: string;
  factoryName: string;
  division: string;
  useYn: "Valid" | "Invalid";
  description: string;
  updatedAt: string;
  updatedBy: string;
}

export const factoryColumnDefs: ColDef<FactoryData>[] = [
  {
    headerName: "No",
    width: 70,
    valueGetter: (params) => (params.node?.rowIndex ?? 0) + 1,
  },
  {
    field: "factoryId",
    headerName: "공장 ID",
  },
  { field: "factoryName", headerName: "공장명", editable: true },
  { field: "division", headerName: "사업부", editable: true },
  {
    field: "useYn",
    headerName: "사용 여부",
    width: 150,
    editable: true,
    cellEditor: "agSelectCellEditor",
    cellEditorParams: { values: ["Valid", "Invalid"] },
    valueFormatter: (params) => (params.value === "Valid" ? "유효" : "유효하지 않음"),
    cellRenderer: UseYnBadge,
  },
  { field: "description", headerName: "비고", width: 200, editable: true },
  { field: "updatedAt", headerName: "수정일시" },
  { field: "updatedBy", headerName: "수정자" },
];
