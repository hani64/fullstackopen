import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      id: 1
    },
  ]);
  const [newName, setNewName] = useState('');

  const addName = (e) => {
    e.preventDefault();
    setPersons([...persons, { name: newName, id: persons.length + 1 }]);
    setNewName('');
  };

  const changeName = (e) => setNewName(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}
      >
        <div>
          name:
          {' '}
          <input value={newName} onChange={changeName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => <li key={person.id}>{person.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
