// src/pages/reference/sections/NavDisplaySection.tsx
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ComponentPreview } from "../components/ComponentPreview";

const breadcrumbCode = `
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
</Breadcrumb>`.trim();

const cardCode = `
<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>솔루션 요약</CardTitle>
    <CardDescription>현재 접속 중인 인프라 정보입니다.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm">
      서버 상태: <span className="text-emerald-500 font-bold">정상</span>
    </p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="ghost" size="sm">상세보기</Button>
  </CardFooter>
</Card>`.trim();

export function NavDisplaySection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight border-l-4 border-primary pl-3">
        Navigation & Display
      </h2>

      {/* Breadcrumb */}
      <ComponentPreview
        title="Breadcrumb"
        description="현재 위치 경로 표시"
        code={breadcrumbCode}
      >
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

      {/* Card */}
      <ComponentPreview
        title="Card"
        description="정보 컨테이너"
        code={cardCode}
      >
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>솔루션 요약</CardTitle>
            <CardDescription>현재 접속 중인 인프라 정보입니다.</CardDescription>
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
  );
}
