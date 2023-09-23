import { create } from 'zustand';
export type AppStore = {
	theme: string ;
	toggleTheme: () => void;
};
const appStore = create<AppStore>((set) => ({
	theme: 'dark',
	toggleTheme: () =>
		set((state) => {
			return { theme: state.theme === 'dark' ? '' : 'dark' };
		}),
}));

export default appStore;
