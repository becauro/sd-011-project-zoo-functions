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
  let arrayIds = [];
  data.species.forEach((animal) => {
    if (ids.includes(animal.id)) {
      arrayIds.push(animal);
    }
  });
  return arrayIds;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((bicho) => bicho.name === animal).residents.every((elementos) => elementos.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  let empregados;
  if (employeeName === undefined) {
    empregados = {};
  } else {
    empregados = data.employees.find((element) => element.firstName === employeeName || element.lastName === employeeName);
  }
  return empregados;
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  let newObject = {
    id: personalInfo.id,
    firstName: personalInfo.firstName,
    lastName: personalInfo.lastName,
    managers: associatedWith.managers,
    responsibleFor: associatedWith.responsibleFor,
  };
  return newObject;
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((element) => element.managers.includes(id));
}
// console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

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
