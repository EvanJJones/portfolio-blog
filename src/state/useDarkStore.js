import create from 'zustand';

const useDarkStore = create((set) => ({
  dark: false,
  toggleDark: () => set((state) => ({ dark: !state.dark })),
}));

export default useDarkStore;
