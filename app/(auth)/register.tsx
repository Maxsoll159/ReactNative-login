
import { MyIcon } from '@/presentation/components/ui/MyIcon'
import { Button, Input, Layout, Text } from '@ui-kitten/components'
import { router } from 'expo-router'
import { ScrollView, useWindowDimensions, View } from 'react-native'
export default function RegisterScreen() {

  const { height } = useWindowDimensions()
  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.30 }}>
          <Text category='h1'>Registro</Text>
          <Text> Por favor, crea una cuenta para continuar</Text>
        </Layout>

        {/**INPUTS */}
        <Layout style={{ marginTop: 20 }}>

          <Input
            placeholder='Nombres completo'
            keyboardType='email-address'
            autoCapitalize='none'
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name="person-outline" />}
          />

          <Input
            placeholder='Correo Electronico'
            keyboardType='email-address'
            autoCapitalize='none'
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name="email-outline" />}
          />

          <Input
            placeholder='Contraseña'
            autoCapitalize='none'
            secureTextEntry
            style={{ marginBottom: 10 }}
            accessoryLeft={<MyIcon name="lock-outline" />}
          />
        </Layout>


        {/**Space */}


        <Layout style={{ marginTop: 20 }} />

        <Layout>
          <Button
            accessoryLeft={<MyIcon name='arrow-forward-outline' white />}
            onPress={() => console.log("hiola")}>
            Crear cuenta
          </Button>
        </Layout>

        {/**Informacion para crear una cuenta */}

        <Layout style={{ marginTop: 50 }} />

        <Layout style={{ alignItems: "flex-end", flexDirection: "row", justifyContent: 'center' }} >
          <Text>¿Ya tienes cuenta?</Text>
          <Text status='primary' category='s1' onPress={() => router.back()}> Ingresar</Text>
        </Layout>


      </ScrollView>

    </Layout>
  )
}
