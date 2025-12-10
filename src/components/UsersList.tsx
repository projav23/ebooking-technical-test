import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import type { User } from '../types/user'
import { useNavigate } from 'react-router-dom'

const UsersPage = ({ users }: { users: User[] }) => {
    const navigate = useNavigate()
    const handleClick = (id: number) => {
        navigate(`/user/${id}`)
    }
    return (
        <>
        {users.map((user) => (
            <Card 
                key={user.id} 
                sx={{ minWidth: 200, cursor: 'pointer' }} 
                onClick={() => handleClick(user.id)}
            >
                <CardContent>
                    <Typography variant="h6" component="div">
                        {user.name}
                    </Typography>
                    <Typography color="text.secondary" gutterBottom>
                        {user.email}
                    </Typography>
                    <Typography variant="body2">
                        {user.address.city}
                    </Typography>

                </CardContent>
            </Card>
        ))}
        </>
    )
}

export default UsersPage