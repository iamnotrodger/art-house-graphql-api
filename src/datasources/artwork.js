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

	async getArtworksByIDs(ids) {
		const artworks = await this.findManyByIds(ids);
		artworks.map((artwork) => this.convertID(artwork));
		return artworks;
	}

	convertID(artwork) {
		artwork.id = artwork._id;
		artwork.artistID = artwork.artist_id;
	}
}

module.exports = Artwork;
