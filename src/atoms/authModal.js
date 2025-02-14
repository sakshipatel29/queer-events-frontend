import { atom } from 'recoil';

export const authModalState = atom({
    key: "authModalState",
    default: {
        open: false,
        view: "login",
    }
})