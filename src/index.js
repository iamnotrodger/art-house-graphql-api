const dotenv = require('dotenv');
const { ApolloServer } = require('apollo-server');
const { MongoClient } = require('mongodb');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const Artist = require('./datasources/artist');
const Artwork = require('./datasources/Artwork');

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);
client.connect();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		artistAPI: new Artist(client.db().collection('artists')),
		artworkAPI: new Artwork(client.db().collection('artworks')),
	}),
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});
