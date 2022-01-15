const { gql } = require('apollo-server');

const typeDefs = gql`
	type Artist {
		id: ID!
		name: String!
		images: [Image!]!
	}

	type Artwork {
		id: ID!
		title: String
		description: String
		images: [Image!]!
		artistID: ID!
		artist: Artist
	}

	type Exhibition {
		id: ID!
		name: String
		images: [Image!]!
		artistIDs: [ID!]!
		artworkIDs: [ID!]!
		artists: [Artwork!]!
		artworks: [Artwork!]!
	}

	type Image {
		height: Float
		width: Float
		url: String!
	}

	type Query {
		artwork(id: ID!): Artwork
		artworks: [Artwork!]!
		artist(id: ID!): Artist
		artists: [Artist!]!
		exhibition(id: ID!): Exhibition
		exhibitions: [Exhibition!]!
	}
`;

module.exports = typeDefs;
