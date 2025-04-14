import { useNavigate } from 'react-router-dom';
import styles from './CreateNewUser.module.css';
import { useState } from 'react';
import useUserStore from '../../store/useUserStore';
import { FiArrowLeft } from 'react-icons/fi';

function CreateNewUser() {
  const navigate = useNavigate();
  const addUser = useUserStore((state) => state.addUser);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    image: '',
    email: '',
    age: '',
    eyeColor: '',
    height: '',
    phone: '',
    address: {
      city: '',
    },
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'city') {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Введите имя';
    if (!formData.lastName.trim()) newErrors.lastName = 'Введите фамилию';
    if (!formData.email.includes('@')) newErrors.email = 'Некорректный email';
    if (!formData.address.city.trim()) newErrors.city = 'Введите город';
    if (!/^\+\d{1,3}\d{7,12}$/.test(formData.phone)) {
      newErrors.phone =
        'Введите корректный номер телефона с кодом страны (например, +380971234567)';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      ...formData,
      id: Date.now(),
    };

    addUser(newUser);
    navigate('/');
  };

  return (
    <>
      <div className={styles.pageForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Создание новго профиля</h2>
          <input
            name="firstName"
            placeholder="Имя"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p className={styles.error}>{errors.firstName}</p>
          )}

          <input
            name="lastName"
            placeholder="Фамилия"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className={styles.error}>{errors.lastName}</p>}

          <input
            name="username"
            placeholder="Никнейм"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            name="image"
            placeholder="Ссылка на аватар"
            value={formData.image}
            onChange={handleChange}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}

          <input
            name="age"
            placeholder="Возраст"
            type="number"
            value={formData.age}
            onChange={handleChange}
          />

          <input
            name="eyeColor"
            placeholder="Цвет глаз"
            value={formData.eyeColor}
            onChange={handleChange}
          />

          <input
            name="height"
            placeholder="Рост (см) "
            type="number"
            value={formData.height}
            onChange={handleChange}
          />

          <input
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className={styles.error}>{errors.phone}</p>}

          <input
            name="city"
            placeholder="Город"
            value={formData.address.city}
            onChange={handleChange}
          />

          {errors.city && <p className={styles.error}>{errors.city}</p>}

          <button type="submit"> Создать</button>
        </form>
        <button className={styles.backBtn} onClick={() => navigate('/')}>
          <FiArrowLeft size={20} />
          Назад
        </button>
      </div>
    </>
  );
}

export default CreateNewUser;
