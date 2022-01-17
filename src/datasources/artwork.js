const { MongoDataSource } = require('apollo-datasource-mongodb');

class Artwork extends MongoDataSource {
	async getArtwork(artistID) {
		const artwork = await this.findOneById(artistID);
		this.convertID(artwork);
		return artwork;
	}

	async getArtworks(fields = {}) {
		const artworks = await this.findByFields(fields);
		artworks.map((artwork) => this.convertID(artwork));
		return artworks;
	}

	convertID(artwork) {
		artwork.id = artwork._id;
		artwork.artistID = artwork.artist_id;

		delete artwork._id;
		delete artwork.artist_id;
	}
}

module.exports = Artwork;
