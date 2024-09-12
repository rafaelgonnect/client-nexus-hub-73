import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { navItems } from "@/nav-items";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      <div className={cn(
        "fixed inset-0 bg-black/50 z-40 md:hidden",
        open ? "block" : "hidden"
      )} onClick={() => setOpen(false)} />
      <aside className={cn(
        "fixed top-0 left-0 z-50 flex flex-col w-64 h-screen transition-transform bg-gradient-to-b from-blue-600 to-blue-800 text-white",
        "md:relative md:translate-x-0",
        open ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 md:p-5 border-b border-blue-700">
          <div className="flex items-center space-x-2">
            <svg id="bil-logo" width="40" height="40" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="#ffffff"></circle>
              <text x="50" y="60" fontFamily="Arial, sans-serif" fontSize="40" fill="#1e88e5" textAnchor="middle">Bil</text>
              <path d="M30 70 Q 50 80 70 70" stroke="#1e88e5" strokeWidth="3" fill="none"></path>
            </svg>
            <h1 className="text-2xl font-bold">Cont<span className="text-yellow-300">AI</span>bil</h1>
          </div>
          <Button variant="ghost" className="md:hidden" onClick={() => setOpen(false)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center p-2 rounded-lg transition-colors",
                      isActive ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-700"
                    )
                  }
                  onClick={() => setOpen(false)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="font-medium">{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-700">
          <p className="text-sm text-blue-200 text-center">© 2024 ContAIbil</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;