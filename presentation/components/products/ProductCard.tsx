import { Card } from "@ui-kitten/components"
import { Image, Text, View } from "react-native"
import { FadeInImage } from "../ui/FadeInImage"

export const ProductCard = ({ product }: any) => {

    console.log("product", product)

    return (
       
            <Card style={{ flex: 1, backgroundColor: "#F9F9F9", margin: 3 }}>
                {
                    product.images.length === 0 ? <Image source={require("../../../assets/no-product-image.png")} style={{ width: "100%", height: 200 }} /> : (
                        <FadeInImage uri={product.images[0]} style={{ flex: 1, height: 200, width: "100%" }} />
                    )
                }

                <Text numberOfLines={2} style={{textAlign: "center"}}>{product.title}</Text>
            </Card>
    
    )
}
