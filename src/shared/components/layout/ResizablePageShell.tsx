// src/shared/components/layout/ResizablePageShell.tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

interface ResizableLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  defaultLayout?: number[];
}

export function ResizablePageShell({
  left,
  right,
  defaultLayout = [20, 80],
}: ResizableLayoutProps) {
  return (
    <ResizablePanelGroup
      {...({ direction: "horizontal" } as any)}
      className="flex-1 items-stretch"
    >
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        minSize={15}
        maxSize={40}
        className="bg-slate-50"
      >
        {left}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={defaultLayout[1]}>{right}</ResizablePanel>
    </ResizablePanelGroup>
  );
}
