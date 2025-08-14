import { create } from 'zustand'
import { Household, HouseholdMember, User } from '@prisma/client'

export type HouseholdWithMembers = Household & {
  members: (HouseholdMember & {
    user: User
  })[]
}

interface HouseholdStore {
  households: HouseholdWithMembers[]
  selectedHouseholdId: string | null
  loading: boolean
  error: string | null
  
  // Actions
  setHouseholds: (households: HouseholdWithMembers[]) => void
  addHousehold: (household: HouseholdWithMembers) => void
  updateHousehold: (householdId: string, updates: Partial<Household>) => void
  deleteHousehold: (householdId: string) => void
  setSelectedHouseholdId: (householdId: string | null) => void
  
  addMemberToHousehold: (householdId: string, member: HouseholdMember & { user: User }) => void
  removeMemberFromHousehold: (householdId: string, memberId: string) => void
  updateMemberRole: (householdId: string, memberId: string, role: string) => void
  
  // Loading states
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  
  // API helpers
  fetchHouseholds: () => Promise<void>
  
  // Computed
  selectedHousehold: () => HouseholdWithMembers | null
}

export const useHouseholdStore = create<HouseholdStore>((set, get) => ({
  households: [],
  selectedHouseholdId: null,
  loading: false,
  error: null,
  
  setHouseholds: (households) => set({ households }),
  
  addHousehold: (household) => set((state) => ({
    households: [...state.households, household]
  })),
  
  updateHousehold: (householdId, updates) => set((state) => ({
    households: state.households.map((household) =>
      household.id === householdId ? { ...household, ...updates } : household
    )
  })),
  
  deleteHousehold: (householdId) => set((state) => ({
    households: state.households.filter((household) => household.id !== householdId),
    selectedHouseholdId: state.selectedHouseholdId === householdId ? null : state.selectedHouseholdId
  })),
  
  setSelectedHouseholdId: (householdId) => set({ selectedHouseholdId: householdId }),
  
  addMemberToHousehold: (householdId, member) => set((state) => ({
    households: state.households.map((household) =>
      household.id === householdId 
        ? { ...household, members: [...household.members, member] }
        : household
    )
  })),
  
  removeMemberFromHousehold: (householdId, memberId) => set((state) => ({
    households: state.households.map((household) =>
      household.id === householdId
        ? { ...household, members: household.members.filter((member) => member.id !== memberId) }
        : household
    )
  })),
  
  updateMemberRole: (householdId, memberId, role) => set((state) => ({
    households: state.households.map((household) =>
      household.id === householdId
        ? {
            ...household,
            members: household.members.map((member) =>
              member.id === memberId ? { ...member, role } : member
            )
          }
        : household
    )
  })),
  
  // Loading states
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  
  // API helpers
  fetchHouseholds: async () => {
    try {
      set({ loading: true, error: null })
      
      const response = await fetch('/api/households')
      if (!response.ok) {
        throw new Error('Failed to fetch households')
      }
      
      const households = await response.json()
      set({ households })
    } catch (error) {
      console.error('Error fetching households:', error)
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch households' 
      })
    } finally {
      set({ loading: false })
    }
  },
  
  selectedHousehold: () => {
    const { households, selectedHouseholdId } = get()
    return households.find((household) => household.id === selectedHouseholdId) || null
  }
}))