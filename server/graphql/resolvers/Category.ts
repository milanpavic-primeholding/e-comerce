import { products } from '../../db/db';

export const Category = {
	products: ({ id }: { id: string }, { filter }: any) => {
		const categoryProducts = products.filter(product => product.categoryId === id);
		let filteredProducts = categoryProducts;

		if (filter) {
			if (filter.onSale !== undefined) {
				filteredProducts = filteredProducts.filter(product => product.onSale === filter.onSale);
			}
		}

		return filteredProducts;
	},
};
