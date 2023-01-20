import { useEffect, useReducer, useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Services from './services'
import Notification from './components/Notification'

function App() {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [notificationData, setnotificationData] = useState({})
  const [newEntry, setNewEntry] = useReducer(
    (prev, next) => {
      return { ...prev, ...next }
    },
    { name: '', phone: '' }
  )
  useEffect(() => {
    Services.getPersons()
      .then((persons) => setPersons(persons))
      .catch((err) => console.log(err))
  }, [])

  const addName = (e) => {
    e.preventDefault()
    const dupePerson = persons.find((person) => person.name === newEntry.name)

    if (dupePerson) {
      if (
        !window.confirm(
          `${newEntry.name} is already added to phonebook, replace the old number with a new one?`
        )
      )
        return
      Services.updatePerson(dupePerson.id, {
        ...dupePerson,
        phone: newEntry.phone,
      })
        .then((person) => {
          setNewEntry({ name: '', phone: '' })
          setPersons([
            ...persons.filter((person) => person.id !== dupePerson.id),
            {
              ...dupePerson,
              phone: newEntry.phone,
            },
          ])
          spawnNotification(`Replaced ${person.name}'s phone number`, false)
        })
        .catch(() => {
          spawnNotification(
            `Information of ${dupePerson.name} has already been removed from the server`,
            true
          )
          Services.getPersons()
            .then((persons) => setPersons(persons))
            .catch((err) => console.log(err))
        })
      return
    }
    if (newEntry.name === '' || newEntry.phone === '') {
      spawnNotification(`Please enter something for both fields`, true)
      return
    }
    Services.sendPerson({
      name: newEntry.name,
      phone: newEntry.phone,
      id: persons.length + 1,
    })
      .then((person) => {
        setPersons([...persons, person])
        spawnNotification(`Added ${person.name}`, false)
        setNewEntry({ name: '', phone: '' })
      })
      .catch((err) => console.log(err))
  }
  const changeName = (e) => setNewEntry({ name: e.target.value })
  const changePhone = (e) => setNewEntry({ phone: e.target.value })
  const changeFilter = (e) => setFilter(e.target.value)
  const spawnNotification = (message, isError) => {
    setnotificationData({ message, isError })
    setTimeout(() => setnotificationData(null), 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification {...notificationData} />
      <Filter {...{ filter, changeFilter }} />
      <h2>add a new</h2>
      <PersonForm {...{ addName, newEntry, changeName, changePhone }} />
      <h2>Numbers</h2>
      <Persons {...{ persons, filter, setPersons }} />
    </div>
  )
}

export default App
