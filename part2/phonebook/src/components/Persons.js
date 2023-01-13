const Persons = ({ persons, filter }) => (
  <ul>
    {[
      ...persons.filter((person) =>
        person.name.toLowerCase().startsWith(filter.toLowerCase())
      ),
    ].map((person) => (
      <li key={person.id}>
        {person.name} {person.phone}
      </li>
    ))}
  </ul>
)
export default Persons