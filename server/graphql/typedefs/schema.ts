import { gql } from 'apollo-server-core';

// Scalar types => String, ID, Int, Float, Boolean
export const typeDefs = gql`
	type Query {
		products(filter: ProductsFilterInput): [Product!]!
		product(id: ID!): Product
		categories: [Category!]!
		category(id: ID!): Category
		reviews: [Review!]!
		review(id: ID!): Review
	}

	type Product {
		id: ID!
		name: String!
		description: String!
		quantity: Int!
		image: String!
		price: Float!
		onSale: Boolean!
		categoryId: ID!
		category: Category
		reviews: [Review]
	}

	type Category {
		id: ID!
		name: String!
		products(filter: ProductsFilterInput): [Product]
	}

	type Review {
		id: ID!
		date: String!
		title: String!
		comment: String!
		rating: Int!
		productId: ID!
	}

	input ProductsFilterInput {
		onSale: Boolean
		avgRating: Int
	}
`;

// enum avgRating {
//     1
//     2
//     3
//     4
//     5
// }
