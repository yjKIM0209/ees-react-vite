// src/features/layout/components/AppSidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SidebarHeaderLogo } from "@/shared/components/sidebar/SidebarHeaderLogo";
import { SidebarNavList } from "@/shared/components/sidebar/SidebarNavList";
import { SidebarUserStatus } from "@/shared/components/sidebar/SidebarUserStatus";
import { RAW_MENUS } from "../constants/menu";

export function AppSidebar() {
  const userRole = "admin";
  const filteredMenus = RAW_MENUS.filter((menu) =>
    menu.role.includes(userRole),
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-slate-800">
      <SidebarHeader className="bg-slate-900 border-b border-slate-800/50 py-4">
        <SidebarHeaderLogo title="FACTORY OS" />
      </SidebarHeader>

      <SidebarContent className="bg-slate-900 pt-4">
        <SidebarNavList items={filteredMenus} />
      </SidebarContent>

      <SidebarFooter className="bg-slate-900 border-t border-slate-800/50 p-4">
        <SidebarUserStatus
          username="admin_user"
          systemStatus="시스템 정상 운영 중"
        />
      </SidebarFooter>
    </Sidebar>
  );
}
