const fs = require('fs');
const {parse} = require('csv-parse');

let habittablePlanets = [];

function isHabitablePlanet(planet){
  return planet['koi_disposition'] == 'CONFIRMED' &&
  planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 &&
  planet['koi_prad'] < 1.6
  
  // Koi_insol  --> is the ammount fo solar energy
  // koi_prad -->  Planetary Radius [Earth radii]
}
 // fs streaming return a raw buffer of bytes
fs.createReadStream('./data/kepler_data.csv').pipe(parse({
  comment: '#',
  columns: true
}))
.on('data', (data) =>{
  if(isHabitablePlanet(data))
    habittablePlanets.push(data)
})
.on('error', (err)=>{
  console.log(err);
})
.on('end', ()=>{
  console.log(`${habittablePlanets.length} Habitable planets was founded`);
  console.log(habittablePlanets.map(planet =>{
    return planet['kepler_name']
  }))

});
