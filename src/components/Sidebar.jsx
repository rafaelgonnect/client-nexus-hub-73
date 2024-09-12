import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { navItems } from "@/nav-items";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-gray-900 text-white h-screen">
      <div className="p-5">
        <h1 className="text-2xl font-bold">CRM Nexus</h1>
      </div>
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center px-5 py-3 text-sm font-medium transition-colors hover:bg-gray-800",
                    isActive ? "bg-gray-800 text-white" : "text-gray-400"
                  )
                }
              >
                {item.icon}
                <span className="ml-3">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-5">
        <p className="text-sm text-gray-400">© 2024 CRM Nexus</p>
      </div>
    </div>
  );
};

export default Sidebar;