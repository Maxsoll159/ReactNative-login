import { authLogin } from "@/actions/auth/auth";
import { getItem, setItem } from "@/config/adapters/storage-adapter";
import { create } from "zustand";
import { authCheckStatus } from '../../../actions/auth/auth';

export interface AuthState {
    token?: string;
    user?: any;
    status: string,

    login: (email: string, password: string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logout: () => Promise<void>
}


export const useAuthStore = create<AuthState>()((set, get) => ({
    status: "checking",
    token: undefined,
    user: undefined,

    login: async (email: string, password: string) => {
        const resp = await authLogin(email, password);
        console.log("res", resp)
        if (!resp) {
            set({ status: "unauthenticated", token: undefined, user: undefined })
            return false
        }

        //Guardar el token en el storage
        await setItem("token", resp.token)
        const token = await getItem("token")
        console.log("token", token)

        set({
            status: "authenticated", token: resp.token, user: resp.user
        })

        return true
    },
    checkStatus: async () => {
        try {
            const resp = await authCheckStatus();
            if (!resp) {
                set({ status: "unauthenticated", token: undefined, user: undefined })
            }
            await setItem("token", resp?.token)
    
            set({
                status: "authenticated", token: resp?.token, user: resp?.user
            })
    
        } catch (error) {
            console.log("error")
        }

    },
    logout: async () => {
        await setItem("token", "")
        set({ status: "unauthenticated", token: undefined, user: undefined })
    }

}))