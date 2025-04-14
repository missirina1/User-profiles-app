import './App.css';
import getUsers from './api/users';
import useUserStore from './store/useUserStore';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/routes';

function App() {
  const { setUsers } = useUserStore();

  useEffect(() => {
    getUsers().then(setUsers);
  }, [setUsers]);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
