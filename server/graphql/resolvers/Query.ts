import { categories, products, reviews } from '../../db/db';

export const Query = {
	products: (_: any, { filter }: any) => {
		let filteredProducts = products;

		if (filter) {
			const { onSale, avgRating } = filter;
			if (onSale !== undefined) {
				filteredProducts = filteredProducts.filter(product => product.onSale === filter.onSale);
			}

			if ([1, 2, 3, 4, 5].includes(avgRating)) {
				filteredProducts = filteredProducts.filter(product => {
					let sumRating = 0;
					let numberOfReviews = 0;
					reviews.forEach(review => {
						if (review.productId === product.id) {
							sumRating += review.rating;
							numberOfReviews++;
						}
					});
					const averageProductRating = sumRating / numberOfReviews;
					return averageProductRating >= avgRating;
				});
			}
		}

		return filteredProducts;
	},
	product: (_: any, { id }: { id: string }) => products.find(product => product.id === id),
	categories: () => categories,
	category: (_: any, { id }: { id: string }) => categories.find(category => category.id === id),
	reviews: () => reviews,
	review: (_: any, { id }: { id: string }) => reviews.find(review => review.id === id),
};
