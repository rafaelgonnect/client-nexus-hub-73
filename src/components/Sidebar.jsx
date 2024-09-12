import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { navItems } from "@/nav-items";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-64 bg-white text-gray-800 h-screen shadow-lg">
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-center mb-4">
          <svg id="bil-logo" width="50" height="50" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="#1e88e5"></circle>
            <text x="50" y="60" fontFamily="Arial, sans-serif" fontSize="40" fill="white" textAnchor="middle">Bil</text>
            <path d="M30 70 Q 50 80 70 70" stroke="white" strokeWidth="3" fill="none"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-center">Cont<span className="text-blue-500">AI</span>bil</h1>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-4">
          {navItems.map((item) => (
            <li key={item.to} className="px-5 py-2">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center py-2 px-4 rounded-lg transition-colors",
                    isActive ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-blue-100"
                  )
                }
              >
                <span className="mr-3">{item.icon}</span>
                <span className="font-medium">{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-5 border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">© 2024 ContAIbil</p>
      </div>
    </div>
  );
};

export default Sidebar;