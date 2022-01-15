const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

dotenv.config();

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
