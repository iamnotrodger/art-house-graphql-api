const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server');
const { MongoClient } = require('mongodb');
const typeDefs = require('./schema');

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
client.connect();

const server = new ApolloServer({ typeDefs });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
