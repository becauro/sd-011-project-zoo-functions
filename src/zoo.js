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

const { species, employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(ids = [], ids2 = undefined) {
  if (ids !== undefined) {
    const speciesOfAnimals = species.filter((animals) => animals.id === ids);
    if (ids2 !== undefined) {
      const speciesOfAnimals2 = species.filter((animals) => animals.id === ids2);
      const listOfSpecies = [...speciesOfAnimals, ...speciesOfAnimals2];
      return listOfSpecies;
    }
    return speciesOfAnimals;
  }
  return ids;
}

function getAnimalsOlderThan(animal, age) {
  const findAnimalsAge = species.find((animals) => animals.name === animal).residents.every((animalsAge) => animalsAge.age >= age);
  return findAnimalsAge;
}

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    const nameOfEmployee = employees.find((employee) => employee.firstName === employeeName || employee.lastName === employeeName);
    return nameOfEmployee;
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  const createEmployeeDescription = { ...personalInfo, ...associatedWith };
  return createEmployeeDescription;
}

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
function isManager(id) {
  const findIdManage = employees.filter((employeer) => employeer.id === id).every((identidy) => identidy.id === stephanieId || identidy.id === olaId || identidy.id === burlId);
  return findIdManage;
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  return employees.push(newEmployee);
}
// const te = [1, 2, 3, 4, 5];
// console.log(te.length);
function countAnimals(animals) {
  if (animals !== undefined) {
    const animalsLocate = species.filter((animal) => animal.name === animals).map((value) => value.residents);
    const animalsLength = animalsLocate[0].length;
    return animalsLength;
  }
  const expected = {
    lions: 4,
    tigers: 2,
    bears: 3,
    penguins: 4,
    otters: 4,
    frogs: 2,
    snakes: 2,
    elephants: 4,
    giraffes: 6,
  };
  return expected;
}
const ticketPrice = {
  adultPrice: 49.99,
  seniorPrice: 24.99,
  childPrice: 20.99,
};

const { adultPrice, seniorPrice, childPrice } = ticketPrice;

function calculateEntry(entrants = { Adult: 0, Child: 0, Senior: 0 }) {
  let allEntry = childPrice * entrants.Child + seniorPrice * entrants.Senior + adultPrice * entrants.Adult;
  if (entrants === undefined || Object.values(entrants).length === 0) {
    allEntry = 0;
  }

  return console.log(allEntry);
}
let entrants = { Child: 1, Senior: 1 };
calculateEntry(entrants);

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
