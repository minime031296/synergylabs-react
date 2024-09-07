import React, { useEffect } from 'react'
import { toast } from 'react-toastify'

const CreateNewUser = () => {
  const createNewUser = async () => {
    try {
      const name = 'John Doe';  
      const username = 'johndoe';
      const email = 'johndoe@example.com';
      const phone = '123-456-7890';
      const website = 'johndoe.com';

      const createdUser = {
        name: name,
        username: username,
        email: email,
        phone: phone,
        website: website
      };

      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(createdUser),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      toast.success('User created successfully');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    createNewUser();
  }, []);

  return <div></div>;
}

export default CreateNewUser;
