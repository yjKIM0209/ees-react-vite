// src/pages/reference/UIReferencePage.tsx
import { Separator } from "@/components/ui/separator";
// Icons
import { Component } from "lucide-react";
import { ButtonSection } from "./sections/ButtonSection";
import { FormSection } from "./sections/FormSection";
import { SelectSection } from "./sections/SelectSection";
import { OverlaySection } from "./sections/OverlaySection";
import { NavDisplaySection } from "./sections/NavDisplaySection";
import { FeedbackSection } from "./sections/FeedbackSection";
import { AnchorOfContents } from "./components/AnchorOfContents";

const navItems = [
  { name: "Buttons", href: "#button-section" },
  { name: "Forms", href: "#form-section" },
  { name: "Selects", href: "#select-section" },
  { name: "Overlays", href: "#overlay-section" },
  { name: "Nav & Display", href: "#nav-section" },
  { name: "Feedback", href: "#feedback-section" },
];

export default function UIReferencePage() {
  return (
    <div id="page-top" className="p-8 max-w-6xl mx-auto pb-20 relative flex flex-col lg:flex-row gap-12">
      <div className="flex-1 space-y-16 min-w-0">
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

      <AnchorOfContents items={navItems} />
    </div>
  );
}
