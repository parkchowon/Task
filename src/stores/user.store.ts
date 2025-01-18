import { create } from "zustand";
import { UserStoreType } from "../types/auth.type";

export const useUserStore = create<UserStoreType>((set) => ({
  user: {
    nickname: "",
    id: "",
    avatar: "",
  },
  setUser: (value) => set({ user: value }),
}));
