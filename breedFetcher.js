const request = require("request");
let breed = process.argv[2];
let api = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`

request(api, (error, response, body) => {
  if (error) throw error;
  console.log('no data found');
  console.log("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
  const data = JSON.parse(body);
  console.log(data);
  console.log(data[0].description);
  console.log(typeof data);
  })


