const { MongoDataSource } = require('apollo-datasource-mongodb');

class Artist extends MongoDataSource {
	async getArtist(artistID) {
		const artist = await this.findOneById(artistID);
		this.convertID(artist);
		return artist;
	}

	async getArtists(fields = {}) {
		const artists = await this.findByFields(fields);
		artists.map((artist) => this.convertID(artist));
		return artists;
	}

	async getArtistsByIDs(ids) {
		const artists = await this.findManyByIds(ids);
		artists.map((artist) => this.convertID(artist));
		return artists;
	}

	convertID(artwork) {
		artwork.id = artwork._id;
	}
}

module.exports = Artist;
