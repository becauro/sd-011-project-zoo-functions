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
const { species, employees, prices } = require('./data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) return [];
  return species.filter((animais) => ids.find((id) => id === animais.id));
}

function getAnimalsOlderThan(animal, age) {
  const ageAnimals = species.find((bicho) => bicho.name === animal);
  return ageAnimals.residents.every((num) => num.age >= age);
}

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') return ({});
  return employees.find(((funcionario) => (
    funcionario.firstName === employeeName || funcionario.lastName === employeeName)
  ));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(({ managers }) => managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const funcionario = ({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
  return employees.push(funcionario);
}

function countAnimals(specie) {
  if (specie) {
    return species.find(({ name }) => name === specie).residents.length;
  }
  return species.reduce((acc, { name, residents }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  return Object.keys(entrants).reduce(((total, currentValue) =>
    total + (entrants[currentValue] * prices[currentValue])
  ), 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

const horas = {
  Tuesday: 'Open from 8am until 6pm',
  Wednesday: 'Open from 8am until 6pm',
  Thursday: 'Open from 10am until 8pm',
  Friday: 'Open from 10am until 8pm',
  Saturday: 'Open from 8am until 10pm',
  Sunday: 'Open from 8am until 8pm',
  Monday: 'CLOSED',
};

function getSchedule(dayName) {
  if (!dayName) return horas;
  const agenda = Object.keys(horas).find((dia) => dia === dayName);
  return { [agenda]: horas[agenda] };
}

function getOldestFromFirstSpecies(id) {
  const funcionario = employees.find((responsavel) => responsavel.id === id).responsibleFor[0];
  const animal = species.find((bicho) => bicho.id === funcionario);
  return Object.values(animal.residents.reduce((acc, currentValue) => (acc.age > currentValue.age ? acc : currentValue)));
}

function increasePrices(percentage) {
  Object.entries(prices).forEach((valor) => {
    prices[valor[0]] = Math.round((valor[1] * (percentage / 100 + 1)) * 100) / 100;
  });
  return prices;
}

function getEmployeeCoverage(idOrName) {

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
