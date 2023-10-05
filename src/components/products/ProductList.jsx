import { CircularProgress, Grid, Typography } from "@mui/material"
import useAsyncMock from "../../hooks/useAsyncMock"
import products from "../../mocks/products.json"
import ProductDetail from "./ProductDetail"

const ProductList = () => {
    const { data, loading } = useAsyncMock(products)

    if (loading) return <CircularProgress />

    return (
        <div className="container">
            <Typography variant="h2" style={{ color: "#ff6347" }}>
                Productos
            </Typography>
            <Grid container spacing={3}>
                {data.map((product) => (
                    <ProductDetail key={product.id} product={product} />
                ))}
            </Grid>
        </div>
    );
}

export default ProductList