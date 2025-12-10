import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import type { User } from '../types/user'

const UserDetails = ({ user }: { user: User }) => {
    return (
    <Card>
        <CardContent>
            <Typography variant="h4" gutterBottom>
                {user.name}
            </Typography>
            <Typography color="text.secondary" gutterBottom>
                @{user.username}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
                Contact
            </Typography>
            <Typography variant="body1">
                <strong>Email:</strong> {user.email}
            </Typography>
            <Typography variant="body1">
                <strong>Phone:</strong> {user.phone}
            </Typography>
            <Typography variant="body1">
                <strong>Website:</strong> {user.website}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
                Address
            </Typography>
            <Typography variant="body1">
                {user.address.street}, {user.address.suite}
            </Typography>
            <Typography variant="body1">
                {user.address.city}, {user.address.zipcode}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" gutterBottom>
                Company
            </Typography>
            <Typography variant="body1">
                <strong>{user.company.name}</strong>
            </Typography>
            <Typography variant="body2" fontStyle="italic">
                "{user.company.catchPhrase}"
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {user.company.bs}
            </Typography>
        </CardContent>
    </Card>
    )
}

export default UserDetails