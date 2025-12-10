import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useStore } from '../store/useStore'
import { mockUsers } from './mocks/users'

vi.mock('../client/fetchUsers', () => ({
    fetchUsers: vi.fn(() => Promise.resolve(mockUsers)),
}))

describe('useStore', () => {
    beforeEach(() => {
        useStore.setState({
            users: [],
            filter: '',
            viewMode: 'list',
            isLoading: false,
            error: null,
        })
    })

    it('should initialize the store with the correct values', () => {
        const state = useStore.getState()
        
        expect(state.users).toEqual([])
        expect(state.filter).toBe('')
        expect(state.isLoading).toBe(false)
    })

    it('should set the filter correctly', () => {
        useStore.getState().setFilter('javi')
        
        expect(useStore.getState().filter).toBe('javi')
    })

    it('should set the view mode correctly', () => {
        useStore.getState().setViewMode('grid')
        
        expect(useStore.getState().viewMode).toBe('grid')
    })

    it('shuold load the users correctly', async () => {
        await useStore.getState().loadUsers()
        
        const state = useStore.getState()
        expect(state.users).toEqual(mockUsers)
        expect(state.isLoading).toBe(false)
    })
})
