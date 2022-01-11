import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productsActions";
import { getCategories } from "../../redux/actions/categoriesActions";
import { RootState } from "../../redux/store/store";
import { Card, CardContent, Checkbox, FormControl, Grid, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
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
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedRating, setSelectedRating] = useState<number | undefined>(undefined);
    const [onSale, setOnSale] = useState(false);
    const { products } = useSelector((state: RootState) => state.productsReducer);
    const { categories } = useSelector((state: RootState) => state.categories);

    const productsFilter = {
        categoryIds: selectedCategories,
        onSale,
        avgRating: selectedRating
    }

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProducts(productsFilter));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch, selectedCategories, selectedRating, onSale]);

    const handleToggle = (categoryId: string) => () => {
        const currentIndex = selectedCategories.indexOf(categoryId);
        const newChecked = [...selectedCategories];

        if (currentIndex === -1) {
            newChecked.push(categoryId);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setSelectedCategories(newChecked);
        dispatch(getProducts(productsFilter));
    };

    const handleRating = (event: SelectChangeEvent) => {
        setSelectedRating(+event.target.value);
        dispatch(getProducts(productsFilter));
    };

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={3}>
                <Typography color="secondary" variant="h4">Filters</Typography>
                <Typography mt={2}>Categories:</Typography>
                <List
                    dense
                    sx={{ width: "100%", maxWidth: 360 }}
                >
                    {categories.map(category => {
                        return (
                            <ListItem
                                key={`category-item-${category.id}`}
                                onClick={handleToggle(category.id)}
                                secondaryAction={
                                    <Checkbox
                                        edge="end"
                                        checked={selectedCategories.indexOf(category.id) !== -1}
                                    />
                                }
                                disablePadding
                            >
                                <ListItemButton>
                                    <ListItemText primary={category.name} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
                <Typography mt={2}>Sale:</Typography>
                <List
                    dense
                    sx={{ width: "100%", maxWidth: 360 }}
                >
                    <ListItem
                        onClick={() => setOnSale(!onSale)}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                checked={onSale}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText primary={'On Sale'} />
                        </ListItemButton>
                    </ListItem>
                </List>
                <Typography mt={2} mb={2}>Average rating:</Typography>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Rating</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={String(selectedRating)}
                        label="Rating"
                        onChange={handleRating}
                    >
                        <MenuItem value={undefined}>
                            <em>None</em>
                        </MenuItem>
                        {[1, 2, 3, 4, 5].map(val => {
                            return (
                                <MenuItem key={`rating-item-${val}`} value={val}>{val}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Typography variant="h4" color="secondary">Products</Typography>
                {products.length ? (
                    <Grid container spacing={4}>
                        {products.map((product, i) => (
                            <Grid item key={`prod-${i}`} xs={12} sm={6} md={4}>
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
                ) : (
                    <>
                        <Typography>No products found</Typography>
                    </>)}
            </Grid>
        </Grid>
    )
}

export default ProductsPage;