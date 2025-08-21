import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [message, setMessage] = useState('');
  const [headline, setHeadline] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ text: headline })
        });
        const data = await response.json();
        setMessage(data.message);
      } catch (err) {
        setMessage('Error contacting backend');
      }
    };
    fetchData();
  }, [headline]);

  return (
    <div>
      <h1>React + Node App</h1>
      <p>Message from server: {message}</p>
    </div>
  );
}

export default App;
