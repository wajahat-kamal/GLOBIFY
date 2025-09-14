import React from "react";
import {
  LayoutDashboard,
  FilePlus2,
  ListOrdered,
  MessageSquare,
} from "lucide-react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Add Blogs", path: "/admin/add-blogs", icon: FilePlus2 },
    { name: "Blog Lists", path: "/admin/blog-lists", icon: ListOrdered },
    { name: "Comments", path: "/admin/comments", icon: MessageSquare },
  ];

  return (
    <aside className="md:w-64 w-20 bg-secondary border-r border-gray-200 shadow-sm flex flex-co">
      <nav className="flex-1 p-4 space-y-2 text-gray-700">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 w-full px-4 py-3 rounded-xl font-medium cursor-pointer transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-100 text-blue-600 shadow-sm"
                    : "hover:bg-gray-100 hover:text-gray-900"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span className="hidden md:inline-block">{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;
