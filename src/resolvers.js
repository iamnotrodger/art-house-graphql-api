module.exports = {
	Query: {
		artist: (_, { id }, { dataSources }) => {
			return dataSources.artistAPI.getArtist(id);
		},
		artists: (_, __, { dataSources }) => {
			return dataSources.artistAPI.getArtists();
		},
		artwork: (_, { id }, { dataSources }) => {
			return dataSources.artworkAPI.getArtwork(id);
		},
		artworks: (_, __, { dataSources }) => {
			return dataSources.artworkAPI.getArtworks();
		},
	},

	Artwork: {
		artist: ({ artistID }, __, { dataSources }) => {
			return dataSources.artistAPI.getArtist(artistID);
		},
	},
};
