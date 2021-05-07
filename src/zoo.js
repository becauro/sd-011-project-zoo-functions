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
  if (ids.length === 0) {
    return [];
  }
  const idsFiltered = data.species.filter((value) => {
    console.log('------');
    console.log('value id', value.id, value.name);
    let existeElementoMatch = ids.includes(value.id);
    // for (let i = 0; i < ids.length; i += 1) {
    //   console.log(`verificando se ${value.id} === ${ids[i]}`);
    //   if (value.id === ids[i]) {
    //     existeElementoMatch = true;
    //     break;
    //   }
    // }
    console.log(`retornando ${existeElementoMatch} `);
    return existeElementoMatch;
  });
  return idsFiltered;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
}

function getEmployeeByName(employeeName) {
  // seu código aqui
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
