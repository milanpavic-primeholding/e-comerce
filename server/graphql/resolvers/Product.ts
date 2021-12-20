import { categories, reviews } from '../../db/db';

export const Product = {
	category: ({ categoryId }: { categoryId: string }) => {
		return categories.find(category => category.id === categoryId);
	},
	reviews: ({ id }: { id: string }) => {
		return reviews.filter(review => review.productId === id);
	},
};
