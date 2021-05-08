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
  return data.species.filter((animal) => ids.some((id) => id === animal.id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((animalName) => animalName.name === animal).residents.every((val) => val.age >= age);
}

function getEmployeeByName(employeeName) {
  return !employeeName ? {} : data.employees.find((person) => person.firstName === employeeName || person.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // Método 1
  // return {
  // id,
  // firstName,
  // lastName,
  // managers,
  // responsibleFor,
  // }

  // Método 2
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return data.employees.some((person) => person.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(specie) {
  const result = data.species.reduce((acc, curr) => {
    acc[curr.name] = curr.residents.length;
    return acc;
  }, {});

  return (!specie) ? result : result[specie];
}

function calculateEntry(entrants) {
  if (!entrants || entrants === {}) return 0;
  return Object.keys(entrants).reduce((somatorio, atual) => somatorio + (data.prices[atual] * entrants[atual]), 0);
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
