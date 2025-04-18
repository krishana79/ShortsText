import { create } from "zustand";
interface storeState {
  isDarkMode:boolean;
  setIsDarkMode:(newValue:boolean)=>void;
  openCmntPopUp: boolean;
  sidenavtoggle: boolean;
  setSidenavtoggle: (newValue: boolean) => void;
  setOpenCmntPopUp: (newValue: boolean) => void;
  openUtilPopUp: boolean;
  setOpenUtilPopUp: (newValue: boolean) => void;
  toggleLoginBtn: boolean;
  setToggleLoginBtn: (newValue: boolean) => void;
  openLoginPanel: boolean;
  setOpenLoginPanel: (newValue: boolean) => void;
  clicked:boolean,
  setClicked:(newValue:boolean)=>void;
  showHeader:boolean,
  setShowHeader:(newValue:boolean)=>void;
  loginText:string;
  setLoginText:(newValue:string)=>void;
  hoverMoreIcon:boolean;
  setHoverMoreIcon:(newValue:boolean)=>void;
}
const useStore = create<storeState>((set) => ({
  isDarkMode: false,
  setIsDarkMode: (newValue: boolean) => set({ isDarkMode: newValue }),
  openCmntPopUp: false,
  setOpenCmntPopUp: (newValue: boolean) => set({ openCmntPopUp: newValue }),
  sidenavtoggle:false,
  setSidenavtoggle: (newValue: boolean) => set({ sidenavtoggle: newValue }),
  openUtilPopUp: false,
  setOpenUtilPopUp: (newValue: boolean) => set({ openUtilPopUp: newValue }),
  clicked:false,
  setClicked:(newValue:boolean)=>set({clicked:newValue}),
  showHeader:false,
  setShowHeader:(newValue:boolean)=>set({showHeader:newValue}),
  openLoginPanel: false,
  setOpenLoginPanel: (newValue: boolean) => set({ openLoginPanel: newValue }),
  toggleLoginBtn: false,
  setToggleLoginBtn: (newValue: boolean) => set({ toggleLoginBtn: newValue }),
  loginText: "Login",
  setLoginText: (newValue: string) => set({ loginText: newValue }),
  hoverMoreIcon:false,
  setHoverMoreIcon: (newValue: boolean) => set({ hoverMoreIcon: newValue }),
}));
export default useStore;
