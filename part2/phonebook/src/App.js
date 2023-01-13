import { useReducer, useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phone: '39-44-5323523', 
      id: 1
    },
  ]);
  const [newEntry, setNewEntry] = useReducer((prev, next) => { 
    return {...prev, ...next} 
  }, {name:'', phone: ''})

  const addName = (e) => {
    e.preventDefault()
    const names = persons.map((person) => person.name)

    if (names.includes(newEntry.name)){
      alert(`${newEntry.name} is already added to phonebook`)
      setNewEntry({name: '', phone: ''})
      return
    }
    if (newEntry.name === '' || newEntry.phone === ''){
      alert(`Please enter something for both fields`)
      return
    }
    setPersons([...persons, { name: newEntry.name, phone: newEntry.phone, id: persons.length + 1 }])
    setNewEntry({name: '', phone: ''})
  }

  const changeName = (e) => setNewEntry({name: e.target.value})
  const changePhone = (e) => setNewEntry({phone: e.target.value})

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}
      >
        <div>
          name:
          {' '}
          <input value={newEntry.name} onChange={changeName} />
        </div>
        <div>
          number:
          {' '}
          <input value={newEntry.phone} onChange={changePhone} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name} {person.phone}</li>)}
      </ul>
    </div>
  );
}

export default App;
