import AsyncStorage from "@react-native-async-storage/async-storage"

export const getItem = async (key: string): Promise<string | null> => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch (error) {
        return null
    }
}

export const setItem = async (key: string, value: any): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (error) {
        throw new Error("Error setting item")
    }
}

export const removeItem = async(key: string) =>{
    try {
        await AsyncStorage.removeItem(key)
    } catch (error) {
        throw new Error("Error remove item")
    }
}