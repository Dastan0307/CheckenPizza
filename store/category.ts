import { create } from 'zustand'

interface State {
	activeId: number
	setActive: (activeId: number) => void
}

export const useCategoryStore = create<State>()((set) => ({
	activeId: 0,
    setActive: (activeId) => set({ activeId }),
    selectCategory: (id: number) => ({ activeId: id }),
}))