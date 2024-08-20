import { getProductId } from "@/actions/products/products";
import { Size } from "@/actions/products/products.interface";
import { FadeInImage } from "@/presentation/components/ui/FadeInImage";
import { MyIcon } from "@/presentation/components/ui/MyIcon";
import { MainLayout } from "@/presentation/layout/MainLayout";
import { useQuery } from "@tanstack/react-query";
import { Button, ButtonGroup, Input, Layout, useTheme } from "@ui-kitten/components";
import { useLocalSearchParams } from "expo-router";
import { FlatList, ScrollView, Text } from "react-native";


const sizes: Size[] = [Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl]
const genders = ["kid", "Men", "Women", "Unisex"]

export default function ProductIdScreen() {


    const { id } = useLocalSearchParams();

    const theme = useTheme()


    const { data: product } = useQuery({
        queryKey: ["product", id],
        queryFn: () => getProductId(id)
    })

    if (!product) {
        return <MainLayout title="Cargando....." />
    }
    console.log("id", id)

    return (
        <MainLayout title={product.title} subTitle={`Precio ${product.price}`}>
            <ScrollView style={{ flex: 1 }}>
                <Layout>
                    <FlatList
                        data={product.images}
                        keyExtractor={(item) => item}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <FadeInImage uri={item} style={{ width: 300, height: 300, marginHorizontal: 7 }} />
                        )}
                    />
                </Layout>


                <Layout style={{ marginHorizontal: 10 }}>
                    <Input
                        label="Titulo"
                        value={product.title}
                        style={{ marginVertical: 5 }}
                    />


                    <Input
                        label="Slug"
                        value={product.slug}
                        style={{ marginVertical: 5 }}
                    />


                    <Input
                        label="Description"
                        value={product.description}
                        multiline
                        numberOfLines={5}
                        style={{ marginVertical: 5 }}
                    />

                </Layout>


                <Layout style={{ marginHorizontal: 15, flexDirection: "row", gap: 10 }}>
                    <Input
                        label="Precio"
                        value={product.price.toString()}
                        style={{ flex: 1 }}
                    />
                    <Input
                        label="Investario"
                        value={product.stock.toString()}
                        style={{ flex: 1 }}
                    />
                </Layout>

                {/**Selectrores */}

                <Layout>
                    <ButtonGroup size="small" appearance="outline" style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }}>
                        {sizes.map((size) => (
                            <Button style={{flex: 1, backgroundColor: true ? theme["color-primary-200"] : undefined}} key={size}>{size}</Button>
                        ))}
                    </ButtonGroup>


                    <ButtonGroup size="small" appearance="outline" style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }}>
                        {genders.map((gender) => (
                            <Button style={{flex: 1, backgroundColor: true ? theme["color-primary-200"] : undefined}} key={gender}>{gender}</Button>
                        ))}
                    </ButtonGroup>
                </Layout>


                {/**BOTTON GRABACION */}

                <Button accessoryLeft={<MyIcon name="save-outline" />} style={{marginVertical: 15, marginHorizontal: 15}}>
                    Guardar
                </Button>

                <Layout style={{ height: 150 }} />

            </ScrollView>
        </MainLayout>
    )
}


