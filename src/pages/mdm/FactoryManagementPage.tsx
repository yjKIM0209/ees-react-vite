// src/pages/mdm/FactoryManagementPage.tsx
import { PageShell } from "@/shared/components/layout/PageShell";
import { PageHeader } from "@/shared/components/layout/PageHeader";
import { ActionBar } from "@/shared/components/layout/ActionBar";
import { SideSearchSheet } from "@/shared/components/layout/SideSearchSheet"; 
import { useState } from "react";

export default function FactoryManagementPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <PageShell>
      {/* 1층: 헤더와 버튼 조립 */}
      <PageHeader 
        title="공장 정보 관리" 
        description="전사 공장 및 창고의 기준 정보를 관리합니다."
        actions={
          <ActionBar 
            onSearch={() => setIsSearchOpen(true)}
            onAdd={() => console.log("추가")}
            onDelete={() => console.log("삭제")}
            onSave={() => console.log("저장")}
            onExcel={() => console.log("엑셀")}
          />
        }
      />

      {/* 2층: 검색 조건 (SideSheet 연동) */}
      <SideSearchSheet 
        isOpen={isSearchOpen} 
        onOpenChange={setIsSearchOpen}
        title="공장 조회 조건"
        onSearch={() => setIsSearchOpen(false)}
      >
        <p>여기에 공장 코드/명칭 입력 필드들...</p>
      </SideSearchSheet>

      {/* 3층: 메인 그리드 (다음 단계에서 구현) */}
      <div className="flex-1 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center text-slate-400 font-medium">
        [여기에 AG-Grid가 들어올 예정입니다]
      </div>
    </PageShell>
  );
}
