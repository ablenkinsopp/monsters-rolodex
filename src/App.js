import { useEffect, useState } from 'react'

import './App.css'
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'

const App = () => {
    const [monsters, setMonsters] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setMonsters(users))
    }, [])

    const filterMonsters = () => {
        const filteredMonsters = monsters.filter(monster => 
            monster.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

        return filteredMonsters
    }

    return (
        <div className='App'>
            <h1>Monsters Rolodex</h1>
            <SearchBox handleChange={e => setSearchTerm(e.target.value)} placeholder='Search Monsters' />
            <CardList monsters={filterMonsters()} />
        </div>
    )
}

export default App
