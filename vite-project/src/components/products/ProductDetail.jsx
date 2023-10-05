import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useState } from "react"; // Agregando la importación de useState

const ProductDetail = ({ product, children }) => {
    const { id, image, title, price, itHadDues, isAnOffer } = product;
    const [isSelected, setIsSelected] = useState(false); // Agregando el estado isSelected

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className="card-products-container">
                <img src={image} />
                <CardContent className="card-products-content">
                    <Typography>{title}</Typography>
                    <Typography>{price.toFixed(2)}</Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default ProductDetail; // Corrigiendo el nombre del componente exportado (era ProductDetaill)
