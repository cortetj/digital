module.exports = function() {
	return {
		adapter: 'disk',
		
  		identity: 'Device',
	    attributes: {
	    	uniqueId: {
	      		type: 'string',
	      		required: true,
	      		index: true
	    	}
	  	}
	};
};
