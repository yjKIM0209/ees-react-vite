// src/pages/reference/sections/FeedbackSection.tsx
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Spinner } from "@/components/ui/spinner";
import { ComponentPreview } from "../components/ComponentPreview";

const tooltipCode = `
<TooltipProvider delayDuration={100}>
  {/* 방향별 설정 */}
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">상단 툴팁</TooltipContent>
  </Tooltip>

  {/* 비활성 버튼 툴팁 (span으로 감싸야 동작함) */}
  <Tooltip>
    <TooltipTrigger asChild>
      <span className="inline-block">
        <Button disabled>Disabled</Button>
      </span>
    </TooltipTrigger>
    <TooltipContent>비활성 상태 설명</TooltipContent>
  </Tooltip>
</TooltipProvider>`.trim();

const loadingCode = `
<div className="flex items-center gap-2">
  <Spinner className="size-4" />
  <Spinner className="size-5" />
  <Spinner className="size-6" />
  <span className="text-sm text-muted-foreground">데이터를 불러오는 중...</span>
</div>`.trim();

export function FeedbackSection() {
  return (
    <div id="feedback-section" className="space-y-8 scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
        Feedback & Loading
      </h2>

      {/* Tooltip 섹션 */}
      <ComponentPreview
        title="Tooltip"
        description="마우스 호버 시 나타나는 설명창입니다. 방향(Side)과 상태에 따른 예시입니다."
        code={tooltipCode}
      >
        <TooltipProvider delayDuration={100}>
          <div className="flex flex-col gap-8 items-center">
            {/* 방향별 예시 */}
            <div className="flex flex-wrap gap-4 justify-center">
              {["top", "bottom", "left", "right"].map((side) => (
                <Tooltip key={side}>
                  <TooltipTrigger asChild>
                    <Button variant="outline" className="capitalize">
                      {side}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side={side as "top" | "bottom" | "left" | "right"}>
                    <p>{side}에 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* 특수 케이스 예시 */}
            <div className="flex flex-wrap gap-4 justify-center border-t pt-6 w-full">
              <div className="flex flex-col items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="inline-block">
                      <Button disabled>Disabled Button</Button>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>비활성 버튼도 설명이 필요할 수 있습니다</p>
                  </TooltipContent>
                </Tooltip>
                <span className="text-[10px] text-slate-400 font-mono">with Disabled</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button size="icon" variant="ghost" className="text-blue-500">
                      <Info className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-blue-600">
                    <p>커스텀 배경색 적용</p>
                  </TooltipContent>
                </Tooltip>
                <span className="text-[10px] text-slate-400 font-mono">Custom Style</span>
              </div>
            </div>
          </div>
        </TooltipProvider>
      </ComponentPreview>

      {/* Loading 섹션 */}
      <ComponentPreview title="Loading" description="데이터 로딩 상태 표시" code={loadingCode}>
        <div className="flex flex-col gap-6 w-full max-w-sm">
          <div className="flex items-center gap-2">
            <Spinner className="size-4" />
            <Spinner className="size-5" />
            <Spinner className="size-6" />
            <span className="text-sm text-muted-foreground">데이터를 불러오는 중...</span>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
}