const request = require('request');

geocodeAddress = (address, callback) =>{
  var add = encodeURIComponent(address);
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+add,
  json: true
}, (error,response,body) =>  {
  if(error){
    callback('there was some problem');
  }
  else if(body.status ==='ZERO_RESULTS'){
    callback('no result foound');

  }
  else if(body.status === 'OK'){
    callback(undefined,{
    address:body.results[0].formatted_address,
    Latitude: body.results[0].geometry.location.lat,
    Longitude: body.results[0].geometry.location.lng
  });

  }
 });
};

module.exports.geocodeAddress = geocodeAddress;
