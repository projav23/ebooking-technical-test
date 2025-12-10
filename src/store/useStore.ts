import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

import type { User } from '../types/user'
import { fetchUsers } from '../client/fetchUsers'

interface UserStore {
    users: User[]
    viewMode: 'list' | 'grid'
    setViewMode: (viewMode: 'list' | 'grid') => void
    filter: string
    isLoading: boolean
    error: string | null
    setFilter: (filter: string) => void
    loadUsers: () => Promise<void>
}

export const useStore = create<UserStore>()(
    devtools(
        persist(
        (set) => ({
            users: [],
            viewMode: 'list',
            filter: '',
            isLoading: false,
            error: null,
            setFilter: (filter) => set({ filter }),
            setViewMode: (viewMode) => set({ viewMode }),
            loadUsers: async () => {
                set({ isLoading: true, error: null })
                try {
                    const users = await fetchUsers()
                    set({ users, isLoading: false })
                } catch (error) {
                    set({ error: (error as Error).message, isLoading: false })
                }
            },
        }),
        {
            name: 'users-store',
        }
    ))
)
