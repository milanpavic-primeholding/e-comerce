import { gql } from '@apollo/client';

export const GET_PRODUCTS_QUERY = gql`
	query Products($filter: ProductsFilterInput) {
		products(filter: $filter) {
			id
			name
			description
			image
		}
	}
`;

export const GET_PRODUCT_QUERY = gql`
	query Product($productId: ID!) {
		product(id: $productId) {
			id
			name
			description
			quantity
			price
			image
			onSale
			categoryId
		}
	}
`;
