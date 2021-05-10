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
  return data.species.filter((e) => ids.includes(e.id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((animals) => animal.includes(animals.name))
    .residents.every((animals) => animals.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees
    .find((person) => employeeName.includes(person.firstName) || employeeName.includes(person.lastName));
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

function isManager(id) {
  // Recebi ajuda de Laura Gusmão e Mikaela Braga
  return data.employees
    .some((person) => person.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newPerson = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newPerson);
  return newPerson;
}

function countAnimals(species) {
  if (species === undefined) {
    return data.species.reduce((acc, animals) => {
      acc[animals.name] = animals.residents.length;
      return acc;
    }, {});
  }
  // return data.species.reduce((acc, animals)=> {
  //   acc = animals.residents.length;
  //   return acc
  // });
}
// console.log(countAnimals('snakes'));
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
