import { create } from "zustand";

type CounterStore = {
    globalUsername: string | null;
    saveGlobalUsername: () => void;
};

export const useUsernameStore = create<CounterStore>((set) => ({
    globalUsername: "",
    saveGlobalUsername: () => {
        set((state) => ({ globalUsername: state.globalUsername }));
    },
}));
