import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navigation from '../../Components/Navigation/Navigation';
import User from '../../Components/User/User';
import UserForm from '../../Components/User/UserForm';
import Logo from '../../Components/Logo';

import { UserInterface } from '../../Interfaces/User.interface'

const Users = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      setUsers(res.data);
    });
  }, []);

  const deleteUser = (user: UserInterface) => {
    console.log('user '+user.name+' has been deleted');
    const newUsers = users.filter((u) => u.id !== user.id);
    setUsers(newUsers);
  };

  const addUser = (userEmail: string) => {
    console.log('user '+userEmail+' has been added');
    const userToAdd: UserInterface = {
      id: 1,
      name: '',
      email: userEmail
    }
    users.map((user) => user.id++); // forbidden if real ID, need to find workaround for the first item border
    const newUsers = [userToAdd, ...users];
    setUsers(newUsers);
  };

  return (
    <main id='content'>
      <Logo />
      <Navigation />
      <section id='user-container' className='main-container'>
        <header>
          <h1>Utilisateurs</h1>
          <UserForm addUser={addUser}/>
        </header>
          
          <div id='user-list-container' className="container">
            <ul className='user-list'>
              {
                users.map((user) => <User key={user.id} user={user} deleteUser={deleteUser}/>)
              }
            </ul>
          </div>
      </section>
    </main>
  );
};

export default Users;