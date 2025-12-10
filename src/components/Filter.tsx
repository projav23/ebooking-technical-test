import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useDebounceCallback } from 'usehooks-ts'
import { useStore } from '../store/useStore'
import { useShallow } from 'zustand/shallow'

const Filter = () => {
    const {filter, setFilter} = useStore(useShallow((state) => ({
        filter: state.filter,
        setFilter: state.setFilter,
    })))
    const [value, setValue] = useState('')

    const debouncedSetFilter = useDebounceCallback(setFilter, 800)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        debouncedSetFilter(e.target.value)
    }

    useEffect(() => {
        setValue(filter)
    }, [filter])

    return (
        <TextField 
            aria-label="filter-users"
            label="Search by name"
            value={value}
            placeholder="Text to search"
            onChange={handleChange}
            variant="outlined"
            size="small"
        />
    )
}

export default Filter