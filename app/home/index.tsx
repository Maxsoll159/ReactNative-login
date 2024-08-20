import { getProdyctsByPage } from "@/actions/products/products";
import { ProductList } from "@/presentation/components/products/ProductList";
import { FullScreenLoading } from "@/presentation/components/ui/FullScreenLoading";
import { MainLayout } from "@/presentation/layout/MainLayout";
import { useAuthStore } from "@/presentation/store/auth/useAuthStore";

import { useQuery } from "@tanstack/react-query";
import { Button, Layout, Spinner, Text } from "@ui-kitten/components";

export default function IndexScreen() {


    const { logout } = useAuthStore()

    const { isLoading, data: products = [] } = useQuery({
        queryKey: ["products", "infinite"],
        staleTime: 1000 * 60 * 60,
        queryFn: () => getProdyctsByPage(0)
    })

    //console.log("products", products)

    return (
        <MainLayout title="TesloShop - Products" subTitle="Aplicacion administrativa">
            <Layout style={{ flex: 1 }}>

                {
                    isLoading ? (<FullScreenLoading />) : <ProductList products={products} />
                }

                <Button onPress={logout}>
                    Cerrar Sesion
                </Button>
            </Layout>

        </MainLayout>
    )
}