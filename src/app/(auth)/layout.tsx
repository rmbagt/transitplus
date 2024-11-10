import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import "@/styles/globals.css";
import { cookies } from "next/headers";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <SidebarTrigger className="fixed left-4 top-4 z-40 flex size-10 items-center justify-center overflow-y-auto bg-blue-100 text-primary shadow-md hover:bg-white/30 md:left-8 md:top-8" />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
