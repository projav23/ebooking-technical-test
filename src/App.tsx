import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UsersPage from './views/UsersPage'
import UserDetailsPage from './views/UserDetailsPage'
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
