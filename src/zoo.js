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

const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return data.species.filter((specie) => ids.includes(specie.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const getAnimalByName = (specie) => specie.name === animal;
  const [testedAnimal] = data.species.filter(getAnimalByName);
  const checkAge = (resident) => resident.age >= age;
  return testedAnimal.residents.every(checkAge);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    const emptyObject = {};
    return emptyObject;
  }
  const verifyEmployeeName = (employee) => employee.firstName === employeeName || employee.lastName === employeeName;
  const [employ] = data.employees.filter(verifyEmployeeName);
  return employ;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const employee = { ...personalInfo, ...associatedWith };
  return employee;
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
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
