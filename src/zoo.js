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
  const { species } = data;
  return species.filter((element) => ids.includes(element.id));
}

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  return species.find((specieName) => specieName.name === animal).residents.every((resident) => resident.age >= age);
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (!employeeName) return {};
  return employees.find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {};
  return Object.assign(newEmployee, personalInfo, associatedWith);
}

function isManager(id) {
  const { employees } = data;
  return employees.some((people) => people.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const { employees } = data;
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(species) {
  const AnimalsQuant = data.species.reduce((res, animal) => {
    res[animal.name] = animal.residents.length;
    return res;
  }, {});
  if (species) {
    return AnimalsQuant[species];
  }
  return AnimalsQuant;
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
