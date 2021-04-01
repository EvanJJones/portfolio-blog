import create from 'zustand';
import { persist } from 'zustand/middleware';

const useDarkStore = create(persist((set, get) => ({
  dark: false,
  toggleDark: () => set({ dark: !get().dark }),
  setDarkMode: (mode) => set({ dark: mode }),
}),
{
  name: 'dark-mode',
  getStorage: () => sessionStorage,
}));

export default useDarkStore;
