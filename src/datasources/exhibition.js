const { MongoDataSource } = require('apollo-datasource-mongodb');

class Exhibition extends MongoDataSource {
	async getExhibition(artistID) {
		const exhibition = await this.findOneById(artistID);
		this.convertID(exhibition);
		return exhibition;
	}

	async getExhibitions(fields = {}) {
		const exhibitions = await this.findByFields(fields);
		exhibitions.map((exhibition) => this.convertID(exhibition));
		return exhibitions;
	}

	convertID(exhibition) {
		exhibition.id = exhibition._id;
		exhibition.artistIDs = exhibition.artist_ids;
		exhibition.artworkIDs = exhibition.artwork_ids;
	}
}

module.exports = Exhibition;
