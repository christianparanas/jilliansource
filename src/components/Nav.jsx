// src/components/Nav.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Squeeze as Hamburger } from "hamburger-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import ThemeChanger from "@/components/ThemeChanger";

export default function Nav() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [isOpen, setOpen] = useState(false);

  const closeNav = () => {
    setOpen(false); // Immediate close for better UX; no delay needed
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile Nav */}
      <nav className="fixed top-0 left-0 w-full bg-[#11191f] border-b border-[#18232c]/75 z-50 md:hidden">
        <div className="flex justify-between items-center px-4 py-3">
          <Link href="/" onClick={closeNav} className="text-lg font-bold text-slate-100">
            Jillian Mae Belegorio
          </Link>
          <div className="flex items-center gap-2">
            <div className="p-1 bg-[#18232c] rounded-lg shadow-md">
              <ThemeChanger />
            </div>
            <Hamburger
              color="#fff"
              size={24}
              toggled={isOpen}
              toggle={setOpen}
              label="Toggle navigation"
            />
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`absolute top-[60px] left-0 w-full bg-[#11191f] shadow-lg transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeNav}
                  className={`block px-4 py-2 text-slate-100 rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-[#18232c] shadow-md"
                      : "hover:bg-[#18232c]/50 hover:shadow-sm"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <nav className="hidden md:block fixed top-0 left-0 md:w-[320px] h-screen bg-[#11191f] border-r border-[#18232c] z-50">
        <div className="flex flex-col h-full px-6 py-8">
          {/* Branding */}
          <div className="mb-12">
            <Link href="/" className="text-2xl font-bold text-slate-100 hover:text-blue-400 transition-colors">
              Jillian Mae Belegorio
            </Link>
            <p className="mt-1 text-sm text-slate-400">RCA, Accounting</p>
          </div>

          {/* Navigation Links */}
          <ul className="space-y-3 flex-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 text-lg text-slate-100 rounded-lg transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-[#18232c] shadow-md"
                      : "hover:bg-[#18232c]/50 hover:shadow-sm"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-5 h-5 ${pathname === item.href ? "text-blue-400" : "text-slate-400"}`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={getIconPath(item.label)}
                    />
                  </svg>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Switcher */}
          <div className="mt-auto flex items-center gap-3">
            <span className="text-sm text-slate-400">
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
            <div className="p-1 bg-[#18232c] rounded-lg shadow-md">
              <ThemeChanger />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Helper function for icon paths
function getIconPath(label) {
  switch (label) {
    case "Home":
      return "M3 12l9-9 9 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V12z";
    case "About":
      return "M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.964 0a9 9 0 1 0-11.964 0m11.964 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z";
    case "Resume":
      return "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z";
    case "Services":
      return "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z";
    case "Portfolio":
      return "M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z";
    case "Contact":
      return "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75";
    default:
      return "";
  }
}