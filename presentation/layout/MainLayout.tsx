import { Divider, Layout, TopNavigation, TopNavigationAction, Icon } from '@ui-kitten/components';
import { router, useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MyIcon } from '../components/ui/MyIcon';
import { View } from 'react-native';

interface Props {
    title: string,
    subTitle?: string,
    rightAction?: () => void;
    rightaActionIcon?: string,

    children: React.ReactNode
}

export const MainLayout = ({ title, subTitle, rightAction, rightaActionIcon, children }: Props) => {

    const { top } = useSafeAreaInsets()
    const navigation = useNavigation()

    const renderBackAction = () => (
        <TopNavigationAction onPress={() => router.back()} />
    )

    const RenderRightAction = () => {
        if (rightAction === undefined || rightaActionIcon === undefined) return null
        return <TopNavigationAction onPress={() => router.back()} icon={<MyIcon name={rightaActionIcon} />} />
    }

    return (
        <Layout style={{ paddingTop: top }}>

            <TopNavigation title={title}
                subtitle={subTitle}
                alignment="center"
                accessoryLeft={navigation.canGoBack() ? renderBackAction : undefined}
                accessoryRight={() => <RenderRightAction />}
            />
            
            <Divider />

            <Layout style={{ height: "100%"}}>
                {children}
            </Layout>


        </Layout>
    )
}
