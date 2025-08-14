import { create } from 'zustand';
import { getCurrentUser } from '../lib/appwrite'; // Fix import path
import { user } from '../type'; // Fix import path

type AuthState = {
  isAuthenticated: boolean;
  user: user | null;
  isLoading: boolean;
  setIsAuthenticated: (value: boolean) => void;
  setUser: (user: user | null) => void;
  setLoading: (loading: boolean) => void;
  fetchAuthenticatedUser: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  isLoading: true,

  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  setUser: (user) => set({ user }),
  setLoading: (value) => set({ isLoading: value }),

  fetchAuthenticatedUser: async () => {
    set({ isLoading: true });
    try {
      const user = await getCurrentUser();
      if (user) {
        set({ isAuthenticated: true, user: user as User }); 
      } else {
        set({ isAuthenticated: false, user: null });
      }
    } catch (e) {
      console.log('fetchAuthenticatedUser error', e);
      set({ isAuthenticated: false, user: null });
    } finally {
      set({ isLoading: false });
    }
  },
}));