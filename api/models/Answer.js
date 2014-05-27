module.exports = function(){
	return {
		adapter: 'disk',

  		identity: 'Answer',
		attributes: {
			title: {
				type: 'string'
			},
			vote: {
				type: 'integer'
			},
			question: {
				model: 'Question'
			},

			toJSON: function(){
	      		var obj = this.toObject();
				delete obj.updatedAt;
				delete obj.createdAt;
				return obj;
			}
		}
	};
};