const request = require("request");

const fetchBreedDescription = function(breed, callback) {
  let api = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(api, (error, response, body) => {
    if (error) {
      callback(error, null); // if there is an error callback error
      return;
    }
    const data = JSON.parse(body); // if no error parse data (change to obj) & return null for
    if (data[0]) {
      callback(null, data[0].description);
    
    } else {
      callback(null, 'no breed exists');
    }
  })
}

module.exports = { fetchBreedDescription };

// fetchBreedDescription("Russian", (err, data) => {
//   if (err) {
//     console.log("error function");
//   } else {
//     console.log("got info", data);
//   }
// });
