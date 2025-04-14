import styles from './UserList.module.css';
import UserCard from '../UserCard/UserCard';
import { useState } from 'react';
import useUserStore from '../../store/useUserStore';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
function UserList() {
  const [filter, setFilter] = useState('all');
  const { users, likedUserIds } = useUserStore();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('createNewUser');
  };

  const filtredUsers =
    filter === 'liked'
      ? users.filter((user) => likedUserIds.includes(user.id))
      : users;

  return (
    <>
      <div className={styles.header}>
        <div className={styles.filters}>
          <button
            onClick={() => setFilter('all')}
            className={filter === 'all' ? styles.active : ''}
          >
            Все
          </button>

          <button
            onClick={() => setFilter('liked')}
            className={filter === 'liked' ? styles.active : ''}
          >
            Избранное
          </button>
        </div>
        <div className={styles.newUser}>
          <button onClick={handleClick}>
            <FiPlus size={20} style={{ marginRight: '8px' }} />
            Новый пользователь
          </button>
        </div>
      </div>

      <div className={styles.userList}>
        {console.log({ users })}
        {filtredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}

export default UserList;
