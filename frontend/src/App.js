import axios from 'axios';
import { useEffect } from 'react';
import './App.css';
import Router from './Router';
import { useUserContext } from './contexts/userStore';

function App() {
  const { setMenu } = useUserContext();

  useEffect(() => {
    getMenu();
  }, [])

  async function getMenu() {
    const menu = await axios.get('http://localhost:3001/menu')
    // console.log(menu.data)
    setMenu(menu.data)
  }


  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
