import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Filter from '../components/Filter'
import { useStore } from '../store/useStore'

describe('Filter', () => {
    beforeEach(() => {
        useStore.setState({ filter: '' })
    })

    it('should render the filter input correctly', () => {
        render(<Filter />)

        expect(screen.getByLabelText('Search by name')).toBeVisible()
    })

    it('should show the placeholder correctly', () => {
        render(<Filter />)

        expect(screen.getByPlaceholderText('Text to search')).toBeVisible()
    })

    it('should update the store correctly when typing', async () => {
        const user = userEvent.setup()
        render(<Filter />)

        const input = screen.getByLabelText('Search by name')
        await user.type(input, 'Javi')

        expect(useStore.getState().filter).toBe('Javi')
    })

    it('should show the initial value of the store correctly', () => {
        useStore.setState({ filter: 'test value' })
        render(<Filter />)

        expect(screen.getByDisplayValue('test value')).toBeVisible()
    })
})

