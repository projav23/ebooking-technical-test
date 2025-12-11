import { useEffect } from 'react'
import { useStore } from '../store/useStore'
import { useShallow } from 'zustand/shallow'
import type { MouseEvent } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import UsersList from '../components/UsersList'

import Filter from '../components/Filter'
import type { User } from '../types/user'

type ViewMode = 'list' | 'grid'

const UsersPage = () => {
    const { users, loadUsers, filter, viewMode, setViewMode } = useStore(
        useShallow((state) => ({
            users: state.users,
            loadUsers: state.loadUsers,
            filter: state.filter,
            viewMode: state.viewMode,
            setViewMode: state.setViewMode,
        }))
    )

    useEffect(() => {
        loadUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter])

    const handleViewChange = (_event: MouseEvent<HTMLElement>, newView: ViewMode | null) => {
        if (newView !== null) {
            setViewMode(newView)
        }
    }

    const filteredUsers = users.filter((user: User) => user.name.toLowerCase().includes(filter.toLowerCase()))

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

            {!filteredUsers.length && (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100dvh'
                }}>
                    <Typography variant='h5'>
                        User does not exist.
                    </Typography>
                </Box>
            )}
            <Box
                sx={{
                    display: viewMode === 'grid' ? 'grid' : 'flex',
                    gridTemplateColumns: 'auto auto auto auto',
                    flexDirection: viewMode === 'list' ? 'column' : 'row',
                    gap: 2,
                }}
            >
                <UsersList users={filteredUsers} />
            </Box>
        </Box>
    )
}

export default UsersPage