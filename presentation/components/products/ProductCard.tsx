import { Card } from "@ui-kitten/components"
import { Image, Text, View } from "react-native"
import { FadeInImage } from "../ui/FadeInImage"
import { Link, router } from "expo-router"

export const ProductCard = ({ product }: any) => {



    return (

        <Link href={{
            pathname: "/product/[id]",
            params: { id: product.id },
        }} asChild>

            <Card style={{ flex: 1, backgroundColor: "#F9F9F9", margin: 3 }}>
                {
                    product.images.length === 0 ? <Image source={require("../../../assets/no-product-image.png")} style={{ width: "100%", height: 200 }} /> : (
                        <FadeInImage uri={product.images[0]} style={{ flex: 1, height: 200, width: "100%" }} />
                    )
                }

                <Text numberOfLines={2} style={{ textAlign: "center" }}>{product.title}</Text>
            </Card>
        </Link>

    )
}
