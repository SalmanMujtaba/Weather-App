const request = require('request');

fetchTemperature = (latitude,longitude, callback) =>{

  request({
  url: 'https://api.darksky.net/forecast/07bebebfe6abf20c2c4bcf82c08bd431/'+latitude+','+longitude,
  json: true
  }, (error,response,body) =>  {

  if(error || response.statusCode ===400){
    callback('there was some problem');
  }
  else if(!error && response.statusCode ===200)
   {

     callback(undefined, {
       temperature: body.currently.temperature,
       apparent: body.currently.apparentTemperature
     });
     
  }

 });
};
module.exports.fetchTemperature = fetchTemperature;
