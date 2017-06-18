const request = require('request');

geocodeAddress = (address, callsalman) =>{
  var add = encodeURIComponent(address);
request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+add,
  json: true
}, (error,response,body) =>  {
  if(error){
    callsalman('there was some problem');
  //  console.log('there was some problem');
  }
  else if(body.status ==='ZERO_RESULTS'){
    callsalman('no result foound');

    //console.log('no result foound');
  }
  else if(body.status === 'OK'){
    callsalman(undefined,{
    address:body.results[0].formatted_address,
    Latitude: body.results[0].geometry.location.lat,
    Longitude: body.results[0].geometry.location.lng
  });

  //console.log('Address:'+ body.results[0].formatted_address);
  //console.log('Latitude:'+ body.results[0].geometry.location.lat);
  //console.log('Longitude:'+ body.results[0].geometry.location.lng);
}
});
};
//geocode property avilable
module.exports.geocodeAddress = geocodeAddress;
