import { useAuthStore } from "@/presentation/store/auth/useAuthStore"
import { useNavigation } from "expo-router"
import { PropsWithChildren, useEffect } from "react"
import { CommonActions } from '@react-navigation/native'
export const AuthProvider = ({ children }: PropsWithChildren) => {

    const navigation = useNavigation()

    const { checkStatus, status } = useAuthStore()

    useEffect(() => {
        checkStatus()
    }, [])


    useEffect(() => {
        if (status !== "checking") {
            if (status === "authenticated") {
                navigation.dispatch(CommonActions.reset({
                    routes: [{ key: "home", name: "home/index" }]
                }))
            } else {
                navigation.dispatch(CommonActions.reset({
                    routes: [{ key: "(auth)", name: "(auth)/login" }]
                }))
            }
        }
    }, [status])

    return (
        <>
            {children}
        </>
    )
}
