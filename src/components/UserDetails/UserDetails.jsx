import styles from './UserDetails.module.css';
import useUserStore from '../../store/useUserStore';
import { useNavigate, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

function UserDetails() {
  const { id } = useParams();
  const { users } = useUserStore();
  const user = users.find((u) => u.id === Number(id));
  const navigate = useNavigate();

  if (!user) {
    return <p>Загрузка или пользователь не найден...</p>;
  }

  return (
    <>
      <div className={styles.userDetails}>
        <img src={user.image} alt={user.firstName} />
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <h3>Ник: {user.username}</h3>
        <p>Email: {user.email}</p>
        <p>Город: {user.address.city}</p>
        <p>Лет: {user.age}</p>
        <p>Цвет глаз: {user.eyeColor}</p>
        <p>Рост: {user.height}</p>
        <p>Телефон: {user.phone}</p>

        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <FiArrowLeft size={20} /> Назад
        </button>
      </div>
    </>
  );
}

export default UserDetails;
