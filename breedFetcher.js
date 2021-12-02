const request = require('request');
const fetchBreedDescription = function(query, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`,function(error, response, body) {

    const data = JSON.parse(body);
      
    const description = data[0] ? data[0].description : null;
      
    callback(error, description);
  });

};

module.exports = { fetchBreedDescription };
