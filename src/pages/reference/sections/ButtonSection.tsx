// src/pages/reference/sections/ButtonSection.tsx
import { Save, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComponentPreview } from "../components/ComponentPreview";
import { ButtonGroup } from "@/components/ui/button-group";

/**
 * @description 버튼 섹션의 코드 예시 문자열입니다.
 * 실제 렌더링되는 JSX와 동일하게 유지합니다.
 */
const buttonVariantsCode = `
<div className="flex flex-wrap gap-4 justify-center">
  <Button variant="default">
    <Save className="mr-2 h-4 w-4" /> 저장
  </Button>
  <Button variant="add">
    <Plus className="mr-2 h-4 w-4" /> 행 추가
  </Button>
  <Button variant="success">
    <Save className="mr-2 h-4 w-4" /> 확정
  </Button>
  <Button variant="delete">
    <Trash2 className="mr-2 h-4 w-4" /> 삭제
  </Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
</div>
`.trim();

const buttonGroupsCode = `
<ButtonGroup>
    <Button variant="outline" size="sm">
      Day
    </Button>
    <Button variant="outline" size="sm">
      Week
    </Button>
    <Button variant="outline" size="sm">
      Month
    </Button>
</ButtonGroup>
`.trim();

export function ButtonSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
        Buttons & Actions
      </h2>

      <ComponentPreview
        title="Button Variants"
        description="기본 및 커스텀 테마 버튼"
        code={buttonVariantsCode}
      >
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="default">
            <Save className="mr-2 h-4 w-4" /> 저장
          </Button>
          <Button variant="add">
            <Plus className="mr-2 h-4 w-4" /> 행 추가
          </Button>
          <Button variant="success">
            <Save className="mr-2 h-4 w-4" /> 확정
          </Button>
          <Button variant="delete">
            <Trash2 className="mr-2 h-4 w-4" /> 삭제
          </Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Button Groups"
        description="연관된 액션 그룹화"
        code={buttonGroupsCode}
      >
        <ButtonGroup>
          <Button variant="outline" size="sm">
            Day
          </Button>
          <Button variant="outline" size="sm">
            Week
          </Button>
          <Button variant="outline" size="sm">
            Month
          </Button>
        </ButtonGroup>
      </ComponentPreview>
    </div>
  );
}
