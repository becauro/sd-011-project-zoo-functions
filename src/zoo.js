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
const { employees, prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const { species } = data;
  return data.species.filter((spec) => ids.some((id) => id === spec.id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((specie) => animal === specie.name).residents.every((specie) => specie.age >= age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {};
  return data.employees.find((people) => employeeName === people.firstName || employeeName === people.lastName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return data.employees.some((employ) => employ.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const object = { id, firstName, lastName, managers, responsibleFor };
  return data.employees.push(object);
}

function countAnimals(species) {
  // seu código aqui
  if (species === undefined) {
    let response = data.species.reduce((acc, value) => {
      acc[value.name] = value.residents.length;
      return acc;
    }, {});
    return response;
  }
  const result = data.species.filter((value) => value.name === species);
  return result[0].residents.length;
}
countAnimals();

function calculateEntry(entrants = {}) {
  // seu código aqui
  let result = 0;
  const {
    Senior = 0,
    Adult = 0,
    Child = 0,
  } = entrants;
  result += Senior * data.prices.Senior;
  result += Adult * data.prices.Adult;
  result += Child * data.prices.Child;
  return result;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const responsible = data.employees.find((employee) => employee.id === id);
  const allAnimalsFromFirstSpecies = data.species.find((specie) => specie.id === responsible.responsibleFor[0]);
  const { age, name, sex } = allAnimalsFromFirstSpecies.residents.reduce((acc, curr) => (curr.age > acc.age ? curr : acc ), { age: 0 });

  return [name, sex, age];
}

// requisito 12
const modifyNumber = (number, modifier) => Math.round(number * modifier * 100) / 100;

const increasePrices = (percentage) => {
  const modifier = 1 + (percentage / 100);

  Object.keys(prices).forEach((key) => {
    prices[key] = modifyNumber(prices[key], modifier);
  });
  return prices;
};

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
