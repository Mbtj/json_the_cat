const request = require('request');
const args = process.argv.slice(2);
const query = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, function(error, response, body) {
  if (error) {
    console.error('error: ',error);
  } else {
    const data = JSON.parse(body);
    if (data) {
      console.log(data[0].description);
    } else {
      console.log("Breed not found");
    }
  }
});