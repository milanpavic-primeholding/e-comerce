import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../../redux/actions/productsActions';
import { RootState } from '../../redux/store/store';

const ProductPage: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { product } = useSelector((state: RootState) => state.productsReducer);
	let { id } = useParams();

	useEffect(() => {
		if (id) {
			dispatch(getProduct(id));
		}
	}, [dispatch, id]);

	return (
		<Grid container spacing={4}>
			<Grid item xs={12}>
				{product ? (
					<Typography variant='h2'>{product.name}</Typography>
				) : (
					<>
						<Typography>Product not found</Typography>
					</>)}
				<button onClick={() => navigate('/')}>Products</button>
			</Grid>
		</Grid>
	);
};

export default ProductPage;
