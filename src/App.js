import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Cards from './Cards'

function App() {
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsersList(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      {usersList.map((el) => ( <Cards users={el}/>
      ))}
    </div>
  );
}

export default App;

