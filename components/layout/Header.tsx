"use client"

import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Bell, Search, Menu, LogOut, User, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Avatar from "@radix-ui/react-avatar"
import { cn, generateInitials } from "@/lib/utils"

interface HeaderProps {
  onMenuClick?: () => void
}

export function Header({ onMenuClick }: HeaderProps) {
  const { data: session } = useSession()
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tasks, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 pl-10"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
              3
            </span>
          </Button>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar.Root className="h-10 w-10">
                  <Avatar.Image
                    src={session?.user?.image || undefined}
                    alt={session?.user?.name || "User"}
                    className="rounded-full"
                  />
                  <Avatar.Fallback className="bg-primary text-primary-foreground">
                    {generateInitials(session?.user?.name || "User")}
                  </Avatar.Fallback>
                </Avatar.Root>
              </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="min-w-56 bg-popover text-popover-foreground rounded-md border shadow-md p-1"
                sideOffset={5}
                align="end"
              >
                <div className="px-3 py-2 border-b">
                  <p className="font-medium">{session?.user?.name}</p>
                  <p className="text-sm text-muted-foreground">{session?.user?.email}</p>
                </div>

                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm rounded-sm hover:bg-accent cursor-pointer">
                  <User className="h-4 w-4" />
                  Profile
                </DropdownMenu.Item>

                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm rounded-sm hover:bg-accent cursor-pointer">
                  <Settings className="h-4 w-4" />
                  Settings
                </DropdownMenu.Item>

                <DropdownMenu.Separator className="my-1 h-px bg-border" />

                <DropdownMenu.Item
                  className="flex items-center gap-2 px-3 py-2 text-sm rounded-sm hover:bg-accent cursor-pointer text-destructive"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  <LogOut className="h-4 w-4" />
                  Sign out
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  )
}