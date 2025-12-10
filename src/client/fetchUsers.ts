import type { User } from '../types/user'

export const fetchUsers = async(): Promise<User[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    return data
}

// export const fetchUserById = async(id: number): Promise<User> => {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     const data = await response.json()
//     return data
// }