"use client";

import { useScrollSpy } from "@mantine/hooks";
import {
  BriefcaseBusiness,
  CircleUserRound,
  GraduationCap,
  KanbanSquare,
} from "lucide-react";
import { TabBar, TabBarList, TabBarTrigger } from "@/components/ui/tab-bar";

const NAV_ITEMS = [
  { section: "home", label: "About", icon: CircleUserRound },
  { section: "projects", label: "Projects", icon: KanbanSquare },
  { section: "work", label: "Work", icon: BriefcaseBusiness },
  { section: "education", label: "Education", icon: GraduationCap },
];

/**
 * Floating glass tab bar at the bottom of the viewport. Highlights the section
 * currently in view and scrolls to a section when a tab is picked.
 */
export function FloatingNav() {
  const spy = useScrollSpy({
    selector: "main [data-section]",
    getDepth: () => 1,
    getValue: (element) => element.getAttribute("data-section") ?? "",
  });
  const active = spy.data[spy.active]?.value ?? NAV_ITEMS[0].section;

  function scrollTo(section: string) {
    spy.data
      .find((entry) => entry.value === section)
      ?.getNode()
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <TabBar value={active} onValueChange={scrollTo}>
      <TabBarList className="fixed inset-x-4 bottom-[max(16px,env(safe-area-inset-bottom))] z-50 mx-auto max-w-md">
        {NAV_ITEMS.map(({ section, label, icon: Icon }) => (
          <TabBarTrigger key={section} value={section}>
            <Icon />
            {label}
          </TabBarTrigger>
        ))}
      </TabBarList>
    </TabBar>
  );
}
