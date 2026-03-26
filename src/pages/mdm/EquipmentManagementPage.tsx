// src/pages/mdm/EquipmentManagementPage.tsx
import { useState } from "react";
import { ConfirmDialog } from "@/shared/components/modal/ConfirmDialog";
import { SideSearchSheet } from "@/shared/components/layout/SideSearchSheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function EquipmentManagementPage() {
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = () => {
    console.log("설비 조회 실행...");
    setIsFilterOpen(false); // 조회 후 시트 닫기
  };

  // 삭제 로직
  const handleDeleteEquipment = () => {
    console.log("설비 정보 삭제 완료!");
    setIsDelModalOpen(false);
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-2xl font-bold">설비 관리</h1>

      <div className="flex gap-2">
        {/* 삭제 버튼 */}
        <Button variant="delete" onClick={() => setIsDelModalOpen(true)}>
          설비 삭제
        </Button>

        {/* 🔍 [공통 컴포넌트] 조회 조건 사이드 시트 */}
        <SideSearchSheet
          title="설비 상세 조회"
          description="조회할 설비의 코드나 명칭을 입력해 주세요."
          isOpen={isFilterOpen}
          onOpenChange={setIsFilterOpen}
          onSearch={handleSearch}
          onReset={() => console.log("조회 조건 초기화")}
        >
          {/* 시트 내부에 들어갈 설비 전용 필드들 */}
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="eq-code">설비 코드</Label>
              <Input id="eq-code" placeholder="예: EQ-001" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="eq-name">설비 명칭</Label>
              <Input id="eq-name" placeholder="CNC Milling Machine" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="eq-type">설비 유형</Label>
              <Input id="eq-type" placeholder="정밀 가공" />
            </div>
          </div>
        </SideSearchSheet>
      </div>

      {/* ⚠️ [공통 컴포넌트] 삭제 확인 모달 */}
      <ConfirmDialog
        isOpen={isDelModalOpen}
        onOpenChange={setIsDelModalOpen}
        title="설비 정보 삭제 확인"
        description="해당 설비를 삭제하면 연결된 모든 실적 데이터에 접근할 수 없습니다. 정말 삭제하시겠습니까?"
        onConfirm={handleDeleteEquipment}
        confirmText="삭제하기"
        variant="destructive" // 삭제이므로 빨간색 버튼 적용
      />
    </div>
  );
}
