import { useState, useEffect } from 'react'  // ← Missing useEffect!
import axios from 'axios'                    // ← Missing axios!
const App = () => {
  const [persons, setPersons] = useState([])  // Start empty
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  // "Order pizza when component appears"
  useEffect(() => {
    console.log('🚀 App: useEffect running')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('📋 App: Received persons:', initialPersons)
        setPersons(initialPersons)
      })
  }, [])

  

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()  // Prevent page reload
    
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return  // Exit function, don't add the person
    }

    const personObject = {
      name: newName,
      number: newNumber
    }

    console.log("Creating person object:: ", personObject)
    
    personService
      .create(personObject)
      .then(returnedPerson => {
        console.log('✅ App: Person created:', returnedPerson)
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value={newName} 
          onChange={handleNameChange} />
        </div>
        <div>
        number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        )}
      </ul>
    </div>
  )
}


export default App


// filtering is not done ex:2.9