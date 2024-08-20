import { MyIcon } from '@/presentation/components/ui/MyIcon'
import { useAuthStore } from '@/presentation/store/auth/useAuthStore'
import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { router } from 'expo-router'
import { useState } from 'react'
import { Alert, ScrollView, useWindowDimensions, View } from 'react-native'

export default function LoginScreen() {
    const { login } = useAuthStore()
    const [isPosting, setIsPosting] = useState(false)

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const { height } = useWindowDimensions()

    const onLogin = async () => {
        setIsPosting(true)
        const response = await login(form.email, form.password)

        setIsPosting(false)
        if (response) return

        Alert.alert("Error", "Usuario o contraseña incorrecto")
        //Alert.alert("Error", "Usuario o contraseña incorrecto")
    }

    return (
        <Layout style={{ flex: 1 }}>
            <ScrollView style={{ marginHorizontal: 40 }}>
                <Layout style={{ paddingTop: height * 0.35 }}>
                    <Text category='h1'>Ingresar</Text>
                    <Text> Por favor, ingrese para continuar</Text>
                </Layout>

                {/**INPUTS */}
                <Layout style={{ marginTop: 20 }}>
                    <Input
                        placeholder='Correo Electronico'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={form.email}
                        onChangeText={(email) => setForm({ ...form, email: email })}
                        style={{ marginBottom: 10 }}
                        accessoryLeft={<MyIcon name="email-outline" />}
                    />

                    <Input
                        placeholder='Contraseña'
                        autoCapitalize='none'
                        secureTextEntry
                        value={form.password}
                        onChangeText={(password) => setForm({ ...form, password: password })}
                        style={{ marginBottom: 10 }}
                        accessoryLeft={<MyIcon name="lock-outline" />}
                    />
                </Layout>


                {/**Space */}


                <Layout style={{ marginTop: 20 }} />

                <Layout>
                    <Button
                        disabled={isPosting}
                        accessoryLeft={<MyIcon name='arrow-forward-outline' white />}
                        onPress={() => onLogin()}>
                        Ingresar
                    </Button>
                </Layout>

                {/**Informacion para crear una cuenta */}

                <Layout style={{ marginTop: 50 }} />

                <Layout style={{ alignItems: "flex-end", flexDirection: "row", justifyContent: 'center' }} >
                    <Text>¿No tienes cuenta?</Text>
                    <Text status='primary' category='s1' onPress={() => router.push("/(auth)/register")}> crea una</Text>
                </Layout>


            </ScrollView>

        </Layout>
    )
}
