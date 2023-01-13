const PersonForm = ({ addName, newEntry, changeName, changePhone }) => (
  <form onSubmit={addName}>
    <div>
      name: <input value={newEntry.name} onChange={changeName} />
    </div>
    <div>
      number: <input value={newEntry.phone} onChange={changePhone} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
)
export default PersonForm
