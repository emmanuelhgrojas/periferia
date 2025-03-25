'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthStore from '../store/authStore';
import styles from '../styles/post.module.css'; // Importa los estilos
import { useRouter } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  content: string;
  userId: number;
  createdAt: string;
  likes: number;
  user: {
    name: string;
  };
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user?.user);
  const router = useRouter();

  // Redirigir al login si no hay usuario autenticado
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }

    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error al obtener las publicaciones:', error);
      }
    };

    fetchPosts();

  }, [user, router]);
  if (!user) return <div>Cargando...</div>;

  const handleLike = async (postId: number) => {
    try {
      await axios.post(
        'http://localhost:5000/api/posts/'+ postId +'/like',
        { postId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPosts(
        posts.map((post) =>
          post.id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      );
    } catch (error) {
      console.error('Error al dar like:', error);
    }
  };

  return (
    <div>
      <h1>Publicaciones</h1>
      {posts.map((post) => (
        <div className={styles.postContainer} key={post.id}>
          <div className={styles.postHeader}>
            <h2 className={styles.postTitle}>{post.title}</h2>
            <span className={styles.postAuthor}>Por {post.user.name}</span>
            <span className={styles.postDate}>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <p className={styles.postContent}>{post.content}</p>
          <div className={styles.postFooter}>
            <button className={styles.likeButton} onClick={() => handleLike(post.id)}>
              👍 {post.likes}
            </button>
          </div>
        </div>       
      ))}
    </div>
  );
};

export default Posts;