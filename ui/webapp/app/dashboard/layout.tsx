"use client"

import { useState } from "react"
import { SessionProvider } from "next-auth/react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <SessionProvider>
      <div className="h-screen flex overflow-hidden">
        <Sidebar className={cn(
          "hidden lg:flex",
          sidebarOpen && "flex"
        )} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 overflow-y-auto bg-muted/50 p-6">
            {children}
          </main>
        </div>
      </div>
    </SessionProvider>
  )
}