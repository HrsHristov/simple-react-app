import React, { useState } from 'react';
import AddUser from './components/Users/AddUser.js';
import UsersList from './components/Users/UsersList.js';

function App(props) {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <React.Fragment>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
