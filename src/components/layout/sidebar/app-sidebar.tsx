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
  ...props
}: {
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
            name: "Rafael Marvin",
            email: "rafaelmarvin@binus.ac.id",
            image: "/avatar.png",
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
