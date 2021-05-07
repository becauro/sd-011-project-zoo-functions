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
const { employees, animals } = require('./data');
const { prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return ids.map((actualId) => (data.animals.find((animal) => actualId === animal.id)));
}

function getAnimalsOlderThan(animal, age) {
  const especie = data.animals.find((specie) => specie.name === animal);
  return especie.residents.every((obj) => obj.age > age);
}

function getEmployeeByName(name) {
  let employee = data.employees.find((emp) => emp.firstName === name || emp.lastName === name);
  if (!name) employee = {};
  return employee;
}

function createEmployee(personalInfo, associatedWith) {
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  return { id, firstName, lastName, managers, responsibleFor };
}

function isManager(id) {
  return data.employees.some((employee) => employee.managers.some((idEmployee) =>
    idEmployee === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalNum() {
  return data.animals.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
}

function countAnimals(species) {
  const countAnimalSpecies = animalNum();
  if (!species) {
    return countAnimalSpecies;
  }
  return countAnimalSpecies[species];
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  return (data.prices.Adult * Adult) + (data.prices.Child * Child) + (data.prices.Senior * Senior);
}

// function getAnimalMap(options) {
//   // seu código aqui
// }

function getSchedule(dayName) {
  let workD;
  if (dayName) workD = { [dayName]: data.hours[dayName] };
  else workD = data.hours;
  return Object.entries(workD)
    .reduce((agenda, day) => Object.assign(agenda, { [day[0]]: (day[1].open !== 0)
      ? `Open from ${day[1].open}am until ${day[1].close - 12}pm` : 'CLOSED' }), {});
}

function getOldestFromFirstSpecies(id) {
  const helper = data.employees.find((person) => person.id === id).responsibleFor[0];
  const answer = data.animals.find((creature) => creature.id === helper).residents
    .sort((creature1, creature2) => creature2.age - creature1.age)[0];
  return [answer.name, answer.sex, answer.age];
}

function increasePrices(percentage) {
  // seu código aqui
  const arrayOptions = Object.keys(prices);
  const porcentagem = 1 + (percentage / 100);
  arrayOptions.forEach((currentValue) => {
    prices[currentValue] = (Math.round((prices[currentValue] * porcentagem) * 100)) / 100;
  });
}

const consultAnimalsById = (...arr) => (
  arr.map((id) => animals.find((animal) => animal.id === id)).map((specie) => specie.name)
);

const returnEmployee = (par) => {
  const fullName = `${par.firstName} ${par.lastName}`;
  return { [fullName]: consultAnimalsById(...par.responsibleFor) };
};

function getEmployeeCoverage(idOrName) {
  if (idOrName === undefined) {
    return employees.reduce((acc, act) => Object.assign(acc, returnEmployee(act)), {});
  }
  const findEmployee = employees.find((element) => element.id === idOrName
      || element.firstName === idOrName || element.lastName === idOrName);
  return { ...returnEmployee(findEmployee) };
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  // getAnimalMap,
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
