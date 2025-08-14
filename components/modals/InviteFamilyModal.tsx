"use client"

import { useState, useEffect } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X, Mail, Users, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as Label from "@radix-ui/react-label"
import { useHouseholdStore } from "@/store/useHouseholdStore"

interface InviteFamilyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onInviteSent?: () => void
}

export function InviteFamilyModal({ open, onOpenChange, onInviteSent }: InviteFamilyModalProps) {
  const { households, fetchHouseholds } = useHouseholdStore()
  
  const [formData, setFormData] = useState({
    email: "",
    householdId: "",
    role: "member",
    message: ""
  })
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (open && households.length === 0) {
      fetchHouseholds()
    }
  }, [open, households.length, fetchHouseholds])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (!formData.email.trim()) {
      setError("Email is required")
      setLoading(false)
      return
    }

    if (!formData.householdId) {
      setError("Please select a household")
      setLoading(false)
      return
    }

    try {
      const inviteData = {
        email: formData.email,
        householdId: formData.householdId,
        role: formData.role,
        message: formData.message || null
      }

      const response = await fetch("/api/households/invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inviteData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to send invitation")
      }

      // Reset form and close modal
      setFormData({
        email: "",
        householdId: "",
        role: "member",
        message: ""
      })
      
      onOpenChange(false)
      
      // Call the callback to handle post-invite actions
      if (onInviteSent) {
        onInviteSent()
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 animate-in fade-in" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-background p-6 shadow-lg animate-in fade-in-0 zoom-in-95 overflow-y-auto">
          <Dialog.Title className="text-lg font-semibold flex items-center gap-2">
            <Users className="h-5 w-5" />
            Invite Family Member
          </Dialog.Title>
          <Dialog.Description className="text-sm text-muted-foreground mt-2">
            Send an invitation to join your household
          </Dialog.Description>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label.Root htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email Address *
              </Label.Root>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="family.member@example.com"
                required
              />
            </div>

            {/* Household Selection */}
            <div className="space-y-2">
              <Label.Root htmlFor="household" className="text-sm font-medium flex items-center gap-2">
                <Home className="h-4 w-4" />
                Household *
              </Label.Root>
              <select
                id="household"
                value={formData.householdId}
                onChange={(e) => setFormData({ ...formData, householdId: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background"
                required
              >
                <option value="">Select household</option>
                {households.map((household) => (
                  <option key={household.id} value={household.id}>
                    {household.name} ({household.members.length} member{household.members.length !== 1 ? 's' : ''})
                  </option>
                ))}
              </select>
            </div>

            {/* Role Selection */}
            <div className="space-y-2">
              <Label.Root htmlFor="role" className="text-sm font-medium">
                Role
              </Label.Root>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background"
              >
                <option value="member">Member</option>
                <option value="admin">Admin</option>
              </select>
              <p className="text-xs text-muted-foreground">
                Admins can manage household settings and invite others
              </p>
            </div>

            {/* Personal Message */}
            <div className="space-y-2">
              <Label.Root htmlFor="message" className="text-sm font-medium">
                Personal Message (Optional)
              </Label.Root>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi! I'd like to invite you to join our household task management..."
                className="w-full min-h-[80px] px-3 py-2 text-sm rounded-md border border-input bg-background"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                {error}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Invitation"}
              </Button>
            </div>
          </form>

          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}