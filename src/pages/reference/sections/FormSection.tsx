// src/pages/reference/sections/FormSection.tsx
import { Mail, Search, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ComponentPreview } from "../components/ComponentPreview";
import { REGEXP_ONLY_DIGITS } from "input-otp";

const inputVariationsCode = `
<div className="grid w-full max-w-sm gap-6">
  <div className="grid gap-1.5">
    <Label htmlFor="default">Default Input</Label>
    <Input id="default" placeholder="내용을 입력하세요" />
  </div>

  <div className="grid gap-1.5">
    <Label htmlFor="disabled">Disabled</Label>
    <Input id="disabled" disabled placeholder="수정 불가능한 필드" />
  </div>
  
  <div className="grid gap-1.5">
    <Label htmlFor="file">File Upload</Label>
    <Input id="file" type="file" className="cursor-pointer" />
  </div>
</div>`.trim();

const inputGroupsCode = `
<div className="grid w-full max-w-sm gap-6">
  <div className="relative">
    <Mail className="absolute left-3 top-2 h-4 w-4 text-muted-foreground" />
    <Input className="pl-10" placeholder="Email Address" />
  </div>

  <div className="flex w-full items-center space-x-2">
    <Input type="text" placeholder="검색어를 입력하세요..." />
    <Button type="submit" size="sm" className="shrink-0">
      <Search className="h-4 w-4 mr-1" /> 검색
    </Button>
  </div>

  <div className="flex w-full items-center space-x-2">
    <Input readOnly value="https://api.url.com" className="bg-muted/50" />
    <Button variant="outline" size="icon"><Copy className="h-4 w-4" /></Button>
  </div>
</div>`.trim();

const inputOtpCode = `
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

<InputOTP maxLength={4}>
  <InputOTPGroup className="gap-2">
    <InputOTPSlot index={0} className="rounded-md border" />
    <InputOTPSlot index={1} className="rounded-md border" />
    <InputOTPSlot index={2} className="rounded-md border" />
    <InputOTPSlot index={3} className="rounded-md border" />
  </InputOTPGroup>
</InputOTP>`.trim();

export function FormSection() {
  return (
    <div id="form-section" className="space-y-8 scroll-mt-20">
      <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
        Form Elements
      </h2>

      {/* Input Variations */}
      <ComponentPreview
        title="Input Variations"
        description="기본, 비활성, 파일 업로드 등 다양한 입력 타입입니다."
        code={inputVariationsCode}
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

      {/* Input Groups */}
      <ComponentPreview
        title="Input Groups"
        description="아이콘이나 버튼이 결합된 입력창입니다."
        code={inputGroupsCode}
      >
        <div className="grid w-full max-w-sm gap-6">
          <div className="relative">
            <Mail className="absolute left-3 top-2 h-4 w-4 text-muted-foreground" />
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

      {/* Input OTP */}
      <ComponentPreview
        title="Input OTP"
        description="보안 인증을 위한 번호 입력 필드입니다."
        code={inputOtpCode}
      >
        <div className="flex flex-col items-center gap-6 w-full max-w-sm">
          {/* 6자리 버전 */}
          <div className="space-y-2 text-center border-b pb-6">
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
            <p className="text-xs text-muted-foreground">전송된 6자리 번호를 입력해주세요.</p>
          </div>

          {/* 4자리 심플 버전 (추가됨) */}
          <div className="space-y-2 text-center">
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
  );
}
