import React, { useState } from 'react';
import './App.css';

function App() {
  //forEach,

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contacts, setContacts] = useState([]);

  function handleAddContact() {
    const newContacts = [...contacts, { id: contacts.length + 1, name: name, email: email }];
    setContacts(newContacts);
  }

  function handleChangeName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
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
        <input 
        placeholder='Enter email' 
        value={email}
        onChange={handleEmail}
        />
        
        <button onClick={handleAddContact} className='add-contact-button'>
          <font size="3" color="white">Add contact</font>
        </button>
      </div>
      <table>
        <tr bgcolor="#ff197d">
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>

        {contacts.map(contact => (
          <tr>
            <td>{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
