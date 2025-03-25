'use client';

import { useState } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import { useRouter } from 'next/navigation';
import styles from '../styles/login.module.css'; // Importa los estilos

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();
  const [error] = useState('');

  const handleLogin =  async (e: React.FormEvent) => {
    // Evitar la recarga de la página    
    try {
      e.preventDefault();
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const { token } = response.data;
      
      // Guardar el token y el usuario en el estado global
      setToken(token);

      // Obtener datos del usuario
      const userResponse = await axios.get('http://localhost:5000/api/user/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(userResponse.data);

      // Redirigir al perfil
      router.push('/profile');
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
    }
  };

  return (
    <div className={styles['login-container']}>
      <form className={styles['login-form']} onSubmit={handleLogin}>
        <h2 className={styles['titulo']}>Login</h2>
        <input
          className={styles.input}
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className={styles['error-message']}>{error}</div>}
        <button className={styles.button} type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LoginPage;