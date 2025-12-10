import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { fetchUsers } from '../client/fetchUsers'
import { mockUsers } from './mocks/users'

describe('fetchUsers', () => {
    beforeEach(() => {
        vi.stubGlobal('fetch', vi.fn())
    })

    afterEach(() => {
        vi.unstubAllGlobals()
    })

    it('should fetch users from the API', async () => {
        vi.mocked(fetch).mockResolvedValue({
            json: () => Promise.resolve(mockUsers),
        } as Response)

        const result = await fetchUsers()

        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users')
        expect(result).toEqual(mockUsers)
    })

    it('should return the data from the response', async () => {
        vi.mocked(fetch).mockResolvedValue({
            json: () => Promise.resolve(mockUsers),
        } as Response)

        const result = await fetchUsers()

        expect(result).toHaveLength(2)
        expect(result[0].name).toBe('Javi Gomez')
        expect(result[1].name).toBe('Raul Gomez')
    })

    it('should throw an error when fetch fails', async () => {
        vi.mocked(fetch).mockRejectedValue(new Error('Network error'))

        await expect(fetchUsers()).rejects.toThrow('Network error')
    })
})

