import { create } from "zustand";
interface EnvState {
  basePath: string;
  setBasePath: (newValue: string) => void;
}
const useEnvStore = create<EnvState>((set) => ({
  basePath: "",
  setBasePath: (newValue: string) => set({ basePath: newValue }),
}));

export default useEnvStore;
