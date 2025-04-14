import './App.css';
import getUsers from './api/users';
import useUserStore from './store/useUserStore';
import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from './components/routes';

function App() {
  const { setUsers } = useUserStore();

  useEffect(() => {
    getUsers().then(setUsers);
  }, [setUsers]);

  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  );
}

export default App;
