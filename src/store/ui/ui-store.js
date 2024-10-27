import { create } from 'zustand';

const useSidebarStore = create((set) => ({
  isOpen: false,

  toggleSidebar: () =>
    set((state) => ({ isOpen: !state.isOpen })),
  openSideMenu: () => set({ isOpen: true }),
  closeSideMenu: () => set({ isOpen: false })
}))

const useMainStore = create((set) => ({
  isOpenMain: false,

  toggleSidebar: () =>
    set((state) => ({ isOpenMain: !state.isOpenMain })),
  openMainMenu: () => set({ isOpenMain: true }),
  closeMainMenu: () => set({ isOpenMain: false })
}))



export { useSidebarStore, useMainStore };