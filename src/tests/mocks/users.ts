import type { User } from '../../types/user'

export const mockUsers: User[] = [
    {
        id: 1,
        name: 'Javi Gomez',
        username: 'projav23',
        email: 'javi@gomez.com',
        phone: '123456789',
        website: 'javigomez.com',
        address: {
            street: '123 Calle Falsa',
            suite: '123',
            city: 'Springfield',
            zipcode: '10001',
            geo: { lat: '40.7234', lng: '-24.0260' },
        },
        company: {
            name: 'Ebooking',
            catchPhrase: 'The best way to travel',
            bs: 'travel agency',
        },
    },
    {
        id: 2,
        name: 'Raul Gomez',
        username: 'raulgomez',
        email: 'raul@gomez.com',
        phone: '123456789',
        website: 'raulgomez.com',
        address: {
            street: '123 Calle Falsa',
            suite: '123',
            city: 'Springfield',
            zipcode: '10001',
            geo: { lat: '40.7234', lng: '-24.0260' },
        },
        company: {
            name: 'Ebooking',
            catchPhrase: 'The best way to travel',
            bs: 'travel agency',
        },
    },
]

