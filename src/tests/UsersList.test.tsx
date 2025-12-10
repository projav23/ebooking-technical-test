import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import UsersList from '../components/UsersList'
import { mockUsers } from './mocks/users'


const mockNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom')
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    }
})

describe('UsersList', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('should render the list of users correctly', () => {
        render(
            <MemoryRouter>
                <UsersList users={mockUsers} />
            </MemoryRouter>
        )

        expect(screen.getByText('Javi Gomez')).toBeVisible()
        expect(screen.getByText('Raul Gomez')).toBeVisible()
    })

    it('should show the email of each user correctly', () => {
        render(
            <MemoryRouter>
                <UsersList users={mockUsers} />
            </MemoryRouter>
        )

        expect(screen.getByText('javi@gomez.com')).toBeVisible()
        expect(screen.getByText('raul@gomez.com')).toBeVisible()
    })

    it('should navigate to the user details page correctly', async () => {
        const user = userEvent.setup()
        render(
            <MemoryRouter>
                <UsersList users={mockUsers} />
            </MemoryRouter>
        )

        const card = screen.getByText('Javi Gomez').closest('.MuiCard-root')
        await user.click(card!)

        expect(mockNavigate).toHaveBeenCalledWith('/user/1')
    })

    it('should show an empty list correctly', () => {
        const { container } = render(
            <MemoryRouter>
                <UsersList users={[]} />
            </MemoryRouter>
        )

        expect(container.querySelectorAll('.MuiCard-root')).toHaveLength(0)
    })
})

