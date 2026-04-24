// src/pages/reference/UIReferencePage.tsx
import { Separator } from "@/components/ui/separator";
// Icons
import {
  Component,
} from "lucide-react";
import { ButtonSection } from "./sections/ButtonSection";
import { FormSection } from "./sections/FormSection";
import { SelectSection } from "./sections/SelectSection";
import { OverlaySection } from "./sections/OverlaySection";
import { NavDisplaySection } from "./sections/NavDisplaySection";
import { FeedbackSection } from "./sections/FeedbackSection";

export default function UIReferencePage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-16 pb-20">
      {/* 페이지 헤더 */}
      <section>
        <div className="flex items-center gap-2 mb-2">
          <Component className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight">UI Reference</h1>
        </div>
        <p className="text-slate-500 text-lg">
          솔루션 표준 UI 컴포넌트 가이드라인입니다.
        </p>
      </section>

      <Separator />

      {/* --- Buttons & Actions --- */}
      <ButtonSection />

      {/* --- Form Elements --- */}
      <FormSection />

      {/* --- Select --- */}
      <SelectSection />

      {/* --- Overlays & Dialogs --- */}
      <OverlaySection />

      {/* --- Navigation & Data Display --- */}
      <NavDisplaySection />

      {/* --- Feedback & Loading --- */}
      <FeedbackSection />
    </div>
  );
}
