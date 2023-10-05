import React from "react";
import { CircularProgress, Typography, Card, CardContent } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from "../../mocks/categorias.json";
import { Link } from "react-router-dom";

const Categories = () => {
    const { data, loading } = useAsyncMock(categories); // Debes pasar 'categories' en lugar de 'Categories' como argumento

    if (loading) return <CircularProgress />;

    return (
        <div className="container">
            <Typography variant="h2" style={{ color: "rgb(207 9 9" }}>
                Nuestras Categorias
            </Typography>
            {data.map((category) => (
                <Card key={category.id}>
                    <CardContent component={Link} to={`/category/${category.category}`}>
                        <Typography>{category.category}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Categories;
