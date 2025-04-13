import { create } from "zustand";
interface storeState {
  isDarkMode:boolean;
  setIsDarkMode:(newValue:boolean)=>void;
  openCmntPopUp: boolean;
  sidenavtoggle: boolean;
  setSidenavtoggle: (newValue: boolean) => void;
  setOpenCmntPopUp: (newValue: boolean) => void;
  openLoginPopUp: boolean;
  setOpenLoginPopUp: (newValue: boolean) => void;
  clicked:boolean,
  setClicked:(newValue:boolean)=>void;
  showHeader:boolean,
  setShowHeader:(newValue:boolean)=>void;
}
const useStore = create<storeState>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (newValue: boolean) => set({ isDarkMode: newValue }),
  openCmntPopUp: false,
  setOpenCmntPopUp: (newValue: boolean) => set({ openCmntPopUp: newValue }),
  sidenavtoggle:false,
  setSidenavtoggle: (newValue: boolean) => set({ sidenavtoggle: newValue }),
  openLoginPopUp: false,
  setOpenLoginPopUp: (newValue: boolean) => set({ openLoginPopUp: newValue }),
  clicked:false,
  setClicked:(newValue:boolean)=>set({clicked:newValue}),
  showHeader:false,
  setShowHeader:(newValue:boolean)=>set({showHeader:newValue}),
}));
export default useStore;
