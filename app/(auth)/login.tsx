
import { Layout, Text } from '@ui-kitten/components'
import { ScrollView, View } from 'react-native'
export default function LoginScreen() {
  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView>
        <Layout>
          <Text>
            Ingresar
          </Text>
          <Text>
            Por favor, ingrese para continuar
          </Text>
        </Layout>

      </ScrollView>

    </Layout>
  )
}
