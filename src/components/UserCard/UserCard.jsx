import useUserStore from '../../store/useUserStore';
import styles from './UserCard.module.css';
import { AiFillHeart, AiOutlineHeart, AiOutlineDelete } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

function UserCard({ user }) {
  const { toggleLike, deleteUser, likedUserIds } = useUserStore();
  const isLiked = likedUserIds.includes(user.id);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/user/${user.id}`);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={styles.cardsBox} onClick={handleClick}>
      <div className={styles.card}>
        <img src={user.image} alt={user.firstName} />
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>{user.email}</p>
        <p> Город: {user.address.city}</p>
        <button
          onClick={(e) => {
            stopPropagation(e);
            toggleLike(user.id);
          }}
        >
          {isLiked ? (
            <AiFillHeart color="red" size={20} />
          ) : (
            <AiOutlineHeart size={20} />
          )}
          {isLiked ? ' Убрать лайк' : ' Поставить лайк'}
        </button>
        <button
          onClick={(e) => {
            stopPropagation(e);
            deleteUser(user.id);
          }}
        >
          <AiOutlineDelete size={20} />
          Удалить{' '}
        </button>
      </div>
    </div>
  );
}

export default UserCard;
