const { MongoDataSource } = require('apollo-datasource-mongodb');

class Artist extends MongoDataSource {
	async getArtist(artistID) {
		const artist = await this.findOneById(artistID);
		artist.id = artist._id;
		return artist;
	}

	async getArtists(fields = {}) {
		const artists = await this.findByFields(fields);
		artists.map((artist) => (artist.id = artist._id));
		return artists;
	}
}

module.exports = Artist;
