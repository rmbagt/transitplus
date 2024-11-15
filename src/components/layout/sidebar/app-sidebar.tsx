"use client";

import { NavMain } from "@/components/layout/sidebar/nav-main";
import { NavUser } from "@/components/layout/sidebar/nav-user";
import { CalendarClockIcon, DatabaseIcon, Home } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import type { Session } from "next-auth";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Home",
      url: "/profile",
      icon: Home,
      isActive: true,
    },
    {
      title: "Events",
      url: "/events",
      icon: CalendarClockIcon,
      isActive: true,
    },
    {
      title: "TravelPoints",
      url: "/points",
      icon: DatabaseIcon,
      isActive: true,
    },
  ],
};

export function AppSidebar({
  session,
  ...props
}: {
  session: Session;
  props?: React.ComponentProps<typeof Sidebar>;
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: session.user.name ?? "",
            email: session.user.email ?? "",
            image: session.user.image ?? "",
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
