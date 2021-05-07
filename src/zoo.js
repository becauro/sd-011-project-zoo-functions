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
  return data.species.filter(({ id }) => ids.includes((id)));
  // Função Filter juntamente com includes para localizar todos os IDS passados nos parâmetros
}

function getAnimalsOlderThan(animal, minAge) {
  const names = data.species.find(({ name }) => name === animal);
  // função Find procura as ocorrências do primeiro parâmetro (a espécie de animal) na base de dados
  return names.residents.every(({ age }) => age >= minAge);
  // retorna true se todos os animais da espécie tem a idade maior que o parâmetro passado.
}

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    return data.employees.find(({ firstName, lastName }) =>
      employeeName === firstName || employeeName === lastName);
  // Procura o nome e o sobrenome do funcionário na base de dados
  }
  return {};
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

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
