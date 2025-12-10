import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import UserDetails from '../components/UserDetails'
import { mockUsers } from './mocks/users'

const user = mockUsers[0]

describe('UserDetails', () => {
    it('should show the name correctly', () => {
        render(<UserDetails user={user} />)

        expect(screen.getByText('Javi Gomez')).toBeVisible()
    })

    it('should show the username correctly', () => {
        render(<UserDetails user={user} />)

        expect(screen.getByText('@projav23')).toBeVisible()
    })

    it('should show the contact information correctly', () => {
        render(<UserDetails user={user} />)

        expect(screen.getByText(/javi@gomez.com/)).toBeVisible()
        expect(screen.getByText(/123456789/)).toBeVisible()
    })

    it('should show the address correctly', () => {
        render(<UserDetails user={user} />)

        expect(screen.getByText('123 Calle Falsa, 123')).toBeVisible()
        expect(screen.getByText('Springfield, 10001')).toBeVisible()
    })

    it('should show the company information correctly', () => {
        render(<UserDetails user={user} />)

        expect(screen.getByText('Ebooking')).toBeVisible()
    })
})

