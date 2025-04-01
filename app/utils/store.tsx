import { create } from "zustand";
interface storeState {
//   isFilled: boolean;
//   setIsFilled: (newValue: boolean) => void;
}
const useStore = create<storeState>((set) => ({
//   isFilled: false,
//   setIsFilled: (newValue: boolean) => set({ isFilled: newValue }),
}));
export default useStore;
