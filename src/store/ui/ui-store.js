import { create } from 'zustand';

const useSidebarStore = create((set) => ({
  isOpen: false,

  toggleSidebar: () =>
    set((state) => ({ isOpen: !state.isOpen })),
  openSideMenu: () => set({ isOpen: true }),
  closeSideMenu: () => set({ isOpen: false })
}))


export default useSidebarStore