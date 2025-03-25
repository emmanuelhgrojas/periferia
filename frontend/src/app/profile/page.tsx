'use client';

import { useEffect } from 'react';
import useAuthStore from '../store/authStore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';  // Importar Link de Next.js
import styles from '../styles/profile.module.css'; // Importa los estilos

const Profile = () => {
  const user = useAuthStore((state) => state.user?.user);
  const router = useRouter();

  // Redirigir al login si no hay usuario autenticado
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);
  if (!user) return <div>Cargando...</div>;

  return (
    <div className={styles['profile-container']}>
      <div className={styles['profile-card']}>
        {user ? (
          <>
            <h2>Bienvenido, {user.name}</h2>
            <p>Email: {user.email}</p>     
            <p>Miembro desde: {new Date(user.createdAt).toLocaleDateString()}</p>  
            {/* Enlace a la página de posts */}
            <p>
              <Link href="/posts">
                <a className={styles['profile-posts-link']}>Ver publicaciones</a>
              </Link>    
            </p>            
            <button className={styles['profile-button']} onClick={() => alert('Cerrar sesión')}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;