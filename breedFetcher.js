const request = require('request');

const cmdArgs = process.argv;
const breed = cmdArgs[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    //console.log(data);
    if (data[0] === undefined) {
      console.log(`Breed: ${breed} not found!`);
    } else {
      //console.log(data);
      //console.log(typeof data);
      console.log(data[0].description);
    }
  }
});