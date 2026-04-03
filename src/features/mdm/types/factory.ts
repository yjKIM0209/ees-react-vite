// src/features/mdm/types/factory.ts
import type { ColDef } from "ag-grid-community";
import { UseYnBadge } from "../../../shared/components/table/UseYnBadge";

const modifiedClassRule = {
  'cell-modified': (params: any) => {
    return (
      params.data?.rowStatus === "U" && 
      params.data?.modifiedFields?.has(params.colDef.field)
    );
  }
};

export interface FactoryData {
  plantId: string;
  plantNameKoKr: string;
  plantNameEnUs: string;
  plantNameZhCn: string;
  plantNameViVn: string;
  plantNameLoLo: string;
  description: string;
  enterpriseId: string;
  address: string;
  phone: string;
  fax: string;
  language: string;
  startBusinessHour: string;
  validState: "Valid" | "Invalid";
  creator: string;
  created_time: string;
  modifier: string | null;
  modified_time: string | null;
}

export const factoryColumnDefs: ColDef<FactoryData>[] = [
  {
    width: 50,
    minWidth: 50,
    maxWidth: 50,
    headerCheckboxSelection: true,
    headerCheckboxSelectionFilteredOnly: true,
    checkboxSelection: true,
    pinned: "left",
    lockPosition: "left",
    filter: false,
    sortable: false,
    suppressHeaderMenuButton: true,
    suppressHeaderContextMenu: true,
    suppressMovable: true,
    cellClass: "flex items-center justify-center",
  },
  {
    headerName: "No",
    width: 70,
    pinned: "left",
    valueGetter: (params) => (params.node?.rowIndex ?? 0) + 1,
  },
  {
    field: "plantId",
    headerName: "공장 ID",
    width: 130,
    pinned: "left",
    editable: (params) => {
      if (!params.data) return false; 

      const isNew = !params.data.creator || params.data.plantId === "";
      return isNew;
    },
    cellStyle: (params) => {
      if (!params.data) return null;

      const isNew = !params.data.creator || params.data.plantId === "";
      if (!isNew) {
        return {
          backgroundColor: "#f8fafc",
          color: "#64748b",
          cursor: "not-allowed",
        };
      }
      return null;
    },
  },
  {
    field: "plantNameKoKr",
    headerName: "공장명(한)",
    width: 150,
    editable: true,
    cellClassRules: modifiedClassRule,
  },
  {
    field: "plantNameEnUs",
    headerName: "공장명(영)",
    width: 150,
    editable: true,
    cellClassRules: modifiedClassRule,
  },
  {
    field: "validState",
    headerName: "유효 상태",
    width: 120,
    editable: true,
    cellClassRules: modifiedClassRule,
    cellEditor: "agSelectCellEditor",
    cellEditorParams: { values: ["Valid", "Invalid"] },
    valueFormatter: (params) =>
      params.value === "Valid" ? "유효" : "유효하지 않음",
    cellRenderer: UseYnBadge,
  },
  { field: "enterpriseId", headerName: "회사 ID", width: 120 },
  { field: "phone", headerName: "전화번호", width: 130, editable: true, cellClassRules: modifiedClassRule, },
  { field: "address", headerName: "주소", width: 250, editable: true, cellClassRules: modifiedClassRule, },
  { field: "description", headerName: "설명", width: 200, editable: true, cellClassRules: modifiedClassRule, },
  {
    field: "startBusinessHour",
    headerName: "시업 시간",
    width: 150,
    editable: true,
    cellClassRules: modifiedClassRule,
  },
  {
    field: "created_time",
    headerName: "생성일시",
    width: 180,
    valueFormatter: (params) => {
      if (!params.value) return "";
      return new Date(params.value).toLocaleString();
    },
  },
  { field: "creator", headerName: "생성자", width: 100 },
  {
    field: "modified_time",
    headerName: "수정일시",
    width: 180,
    valueFormatter: (params) => {
      if (!params.value) return "";
      return new Date(params.value).toLocaleString();
    },
  },
  { field: "modifier", headerName: "수정자", width: 100 },
];
