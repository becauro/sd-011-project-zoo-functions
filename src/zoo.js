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

const { prices } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animal) => ids.some((id) => animal.id === id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((findAnimal) => (findAnimal.name === animal)).residents.every((checkAges) => checkAges.age > age);
}

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return data.employees.find((check) => check.firstName === employeeName || check.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  let newObject = {};
  Object.assign(newObject, personalInfo, associatedWith);
  return newObject;
}

function isManager(id) {
  return data.employees.some((check) => (check.id === id && check.managers[0] === '9e7d4524-363c-416a-8759-8aa7e50c0992'));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  let newObject = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  data.employees.push(newObject);
}

function countAnimals(species) {
  if (species === undefined) {
    const obj = {};
    data.species.forEach((positions) => {
      obj[positions.name] = positions.residents.length;
    });

    return obj;
  }

  return data.species.find((findAnimal) => findAnimal.name === species).residents.length;
}

function calculateEntry(entrants) {
  if (entrants === undefined || entrants === {}) return 0;
  return Object.keys(entrants).reduce((acc, curr) => acc + (data.prices[curr] * entrants[curr]), 0);
}

function getAnimalMap(options = {}) {
  const currentOptions = options;

  const animalLocation = { NE: [], NW: [], SE: [], SW: [] };

  Object.keys(animalLocation).forEach((directions) => {
    animalLocation[directions] = data.species.filter((animals) => animals.location === directions);

    if (currentOptions.includeNames === undefined) {
      animalLocation[directions] = animalLocation[directions].map((value) => value.name);
    }
  });

  Object.keys(animalLocation).forEach((directions) => {
    if (currentOptions.includeNames === true && currentOptions.sorted === undefined && currentOptions.sex === undefined) {
      let animalNames = [];
      animalLocation[directions].map((value) => animalNames.push({ [value.name]: Object.values(value.residents).map((names) => names.name) }));
      animalLocation[directions] = animalNames;
    }
  });

  Object.keys(animalLocation).forEach((directions) => {
    if (currentOptions.includeNames === true && currentOptions.sorted === true && currentOptions.sex === undefined) {
      let animalNames = [];
      animalLocation[directions].map((value) => animalNames.push({ [value.name]: Object.values(value.residents).map((names) => names.name).sort() }));
      animalLocation[directions] = animalNames;
    }
  });

  Object.keys(animalLocation).forEach((directions) => {
    if (currentOptions.includeNames === true && currentOptions.sorted === undefined && currentOptions.sex === 'female') {
      let animalNames = [];
      animalLocation[directions].map((value) => animalNames.push({ [value.name]: Object.values(value.residents).filter((sex) => sex.sex === 'female').map((name) => name.name) }));
      animalLocation[directions] = animalNames;
    }
  });
  Object.keys(animalLocation).forEach((directions) => {
    if (currentOptions.includeNames === true && currentOptions.sorted === true && currentOptions.sex === 'female') {
      let animalNames = [];
      animalLocation[directions].map((value) => animalNames.push({ [value.name]: Object.values(value.residents).filter((sex) => sex.sex === 'female').map((name) => name.name).sort() }));
      animalLocation[directions] = animalNames;
    }
  });

  return animalLocation;
}

console.log(getAnimalMap(true));

function getSchedule(dayName) {
  let obj = {};
  let expediente = Object.values(data.hours);
  Object.keys(data.hours).forEach((day, index) => {
    if (dayName === undefined) obj[day] = `Open from ${expediente[index].open}am until ${expediente[index].close - 12}pm`;
    if (day === dayName) obj[day] = `Open from ${expediente[index].open}am until ${expediente[index].close - 12}pm`;
  });

  if (obj.Monday !== undefined) obj.Monday = 'CLOSED';

  return (obj);
}

function getOldestFromFirstSpecies(id) {
  const employerFirstResponsibility = data.employees.find((employeer) => employeer.id === id).responsibleFor[0];
  const employerFirstAnimalResponsibility = data.species.find((animal) => animal.id === employerFirstResponsibility);

  return Object.values(employerFirstAnimalResponsibility.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr)));
}

function increasePrices(percentage) {
  const decimal = percentage / 100 + 1;
  Object.entries(data.prices).forEach((value) => {
    data.prices[value[0]] = Math.round((value[1] * decimal) * 100) / 100;
  });

  return data.prices;
}

// Arredondar foi bem complicado, consegui consultando esse site: https://metring.com.br/arredondar-numero-em-javascript

function checkAnimalName(ids) {
  const animalName = [];
  ids.forEach((responsibleFor) => {
    data.species.forEach((animal) => {
      if (responsibleFor === animal.id) {
        animalName.push(animal.name);
      }
    });
  });
  return animalName;
}

function getEmployeeCoverage(idOrName) {
  const obj = {};

  if (idOrName === undefined) {
    data.employees.forEach((positions) => {
      obj[`${positions.firstName} ${positions.lastName}`] = checkAnimalName(positions.responsibleFor);
    });
  }

  data.employees.forEach((checkNames) => {
    if (idOrName === checkNames.id || idOrName === checkNames.firstName || idOrName === checkNames.lastName) {
      obj[`${checkNames.firstName} ${checkNames.lastName}`] = checkAnimalName(checkNames.responsibleFor);
    }
  });
  return obj;
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
