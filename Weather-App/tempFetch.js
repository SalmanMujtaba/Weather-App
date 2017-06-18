const request = require('request');

fetchTemperature = (latitude,longitude, callsalman) =>{
//  console.log('temp fetch js');
request({
  url: 'https://api.darksky.net/forecast/07bebebfe6abf20c2c4bcf82c08bd431/'+latitude+','+longitude,
  json: true
}, (error,response,body) =>  {
  //console.log(response.statusCode);
  if(error || response.statusCode ===400){
  //  console.log('error k andar');
    callsalman('there was some problem');
  //  console.log('there was some problem');
  }
  else if(!error && response.statusCode ===200)
   {
  //   console.log('agaye');
     callsalman(undefined, {
       temperature: body.currently.temperature,
       apparent: body.currently.apparentTemperature
     });//'Temp:'+ body.currently.temperature);
  //   console.log(response);

  }

  //console.log('Address:'+ body.results[0].formatted_address);
  //console.log('Latitude:'+ body.results[0].geometry.location.lat);
  //console.log('Longitude:'+ body.results[0].geometry.location.lng);
});
};
//geocode property avilable
module.exports.fetchTemperature = fetchTemperature;
