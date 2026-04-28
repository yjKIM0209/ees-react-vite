// src/pages/reference/sections/OverlaySection.tsx
import { useState } from "react";
import {
  Settings,
  User,
  CreditCard,
  UserPlus,
  Mail,
  MessageSquare,
  LogOut,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ComponentPreview } from "../components/ComponentPreview";

const dialogExampleCode = `
{/* (Dialog) */}
<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">모달 열기</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>데이터 수정</DialogTitle>
      <DialogDescription>변경 내용을 저장하시겠습니까?</DialogDescription>
    </DialogHeader>
    <div className="flex justify-end gap-2 pt-4">
      <Button variant="outline">취소</Button>
      <Button variant="success">확인</Button>
    </div>
  </DialogContent>
</Dialog>

{/* (Popover) */}
<Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">
        <Info className="mr-2 h-4 w-4" /> 정보 보기
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="grid gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">시스템 알림</h4>
          <p className="text-sm text-muted-foreground">
            현재 서버 점검이 예정되어 있습니다.
          </p>
        </div>
      </div>
    </PopoverContent>
</Popover>
`.trim();

const dropdownExampleCode = `
{/* 기본 선택 */}
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">
      <Settings className="mr-2 h-4 w-4" /> 설정
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>사용자 계정</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>프로필 설정</DropdownMenuItem>
    <DropdownMenuItem>비밀번호 변경</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-red-600">
      로그아웃
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

{/* Checkboxes */}
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Checkboxes</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-56">
    <DropdownMenuLabel>View Options</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem
      checked={statusbar}
      onCheckedChange={setShowStatusBar}
    >
      상태바 표시
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem
      checked={showActivityBar}
      onCheckedChange={setShowActivityBar}
      disabled
   >
      액티비티바 (비활성)
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked>
      패널 고정
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>
`.trim();

export function OverlaySection() {
  // 예시용 상태 관리
  const [statusbar, setShowStatusBar] = useState<boolean>(true);
  const [showActivityBar, setShowActivityBar] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("bottom");

  return (
    <div id="overlay-section" className="space-y-8 scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
        Overlays & Dialogs
      </h2>

      <ComponentPreview
        title="Dialog & Popover"
        description="모달창 및 팝오버 알림"
        code={dialogExampleCode}
      >
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">모달 열기</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>데이터 수정</DialogTitle>
                <DialogDescription>
                  변경된 내용을 저장하시겠습니까? 이 작업은 취소할 수 없습니다.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline">취소</Button>
                <Button variant="success">확인</Button>
              </div>
            </DialogContent>
          </Dialog>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Info className="mr-2 h-4 w-4" /> 정보 보기
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium leading-none">시스템 알림</h4>
                  <p className="text-sm text-muted-foreground">
                    현재 서버 점검이 예정되어 있습니다.
                  </p>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </ComponentPreview>

      <ComponentPreview
        title="Dropdown Menu Variations"
        description="기본 메뉴부터 서브메뉴, 체크박스, 라디오 그룹 등 다양한 드롭다운 구성을 보여줍니다."
        code={dropdownExampleCode}
      >
        <div className="flex flex-wrap gap-6 justify-center items-start">
          <div className="flex flex-col items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" /> 설정
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>사용자 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>프로필 설정</DropdownMenuItem>
                <DropdownMenuItem>비밀번호 변경</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-[10px] text-slate-400 font-mono">Basic</span>
          </div>

          {/* 복합 기능 (Complex Menu) - 아이콘, 숏컷, 서브메뉴 포함 */}
          <div className="flex flex-col items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Complex Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>프로필</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>결제 관리</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>사용자 초대</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>이메일 전송</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>메시지 전송</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>로그아웃</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-[10px] text-slate-400 font-mono">
              Full Features
            </span>
          </div>

          {/* 체크박스 아이템 (Checkbox Items) - 설정/필터용 */}
          <div className="flex flex-col items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Checkboxes</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>View Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={statusbar}
                  onCheckedChange={setShowStatusBar}
                >
                  상태바 표시
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showActivityBar}
                  onCheckedChange={setShowActivityBar}
                  disabled
                >
                  액티비티바 (비활성)
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked>
                  패널 고정
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-[10px] text-slate-400 font-mono">
              Checkbox Items
            </span>
          </div>

          {/* 라디오 그룹 (Radio Group) - 정렬/단일 선택용 */}
          <div className="flex flex-col items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Radio Group</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>정렬 기준</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={position}
                  onValueChange={setPosition}
                >
                  <DropdownMenuRadioItem value="top">
                    최신순
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">
                    오래된순
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">
                    이름순
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <span className="text-[10px] text-slate-400 font-mono">
              Radio Group
            </span>
          </div>
        </div>
      </ComponentPreview>
    </div>
  );
}
