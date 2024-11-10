"use client";

import { CircleFadingPlusIcon, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { HiSparkles } from "react-icons/hi2";

import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Label } from "@/components/ui/label";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="space-x-1 text-primary">
        <p className="font-bold sm:inline-block">TransitPlus</p>
        <CircleFadingPlusIcon />
      </SidebarGroupLabel>
      <SidebarMenu>
        <SidebarTrigger className="hidden size-8 items-center justify-center overflow-y-auto bg-blue-100 text-primary hover:bg-gray-200 focus-visible:ring-blue-400 md:flex" />
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <Link href={item.url}>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </CollapsibleTrigger>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
