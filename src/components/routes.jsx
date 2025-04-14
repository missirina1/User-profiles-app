import { Routes, Route } from 'react-router-dom';
import UserDetails from './UserDetails/UserDetails';
import UserList from './UserList/UserList';
import CreateNewUser from './CreateNewUser/CreateNewUser';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="user/:id" element={<UserDetails />} />
      <Route path="createNewUser" element={<CreateNewUser />} />
    </Routes>
  );
}

export default AppRoutes;
