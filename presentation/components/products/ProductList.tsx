import { ResponseGetProducts } from "@/actions/products/products.interface"
import { Layout, List, Text } from "@ui-kitten/components"
import { ProductCard } from "./ProductCard"

interface Props {
    products: any
}

export const ProductList = ({ products }: Props) => {
    return (
        <List
            data={products}
            numColumns={2}
            keyExtractor={item => item.id}
            renderItem={({item}) =>(
                <ProductCard product={item} />
            )}
        />
    )
}
