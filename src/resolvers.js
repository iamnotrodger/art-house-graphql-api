module.exports = {
	Query: {
		artist: (_, { id }, { dataSources }) => {
			return dataSources.artistAPI.getArtist(id);
		},
		artists: (_, __, { dataSources }) => {
			return dataSources.artistAPI.getArtists();
		},
	},
};
