import { create } from 'zustand';

const useSidebarStore = create((set) => ({
  isOpen: false,

  toggleSidebar: () =>
    set((state) => ({ isOpen: !state.isOpen })),
  openSideMenu: () => set({ isOpen: true }),
  closeSideMenu: () => set({ isOpen: false })
}))


export default useSidebarStore

/* const useUiStore = create((set) => ({
  isSideMenuOpen: false,

  openSideMenu: () => set({ isSideMenuOpen: true }),
  closeSideMenu: () => set({ isSideMenuOpen: false }),
}));

export default useUiStore;
 */