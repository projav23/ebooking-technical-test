import { useEffect, useState } from 'react'
import { useStore } from '../store/useStore'
import { useShallow } from 'zustand/shallow'
import type { MouseEvent } from 'react'
import Box from '@mui/material/Box'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import UsersList from '../components/UsersList'

import Filter from '../components/Filter'

type ViewMode = 'list' | 'grid'

const UsersPage = () => {
    const [viewMode, setViewMode] = useState<ViewMode>('list')
    const { users, loadUsers, filter } = useStore(
        useShallow((state) => ({
            users: state.users,
            loadUsers: state.loadUsers,
            filter: state.filter,
        }))
    )

    useEffect(() => {
        loadUsers()
    }, [filter])

    const handleViewChange = (_event: MouseEvent<HTMLElement>, newView: ViewMode | null) => {
        if (newView !== null) {
            setViewMode(newView)
        }
    }

    const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 2 }}>
                <Filter />
                <ToggleButtonGroup
                    value={viewMode}
                    exclusive
                    onChange={handleViewChange}
                    size="small"
                >
                    <ToggleButton value="list">
                        <ViewListIcon />
                    </ToggleButton>
                    <ToggleButton value="grid">
                        <ViewModuleIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Box>

            <Box
                sx={{
                    display: viewMode === 'grid' ? 'grid' : 'flex',
                    gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : undefined,
                    flexDirection: viewMode === 'list' ? 'column' : undefined,
                    gap: 2,
                }}
            >
                <UsersList users={filteredUsers} />
            </Box>
        </Box>
    )
}

export default UsersPage