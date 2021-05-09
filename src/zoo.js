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

const { species: species1, employees, hours, prices } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species1.filter((animal) => ids.some((id) => id === animal.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const people = species1.filter((members) => members.name === animal);
  return (people[0].residents).every((member) => member.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  const person = employees.find((name) => name.firstName === employeeName || name.lastName === employeeName);
  return person !== undefined ? person : {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.find((employee) => employee).managers.includes(id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(species) {
  // seu código aqui
  const animalObj = {};
  species1.forEach((animal) => {
    const { name } = animal;
    const { length } = animal.residents;
    animalObj[name] = length;
  });
  if (species) return animalObj[species];
  return animalObj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || entrants) return 0;
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
