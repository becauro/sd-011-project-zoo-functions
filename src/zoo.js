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

const { employees, species, prices, hours } = require('./data');
const data = require('./data');

const getSpeciesByIds = (...ids) => data.species.filter((speciesId) => ids.includes(speciesId.id));

const getAnimalsOlderThan = (animal, age) => data.species.find(({ name }) => name === animal).residents.every(({ age: ages }) => ages >= age);

const getEmployeeByName = (employeeName) => ((!employeeName) ? {}
  : data.employees.find(({ firstName, lastName }) => firstName === employeeName || lastName === employeeName));

const createEmployee = (personalInfo, associatedWith) => ({ ...personalInfo, ...associatedWith });

const isManager = (id) => data.employees.some(({ managers }) => managers.includes(id));

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => data.employees.push({ id, firstName, lastName, managers, responsibleFor });

const countAnimals = (speciesName) => ((speciesName)
  ? data.species.find(({ name }) => name === speciesName).residents.length
  : data.species.reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {}));

const calculateEntry = (entrants) => ((!entrants) ? 0
  : Object.keys(entrants).reduce((acc, curr) => acc + (data.prices[curr] * entrants[curr]), 0));

function getAnimalMap(options) {
  // seu código aqui
}

const getSchedule = (dayName) => {
  const schedule = Object.entries(hours).reduce((acc, [day, { open, close }]) => ({ ...acc, [day]: open - close === 0 ? 'CLOSED' : `Open from ${open}am until ${close - 12}pm` }), 0);
  return dayName === undefined ? schedule : { [dayName]: schedule[dayName] };
};

const getOldestFromFirstSpecies = (ids) => {
  const responsible = employees.find(({ id }) => id === ids).responsibleFor.find((index) => index);
  return Object.values(species.find(({ id }) => id === responsible).residents.sort((a, b) => b.age - a.age)[0]);
};

const increasePrices = (percentage) => {
  Object.keys(prices).forEach((price) => {
    prices[price] = Math.round((prices[price] + prices[price] * (percentage / 100)) * 100) / 100;
  });
  return prices;
};

const PersonId = (idOrName) => {
  const resposable = employees.find(({ firstName, lastName, id }) => firstName === idOrName || lastName === idOrName || id === idOrName);
  const animals = resposable.responsibleFor.map((ids) => species.find(({ id }) => id === ids).name);
  return { [`${resposable.firstName} ${resposable.lastName}`]: animals };
};

const getEmployeeCoverage = (idOrName) => {
  const employee = data.employees.reduce(((acc, { firstName, lastName, responsibleFor }) => {
    acc[`${firstName} ${lastName}`] = responsibleFor.map((ids) => data.species.find(({ id }) => id === ids).name);
    return acc;
  }), {});
  if (!idOrName) return employee;
  return PersonId(idOrName);
};

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
