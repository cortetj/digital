module.exports = function(){
	return {
		adapter: 'disk',
		
  		identity: 'Question',
		attributes: {
		    title: 'string',
		    answers: {
		    	collection: 'Answer'
		   	}
		}
	};
};