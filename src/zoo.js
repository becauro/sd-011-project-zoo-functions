/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { species } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  let speciesById = [];
  // const idList = ids;
  for (let index = 0; index < ids.length; index += 1) {
    const speciesFilter = (species.filter((specie) => specie.id === ids[index]));
    speciesById = [...speciesById, ...speciesFilter];
  }
  return speciesById;
}

function getAnimalsOlderThan(animal, age) {
  const specieByName = (species.filter((specie) => (specie.name === animal)));
  console.log(specieByName);
  const { residents } = specieByName[0];
  const everyAnimal = (checkAnimalsAge) => (Object.values(checkAnimalsAge).every((resident) => resident.age > age));
  return everyAnimal(residents);
}
getAnimalsOlderThan('penguins', 8);
function getEmployeeByName(employeeName) {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(speciess) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
