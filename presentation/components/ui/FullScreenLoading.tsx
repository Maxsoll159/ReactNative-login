import { Layout, Spinner } from "@ui-kitten/components"


export const FullScreenLoading = () => {
  return (
    <Layout style={{flex: 1, justifyContent: "center", alignContent: "center"}}>
        <Spinner size="giant"  />
    </Layout>
  )
}
