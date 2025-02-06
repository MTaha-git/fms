"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion } from "framer-motion"
import {
  Search,
  Home,
  Bookmark,
  Bell,
  Upload,
  Heart,
  Wallet,
  LogOut,
  Moon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { icon: <Home size={20} />, text: "Dashboard", path: "/admin/dashboard" },
    { icon: <Bookmark size={20} />, text: "Bookmark", path: "/admin/bookmark" },
    { icon: <Upload size={20} />, text: "Upload File", path: "/admin/upload" },
    { icon: <Bell size={20} />, text: "Notifications", path: "/admin/notifications" },
    { icon: <Heart size={20} />, text: "Likes", path: "/admin/likes" },
    { icon: <Wallet size={20} />, text: "Wallets", path: "/admin/wallets" },
  ]

  const navigateTo = (path) => {
    if (pathname !== path) {
      router.push(path)
    }
  }

  return (
    <aside className="h-screen">
      <motion.nav
        initial={{ width: expanded ? 240 : 80 }}
        animate={{ width: expanded ? 240 : 80 }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col bg-[#1A1A1A] border-r border-gray-800"
      >
        {/* Header */}
        <div className="p-4 pb-2 flex justify-between items-center">
          <motion.div
            initial={{ opacity: expanded ? 1 : 0 }}
            animate={{ opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-center gap-2 ${expanded ? "" : "hidden"}`}
          >
            <span className="h-8 w-8 min-w-[32px] rounded bg-violet-600 grid place-items-center text-white font-bold">
              CL
            </span>
            <span className="text-white">Codinglab</span>
          </motion.div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400"
          >
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        {/* Search */}
        <div className="p-4">
          <motion.div
            initial={{ width: expanded ? "100%" : 40 }}
            animate={{ width: expanded ? "100%" : 40 }}
            transition={{ duration: 0.2 }}
            className={`flex items-center gap-2 bg-gray-800 rounded-md p-2 ${expanded ? "" : "justify-center"}`}
          >
            <Search size={20} className="min-w-[20px] text-gray-400" />
            {expanded && (
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-gray-400 border-none outline-none w-full"
              />
            )}
          </motion.div>
        </div>

        {/* Menu */}
        <ul className="flex-1 px-3">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => navigateTo(item.path)}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all 
                  ${pathname === item.path ? "bg-violet-600 text-white" : "text-gray-400 hover:bg-gray-800"}
                  ${expanded ? "" : "justify-center"}`}
              >
                {item.icon}
                <motion.span
                  initial={{ width: expanded ? "auto" : 0 }}
                  animate={{ width: expanded ? "auto" : 0 }}
                  className={`overflow-hidden whitespace-nowrap ${expanded ? "block" : "hidden"}`}
                >
                  {item.text}
                </motion.span>
              </button>
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="border-t border-gray-800 p-3">
          <div
            className={`flex items-center gap-2 px-3 py-2 text-gray-400 hover:bg-gray-800 rounded-md cursor-pointer ${
              expanded ? "" : "justify-center"
            }`}
          >
            <LogOut size={20} />
            <motion.span
              initial={{ width: expanded ? "auto" : 0 }}
              animate={{ width: expanded ? "auto" : 0 }}
              className={`overflow-hidden whitespace-nowrap ${expanded ? "block" : "hidden"}`}
            >
              Logout
            </motion.span>
          </div>
          <div
            className={`flex items-center gap-2 px-3 py-2 text-gray-400 hover:bg-gray-800 rounded-md cursor-pointer ${
              expanded ? "" : "justify-center"
            }`}
          >
            <Moon size={20} />
            <motion.span
              initial={{ width: expanded ? "auto" : 0 }}
              animate={{ width: expanded ? "auto" : 0 }}
              className={`overflow-hidden whitespace-nowrap ${expanded ? "block" : "hidden"}`}
            >
              Light Mode
            </motion.span>
            <motion.div
              initial={{ opacity: expanded ? 1 : 0 }}
              animate={{ opacity: expanded ? 1 : 0 }}
              className={`ml-auto ${expanded ? "" : "hidden"} relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600`}
            >
              <span className="absolute h-4 w-4 transform rounded-full bg-white transition ml-1" />
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </aside>
  )
}
