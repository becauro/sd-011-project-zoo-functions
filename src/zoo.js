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
  return data.species.filter((especie) => ids.includes(especie.id));
}

function getAnimalsOlderThan(animal, age) {
  const findName = data.species.find((bichos) => bichos.name === animal);
  return findName.residents.every((idade) => idade.age > age);
}

function getEmployeeByName(employeeName) {
  const result = data.employees.reduce((acc, employ) => {
    return (employeeName === employ.lastName || employeeName === employ.firstName ? acc = employ : acc)
  }, {});
  return result;
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {
    firstName: personalInfo.firstName,
    id: personalInfo.id,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui 
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // return data.employees.map())
}

function countAnimals(speciess) {
  // const findSpecies = data.species.find((animal) => animal.name === speciess);
  // return findSpecies.residents.reduce((acc, count) => );
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
