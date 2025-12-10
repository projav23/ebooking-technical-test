import { useParams, useNavigate } from 'react-router-dom'
import { useStore } from '../store/useStore'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import type { User } from '../types/user'
import UserDetails from '../components/UserDetails'

const UserDetailsPage = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const user = useStore((state) => 
        state.users.find((u: User) => u.id === Number(id)))

    if (!user) {
        return (
            <Box sx={{ p: 3 }}>
                <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/')}>
                    Back to users
                </Button>
                <Typography variant="h5" sx={{ mt: 2 }}>
                    User not found
                </Typography>
            </Box>
        )
    }

    return (
        <Box sx={{ p: 3, maxWidth: 600, margin: '0 auto' }}>
            <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/')} sx={{ mb: 2 }}>
                Back to users
            </Button>

            <UserDetails user={user} />
        </Box>
    )
}

export default UserDetailsPage