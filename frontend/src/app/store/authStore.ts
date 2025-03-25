import { create } from 'zustand';

interface User {
  user: User;
  name: string;
  email: string;
  createdAt: Date;
}

interface AuthStore {
  user: User | null;
  token: string | null;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  setUser: (user: User) => set({ user }),  // El tipo del parámetro `user` está especificado como `User`
  setToken: (token: string) => set({ token }),  // El tipo del parámetro `token` está especificado como `string`
  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;