import { tesloApi } from "../TesloApi"
import { ResponseAuth } from "./auth.interface"

const returnUserToken = (data: ResponseAuth) => {

    const user = {
        id: data.id,
        email: data.email,
        fullName: data.fullName,
        isActive: data.isActive,
        roles: data.roles
    }

    return {
        user: user,
        token: data.token
    }
}

export const authLogin = async (email: string, password: string) => {
    console.log("Entre", email, password)


    try {
        const { data } = await tesloApi.post<ResponseAuth>('/auth/login', {
            email,
            password
        })
        return returnUserToken(data)

    } catch (error) {
        console.log("erorr", error)
        return null
    }
}

export const authCheckStatus = async () => {
    try {
        const { data } = await tesloApi.get<ResponseAuth>('/auth/check-status')
        return returnUserToken(data)

    } catch (error) {
        console.log("erorr", error)
        return null
    }
}