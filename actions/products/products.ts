
import { tesloApi } from "../TesloApi"
import { ResponseGetProducts } from "./products.interface"


const tesloProduct = (product: ResponseGetProducts) =>{
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        slug: product.slug,
        stock: product.stock,
        sizes: product.sizes,
        gender: product.gender,
        tags: product.tags,
        images: product.images.map(image=>(`http://192.168.18.5:3000/api/files/product/${image}`))
    }
}


export const getProdyctsByPage = async (page: number, limit: number = 20) => {
    try {
        const { data } = await tesloApi.get<ResponseGetProducts[]>(`/products?offset=${page * 10}&limit=${limit}`)

        const products = data.map(product => tesloProduct(product))

        return products
        
    } catch (error) {
        return null
    }
}