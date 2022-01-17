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
		exhibition: (_, { id }, { dataSources }) => {
			return dataSources.exhibitionAPI.getExhibition(id);
		},
		exhibitions: (_, __, { dataSources }) => {
			return dataSources.exhibitionAPI.getExhibitions();
		},
	},

	Artwork: {
		artist: ({ artistID }, __, { dataSources }) => {
			return dataSources.artistAPI.getArtist(artistID);
		},
	},

	Exhibition: {
		artists: ({ artistIDs }, __, { dataSources }) => {
			return dataSources.artistAPI.getArtistsByIDs(artistIDs);
		},
		artworks: ({ artworkIDs }, __, { dataSources }) => {
			return dataSources.artworkAPI.getArtworksByIDs(artworkIDs);
		},
	},
};
