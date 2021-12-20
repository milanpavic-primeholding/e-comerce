import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import { RootState } from "../../redux/store/store";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from 'react-router-dom';

// const StyledFab = styled(Fab)(({ theme }) => `
//   &:hover {
//     background-color: ${theme.palette.green};
//   }
//   ${theme.breakpoints.up('sm')} {
//     &:hover {
//         background-color: red;
//     }
//   '& .MuiDrawer-paper'
//   } 
// `);

const StyledCardImg = styled('img')`
  width:100%;
  object-fit:cover;
  height:250px;
`;

const ProductsPage: React.FC = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.products);
    const { categories } = useSelector((state: RootState) => state.categories);

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={3}>
                <Typography color="secondary" variant="h4">Filters</Typography>
                {categories.map(category => (
                    <div>{category.name}</div>
                ))}
            </Grid>
            <Grid item xs={12} sm={9}>
                <Typography variant="h4" color="secondary">Products</Typography>
                <Grid container spacing={4}>
                    {products.map((product, i) => (
                        <Grid item key={i} xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%' }}>
                                <StyledCardImg
                                    src={product.image}
                                    alt="random"
                                />
                                <CardContent>
                                    <Typography component={Link} to={`/product/${product.id}`} color="secondary" variant="h5" sx={{ textDecoration: 'none' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography>
                                        {product.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductsPage;