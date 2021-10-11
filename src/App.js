import React, { useState } from 'react';
import './App.css';
import Main from './components/main.js';
import Modal from './components/modal.js';

const App = () => {
  const [modalActive, setModalActive] = useState(false)
  const [users, setUsers] = useState([])

  function handleSave(event) {
    event.preventDefault();
    const user = {
      select: event.target.select.value,
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      avatar: event.target.avatar.value,
    }
    setUsers((prevUsers)=> ([...prevUsers, user]));
    setModalActive(false);
  }

  return (
    <div className='App'>
      <button className='create_btn' onClick={() => setModalActive(true)}>create new User</button>
      <Main users={users}/>
      <Modal if={modalActive} active={modalActive} setActive={setModalActive}>
        <form onSubmit={handleSave}>
          <select className='select' name="select">
            <option>mr</option>
            <option>mrs</option>
            <option>ms</option>
            <option>miss</option>
            <option>dr</option>
          </select>
          <input name="firstName" type='First Name' className='First_Name' placeholder='First Name' maxLength='25' minLength='3' required></input>
          <input name="lastName" type='Last Name' className='Last_Name' placeholder='Last Name' maxLength='25'minLength='5' required></input>
          <input  name="email" type='Email' className='Email' placeholder='Email' maxLength='35' minLength='10' required></input>
          <input name="avatar" type='Avatar URL' className='Avatar_URL' placeholder='Avatar URL' minLength='10'></input>
          <button  className='save_btn' type="submit">Save</button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
