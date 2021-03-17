import create from 'zustand';
import { persist } from 'zustand/middleware';

const useDarkStore = create(persist((set, get) => ({
  dark: false,
  toggleDark: () => set({ dark: !get().dark }),
}),
{ name: 'dark-mode' }));

export default useDarkStore;
