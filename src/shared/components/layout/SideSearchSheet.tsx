import { type ReactNode } from "react";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

interface SideSearchSheetProps {
  title: string;
  description?: string;
  children: ReactNode;
  onSearch: () => void;
  onReset?: () => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  width?: number; // 필요시 너비 조절
}

export function SideSearchSheet({
  title,
  description,
  children,
  onSearch,
  onReset,
  isOpen,
  onOpenChange,
  width = 500,
}: SideSearchSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <Button variant="delete">조회 조건</Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        style={{ maxWidth: `${width}px` }}
        className="w-full flex flex-col bg-white border-r border-slate-200 p-0 shadow-2xl"
      >
        <SheetHeader className="border-b pb-4">
          <SheetTitle>{title}</SheetTitle>
          {description && <SheetDescription>{description}</SheetDescription>}
        </SheetHeader>

        {/* 폼 내용 영역 */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">{children}</div>

        {/* 공통 버튼 */}
        <SheetFooter className="border-t pt-6 bg-white">
          <div className="flex w-full gap-2">
            <Button variant="ghost" className="flex-1" onClick={onReset}>
              <RotateCcw className="mr-2 h-4 w-4" /> 초기화
            </Button>
            <Button className="flex-1" onClick={onSearch}>
              조회하기
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
