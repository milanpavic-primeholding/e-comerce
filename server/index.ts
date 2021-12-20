import { ApolloServer } from 'apollo-server';
import { Category } from './graphql/resolvers/Category';
import { Product } from './graphql/resolvers/Product';
import { Query } from './graphql/resolvers/Query';
import { typeDefs } from './graphql/typedefs/schema';

const resolvers = {
	Query,
	Category,
	Product,
};

const context = {};

const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen().then(({ url }: { url: string }) => {
	console.log(`Server running at ${url}`);
});
