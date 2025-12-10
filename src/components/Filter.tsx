import TextField from '@mui/material/TextField'
import { useShallow } from 'zustand/shallow'
import { useStore } from '../store/useStore'
const Filter = () => {
    const { filter, setFilter } = useStore(
        useShallow((state) => ({
            filter: state.filter,
            setFilter: state.setFilter,
        }))
    )
    return (
        <TextField 
            aria-label="filter-users"
            label="Search by name"
            value={filter}
            placeholder="Text to search"
            onChange={(e) => setFilter(e.target.value)}
            variant="outlined"
            size="small"
        />
    )
}

export default Filter