import Services from '../services'

const Persons = ({ persons, filter, setPersons }) => {
  const deletePerson = (Oldperson) => {
    if (!window.confirm(`Delete ${Oldperson.name}?`)) return
    Services.deletePerson(Oldperson.id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
    setPersons(persons.filter((person) => person.id !== Oldperson.id))
  }

  return (
    <ul>
      {[
        ...persons.filter((person) =>
          person.name.toLowerCase().startsWith(filter.toLowerCase())
        ),
      ].map((person) => (
        <li key={person.id}>
          {person.name} {person.phone}
          <button
            style={{ margin: '0.25em' }}
            onClick={() => deletePerson(person)}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}
export default Persons
