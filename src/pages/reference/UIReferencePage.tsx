// src/pages/reference/UIReferencePage.tsx
import { ComponentPreview } from "./components/ComponentPreview";
import { useState } from "react";

// Shadcn UI Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ButtonGroup } from "@/components/ui/button-group";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
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

// Icons
import {
  Plus,
  Trash2,
  Save,
  Settings,
  Component,
  Info,
  User,
  CreditCard,
  UserPlus,
  Mail,
  MessageSquare,
  LogOut,
  Search,
  Copy,
  Activity,
} from "lucide-react";
import { REGEXP_ONLY_DIGITS } from "input-otp";

export default function UIReferencePage() {
  const [statusbar, setShowStatusBar] = useState<boolean>(true);
  const [showActivityBar, setShowActivityBar] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("bottom");

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
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
          Buttons & Actions
        </h2>

        <ComponentPreview
          title="Button Variants"
          description="기본 및 커스텀 테마 버튼"
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

      {/* --- Form Elements --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
          Form Elements
        </h2>

        {/* 기본 및 상태별 Input */}
        <ComponentPreview
          title="Input Variations"
          description="기본, 비활성, 파일 업로드 등 다양한 입력 타입입니다."
        >
          <div className="grid w-full max-w-sm gap-6">
            <div className="grid gap-1.5">
              <Label htmlFor="default">Default Input</Label>
              <Input id="default" placeholder="내용을 입력하세요" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="disabled" className="text-muted-foreground">
                Disabled
              </Label>
              <Input id="disabled" disabled placeholder="수정 불가능한 필드" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="file">File Upload</Label>
              <Input id="file" type="file" className="cursor-pointer" />
            </div>
          </div>
        </ComponentPreview>

        {/* Input Groups (버전 결합형) */}
        <ComponentPreview
          title="Input Groups"
          description="아이콘이나 버튼이 결합된 입력창입니다."
        >
          <div className="grid w-full max-w-sm gap-6">
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input className="pl-10" placeholder="Email Address" />
            </div>

            <div className="flex w-full items-center space-x-2">
              <Input type="text" placeholder="검색어를 입력하세요..." />
              <Button type="submit" size="sm" className="shrink-0">
                <Search className="h-4 w-4 mr-1" /> 검색
              </Button>
            </div>

            <div className="flex w-full items-center space-x-2">
              <Input
                readOnly
                value="https://api.company.com/v1/auth"
                className="bg-muted/50"
              />
              <Button variant="outline" size="icon" className="shrink-0">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </ComponentPreview>

        {/* Input OTP (인증번호) */}
        <ComponentPreview
          title="Input OTP"
          description="보안 인증을 위한 번호 입력 필드입니다."
        >
          <div className="flex flex-col items-center gap-6">
            <div className="space-y-2 text-center">
              <Label>One-Time Password</Label>
              <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-xs text-muted-foreground">
                전송된 6자리 번호를 입력해주세요.
              </p>
            </div>

            {/* 4자리 심플 버전 */}
            <div className="space-y-2 text-center border-t pt-6 w-full">
              <Label>4-Digit Pin</Label>
              <InputOTP maxLength={4}>
                <InputOTPGroup className="gap-2">
                  <InputOTPSlot index={0} className="rounded-md border" />
                  <InputOTPSlot index={1} className="rounded-md border" />
                  <InputOTPSlot index={2} className="rounded-md border" />
                  <InputOTPSlot index={3} className="rounded-md border" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>
        </ComponentPreview>
      </div>

      {/* --- Select --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
          Select Elements
        </h2>

        <ComponentPreview
          title="Select Variations"
          description="기본 선택, 그룹화, 비활성 및 스크롤이 필요한 긴 목록 예시입니다."
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

      {/* --- Overlays & Dialogs --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
          Overlays & Dialogs
        </h2>

        <ComponentPreview
          title="Dialog & Popover"
          description="모달창 및 팝오버 알림"
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
                    변경된 내용을 저장하시겠습니까? 이 작업은 취소할 수
                    없습니다.
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
              <span className="text-[10px] text-slate-400 font-mono">
                Basic
              </span>
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

      {/* --- Navigation & Data Display --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
          Navigation & Display
        </h2>

        <ComponentPreview title="Breadcrumb" description="현재 위치 경로 표시">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/master">기준정보</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>UI Reference</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </ComponentPreview>

        <ComponentPreview title="Card" description="정보 컨테이너">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>솔루션 요약</CardTitle>
              <CardDescription>
                현재 접속 중인 인프라 정보입니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                서버 상태:{" "}
                <span className="text-emerald-500 font-bold">정상</span>
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" size="sm">
                상세보기
              </Button>
            </CardFooter>
          </Card>
        </ComponentPreview>
      </div>

      {/* --- Feedback & Loading --- */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
          Feedback & Loading
        </h2>

        <ComponentPreview
          title="Tooltip"
          description="마우스 호버 시 나타나는 설명창입니다. 방향(Side)과 상태에 따른 예시입니다."
        >
          <TooltipProvider delayDuration={100}>
            <div className="flex flex-col gap-8 items-center">
              {/* 방향별 예시 */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Top</Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>상단에 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Bottom</Button>
                  </TooltipTrigger>
                  <TooltipContent side="bottom">
                    <p>하단에 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Left</Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>좌측에 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Right</Button>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p>우측에 표시됩니다</p>
                  </TooltipContent>
                </Tooltip>
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
                  <span className="text-[10px] text-slate-400 font-mono">
                    with Disabled
                  </span>
                </div>

                <div className="flex flex-col items-center gap-2">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-blue-500"
                      >
                        <Info className="h-5 w-5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent className="bg-blue-600">
                      <p>커스텀 배경색 적용</p>
                    </TooltipContent>
                  </Tooltip>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Custom Style
                  </span>
                </div>
              </div>
            </div>
          </TooltipProvider>
        </ComponentPreview>

        <ComponentPreview title="Loading" description="데이터 로딩 상태 표시">
          <div className="flex flex-col gap-6 w-full max-w-sm">
            <div className="flex items-center gap-2">
              <Spinner className="size-4" />
              <Spinner className="size-5" />
              <Spinner className="size-6" />
              <span className="text-sm text-muted-foreground">
                데이터를 불러오는 중...
              </span>
            </div>
          </div>
        </ComponentPreview>
      </div>
    </div>
  );
}
