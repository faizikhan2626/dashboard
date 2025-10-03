"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import {
  Home,
  Users,
  Calendar,
  Briefcase,
  FileText,
  Building,
  Shield,
  Bell,
  Settings,
  ChevronRight,
  Menu,
} from "lucide-react";

const NAV = [
  { name: "Dashboard", icon: Home, href: "#", color: "text-blue-600" },
  { name: "Workers", icon: Users, href: "#", color: "text-blue-600" },
  { name: "Rota", icon: Calendar, href: "#", color: "text-blue-600" },
  { name: "Jobs", icon: Briefcase, href: "#", color: "text-blue-600" },
  {
    name: "Job Fulfilments",
    icon: FileText,
    href: "#",
    color: "text-blue-600",
  },
  {
    name: "Clients & Sites",
    icon: Building,
    href: "#",
    color: "text-blue-600",
  },
  { name: "Compliance", icon: Shield, href: "#", color: "text-blue-600" },
];
export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={clsx(
        "flex flex-col fixed  top-0 left-1  h-screen transition-all duration-300",
        collapsed ? "w-20" : "w-64",
        "bg-gray-200 rounded-4xl shadow-md"
      )}
    >
      {/* Top company logo + collapse toggle */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
            M
          </div>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle sidebar"
          className="p-1 rounded hover:bg-gray-200"
        >
          <Menu size={18} />
        </button>
      </div>

      {/* NAV ITEMS */}
      <nav className="flex-1 overflow-auto mt-4">
        {NAV.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center justify-between px-4 py-2 rounded-lg hover:bg-gray-100 mx-2 my-1"
            >
              <div className="flex items-center gap-3">
                <Icon className={clsx("w-5 h-5", item.color)} />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </div>
              {!collapsed && (
                <ChevronRight size={16} className="text-gray-400" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* BOTTOM SECTION */}
      <div className="p-2  ">
        {/* Notifications + Settings aligned like nav */}
        <div className="flex flex-col">
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
            <Bell className="w-5 h-5 text-blue-600" />
            {!collapsed && (
              <span className="text-sm font-medium">Notifications</span>
            )}
          </button>
          <button className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100">
            <Settings className="w-5 h-5 text-blue-600" />
            {!collapsed && (
              <span className="text-sm font-medium">Settings</span>
            )}
          </button>
        </div>

        {/* Account row */}
        <div className="flex items-center gap-2 -ml-1 px-4 py-3  mt-2 rounded-lg hover:bg-gray-100">
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          {!collapsed && <span className="text-sm font-medium">John Doe</span>}
        </div>

        {/* Company logo + name at the very bottom */}
        <div className="flex items-center ml-2 mt-6 mb-5">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            M
          </div>
          {!collapsed && (
            <>
              <div className="flex items-center ml-3 flex-col">
                <span className="font-semibold text-lg">Managero</span>
                <span className="text-xs text-gray-500">Business Suite</span>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}
