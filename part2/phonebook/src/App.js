import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

function App() {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newEntry, setNewEntry] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    { name: '', phone: '' }
  )
  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((res) => {
      console.log(res.data)
      setPersons(res.data)
    })
  }, [])

  const addName = (e) => {
    e.preventDefault()
    const names = persons.map((person) => person.name)

    if (names.includes(newEntry.name)) {
      alert(`${newEntry.name} is already added to phonebook`)
      setNewEntry({ name: '', phone: '' })
      return
    }
    if (newEntry.name === '' || newEntry.phone === '') {
      alert(`Please enter something for both fields`)
      return
    }
    setPersons([
      ...persons,
      { name: newEntry.name, phone: newEntry.phone, id: persons.length + 1 },
    ])
    setNewEntry({ name: '', phone: '' })
  }
  const changeName = (e) => setNewEntry({ name: e.target.value })
  const changePhone = (e) => setNewEntry({ phone: e.target.value })
  const changeFilter = (e) => setFilter(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter {...{ filter, changeFilter }} />
      <h2>add a new</h2>
      <PersonForm {...{ addName, newEntry, changeName, changePhone }} />
      <h2>Numbers</h2>
      <Persons {...{ persons, filter }} />
    </div>
  )
}

export default App
