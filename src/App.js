import React, { useState } from 'react';
import './App.css';

function App() {
  //forEach,

  const [name, setName] = useState('');
  const [contacts, setContacts] = useState([]);

  function handleAddContact() {
    const newContacts = [...contacts, { id: contacts.length + 1, name: name }];
    setContacts(newContacts);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  return (
    <div className='App'>
      <h1>Contacts</h1>
      <div className='form'>
        <input
          placeholder='Enter name'
          value={name}
          onChange={handleChangeName}
        />
        <input placeholder='Enter email' />
        <button onClick={handleAddContact} className='add-contact-button'>
          Add contact
        </button>
      </div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {contacts.map(contact => (
          <tr>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
