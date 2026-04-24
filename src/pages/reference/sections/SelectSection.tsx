// src/pages/reference/sections/SelectSection.tsx
import { Activity } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectSeparator,
} from "@/components/ui/select";
import { ComponentPreview } from "../components/ComponentPreview";

const selectVariationsCode = `
{/* 기본 선택 */}
<Select>
  <SelectTrigger><SelectValue placeholder="언어 선택" /></SelectTrigger>
  <SelectContent>
    <SelectItem value="ko">한국어 (Korean)</SelectItem>
    <SelectItem value="en">영어 (English)</SelectItem>
  </SelectContent>
</Select>

{/* 그룹화 (Grouped) */}
<Select>
  <SelectTrigger><SelectValue placeholder="공정 단계 선택" /></SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>전공정 (Front-end)</SelectLabel>
      <SelectItem value="wafer">웨이퍼 세정</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>후공정 (Back-end)</SelectLabel>
      <SelectItem value="test">최종 검사</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

{/* 아이콘 결합 */}
<Select>
  <SelectTrigger>
    <div className="flex items-center gap-2">
      <Activity className="h-4 w-4 text-emerald-500" />
      <SelectValue placeholder="시스템 상태" />
    </div>
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="stable">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-500" /> Stable
      </div>
    </SelectItem>
  </SelectContent>
</Select>
`.trim();

export function SelectSection() {
  return (
    <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
          Select Elements
        </h2>

        <ComponentPreview
          title="Select Variations"
          description="기본 선택, 그룹화, 비활성 및 스크롤이 필요한 긴 목록 예시입니다."
          code={selectVariationsCode}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full items-start">
            {/* 기본 선택 (Default) */}
            <div className="space-y-2">
              <Label>Default Select</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="언어 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ko">한국어 (Korean)</SelectItem>
                  <SelectItem value="en">영어 (English)</SelectItem>
                  <SelectItem value="jp">일본어 (Japanese)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 그룹화 (Grouped) - 기준정보 관리에 유용 */}
            <div className="space-y-2">
              <Label>Grouped Items</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="공정 단계 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>전공정 (Front-end)</SelectLabel>
                    <SelectItem value="wafer">웨이퍼 세정</SelectItem>
                    <SelectItem value="ox">산화 공정</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>후공정 (Back-end)</SelectLabel>
                    <SelectItem value="pkg">패키징</SelectItem>
                    <SelectItem value="test">최종 검사</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* 비활성 및 읽기전용 (Disabled) */}
            <div className="space-y-2">
              <Label className="text-muted-foreground">Disabled State</Label>
              <Select disabled>
                <SelectTrigger>
                  <SelectValue placeholder="수정 권한 없음" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="readonly">고정 데이터</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 아이콘 결합 (With Icons) */}
            <div className="space-y-2">
              <Label>With Icons</Label>
              <Select>
                <SelectTrigger>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-emerald-500" />
                    <SelectValue placeholder="시스템 상태" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stable">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500" />
                      Stable
                    </div>
                  </SelectItem>
                  <SelectItem value="warning">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-amber-500" />
                      Warning
                    </div>
                  </SelectItem>
                  <SelectItem value="error">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      Critical
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 긴 목록 (Scrollable) */}
            <div className="space-y-2 col-span-full border-t pt-6">
              <Label>Long List (Scrollable)</Label>
              <Select>
                <SelectTrigger className="w-full md:w-[280px]">
                  <SelectValue placeholder="시간대 선택 (Timezone)" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">
                      Eastern Standard Time (EST)
                    </SelectItem>
                    <SelectItem value="cst">
                      Central Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="mst">
                      Mountain Standard Time (MST)
                    </SelectItem>
                    <SelectItem value="pst">
                      Pacific Standard Time (PST)
                    </SelectItem>
                    <SelectItem value="akst">
                      Alaska Standard Time (AKST)
                    </SelectItem>
                    <SelectItem value="hst">
                      Hawaii-Aleutian Standard Time (HST)
                    </SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Europe & Africa</SelectLabel>
                    <SelectItem value="gmt">
                      Greenwich Mean Time (GMT)
                    </SelectItem>
                    <SelectItem value="cet">
                      Central European Time (CET)
                    </SelectItem>
                    <SelectItem value="eet">
                      Eastern European Time (EET)
                    </SelectItem>
                    <SelectItem value="wat">West Africa Time (WAT)</SelectItem>
                    <SelectItem value="cat">
                      Central Africa Time (CAT)
                    </SelectItem>
                    <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="ist">
                      India Standard Time (IST)
                    </SelectItem>
                    <SelectItem value="jst">
                      Japan Standard Time (JST)
                    </SelectItem>
                    <SelectItem value="kst">
                      Korea Standard Time (KST)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </ComponentPreview>
      </div>
  );
}