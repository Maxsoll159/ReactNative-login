import { Stack } from "expo-router";
import { useColorScheme, View } from "react-native";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ThemeProvider } from "@react-navigation/native";
import { AuthProvider } from "../provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'loading/index',
};

const queryClient = new QueryClient()


export default function Layout() {
    const colorSchem = useColorScheme()
    const theme = colorSchem === "dark" ? eva.dark : eva.light

    const background = (colorSchem === "dark") ? theme["color-basic-800"] : theme["color-basic-100"]






    return (
        <QueryClientProvider client={queryClient}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={theme}>
                <AuthProvider>
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen options={{ animation: "fade" }} name="(auth)/login" />
                        <Stack.Screen options={{ animation: "fade" }} name="(auth)/register" />
                        <Stack.Screen options={{ animation: "fade" }} name="loading/index" />
                    </Stack>
                </AuthProvider>

            </ApplicationProvider>

        </QueryClientProvider>
    );
}