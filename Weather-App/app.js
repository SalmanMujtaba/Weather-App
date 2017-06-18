const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const temp = require('./tempFetch.js');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather',
    string: true
  }

})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage,result) =>{
  if(errorMessage)
  {
    console.log(errorMessage);
  }
  else {
    console.log('Address: '+result.address);

    temp.fetchTemperature(result.Latitude,result.Longitude, (errorMessage,weatherResults) =>{
      if(errorMessage)
      {
        console.log(errorMessage);
      }
      else {
        console.log('The current temperature is: '+weatherResults.temperature+'. It feels like: '+weatherResults.apparent+'.');
      }
    });
  }
});
