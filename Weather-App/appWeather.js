const yargs = require('yargs');
//const geocode = require('./geocode/geocode');
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

console.log(argv.a);

temp.fetchTemperature(39.68016739999999,-86.1242881, (errorMessage,weatherResults) =>{
  if(errorMessage)
  {
    console.log(errorMessage);
  }
  else {
    console.log(JSON.stringify(weatherResults,undefined,2))
  }
});
