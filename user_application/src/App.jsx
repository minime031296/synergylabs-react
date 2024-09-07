import { useEffect, useState } from 'react';
import './App.css';
import Users from './components/Users';

function App() {
  const [users, setUsers] = useState([]);

  async function fetchUsers() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users data:', error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <Users users={users} />
    </>
  );
}

export default App;
