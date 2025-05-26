// @/lib/featurues/sidebarData.ts

import {
  Book,
  Crown,
  Group,
  Heart,
  Settings,
  Users,
  Calendar,
  BookOpenCheck,
  HeartHandshake,
} from "lucide-react";
import { translations } from "@/translations";

export function getSidebarData(t: (typeof translations)["en"]["sidebar"]) {
  return {
    teams: [
      {
        name: t.teams.fgc,
        logo: Crown,
        plan: t.teams.admin,
      },
    ],
    navMain: [
      {
        title: t.navMain.personnel,
        url: "#",
        icon: Users,
        isActive: true,
        items: [
          { title: t.navMain.members, url: "/dashboard/personnel/members" },
          { title: t.navMain.youth, url: "/dashboard/personnel/youth" },
          { title: t.navMain.teenagers, url: "/dashboard/personnel/teenagers" },
        ],
      },
      {
        title: t.navMain.servicesTeams,
        url: "#",
        icon: Group,
        items: [
          { title: t.navMain.navItems.campusMinistry, url: "/dashboard/servicesTeams/campusMinistry" },
          { title: t.navMain.navItems.youthCoordinators, url: "/dashboard/servicesTeams/youthCoordinators" },
          { title: t.navMain.navItems.TeenageCoordinators, url: "/dashboard/servicesTeams/teenageCoordinators" },
          { title: t.navMain.navItems.prayerTeam, url: "/dashboard/servicesTeams/prayerTeam" },
          { title: t.navMain.navItems.socialMedia, url: "/dashboard/servicesTeams/socialMedia" },
          { title: t.navMain.navItems.agape, url: "/dashboard/servicesTeams/agape" },
        ],
      },
      {
        title: t.navMain.unionGroups,
        url: "#",
        icon: Heart,
        items: [
          { title: t.navMain.navItems.bibleStudy, url: "/dashboard/unionGroups/bibleStudy" },
          { title: t.navMain.navItems.prayer, url: "/dashboard/unionGroups/prayer" },
          { title: t.navMain.navItems.worship, url: "/dashboard/unionGroups/worship" },
        ],
      },
      {
        title: t.navMain.events,
        url: "#",
        icon: Calendar,
        items: [
          { title: t.navMain.navItems.events, url: "/dashboard/events/events" },
        ],
      },
      {
        title: t.navMain.education,
        url: "#",
        icon: BookOpenCheck,
        items: [
          {
            title: t.navMain.navItems.bibleSchool,
            url: "/dashboard/education/bibleSchool",
          },
          {
            title: t.navMain.navItems.discipleship,
            url: "/dashboard/education/discipleship",
          },
        ],
      },
      {
        title: t.navMain.memberCare,
        url: "#",
        icon: HeartHandshake,
        items: [
          { title: t.navMain.navItems.counseling, url: "/dashboard/memberCare/counseling" },
          {
            title: t.navMain.navItems.prayerRequests,
            url: "/dashboard/memberCare/prayer-requests",
          },
        ],
      },
    ],
    projects: [
      {
        name: t.projects.settings,
        url: "/dashboard/settings",
        icon: Settings,
      },
      {
        name: t.projects.manuals,
        url: "/dashboard/manuals",
        icon: Book,
      },
    ],
  };
}
