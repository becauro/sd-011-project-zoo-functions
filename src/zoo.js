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

const { employees } = require('./data');
const data = require('./data');

function getSpeciesByIds(...ids) {
  return data.species.filter((putTheSpeciesId) => ids.some((id) => id === putTheSpeciesId.id));
}

function getAnimalsOlderThan(animal, age) {
  return data.species.find((findAnimalName) => findAnimalName.name === animal).residents.every((ageFromResidents) => ageFromResidents.age >= age);
}

function getEmployeeByName(employeeName) {
  return employeeName ? data.employees.find((findFirstName) => findFirstName.firstName === employeeName || findFirstName.lastName === employeeName) : {};
}

function createEmployee(personalInfo, associatedWith) {
  const newEmployee = {};
  Object.assign(newEmployee, personalInfo, associatedWith);
  return newEmployee;
}

function isManager(id) {
  return employees.some(() => id === '0e7b460e-acf4-4e17-bcb3-ee472265db83');
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return data.employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function countAnimals(countSpecies) {
  let emptyParameter = {};
  if (countSpecies === undefined) {
    data.species.forEach((eachAnimal) => {
      emptyParameter[eachAnimal.name] = eachAnimal.residents.length;
    });
    return emptyParameter;
  }

  return data.species.find((animal) => animal.name === countSpecies).residents.length;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const multiply = (data.prices.Adult * Adult) + (data.prices.Child * Child) + (data.prices.Senior * Senior);
  return multiply;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  let schedules = {};
  Object.keys(data.hours).forEach((day) => {
    schedules[day] = `Open from ${data.hours[day].open}am until ${(data.hours[day].close) - 12}pm`;
    if (day === 'Monday') {
      schedules[day] = 'CLOSED';
    }
  });

  if (dayName !== undefined) {
    return { [dayName]: schedules[dayName] };
  }
  return schedules;
}

function getOldestFromFirstSpecies(id) {
  const responsibleFor = data.employees.find((employeeId) => employeeId.id === id).responsibleFor[0];
  const animalInfo = data.species.find((animal) => animal.id === responsibleFor).residents.sort((animalA, animalB) => animalB.age - animalA.age)[0];
  const animalData = [animalInfo.name, animalInfo.sex, animalInfo.age];
  return animalData;
}

function increasePrices(percentage) {
  Object.keys(data.prices).forEach((price) => {
    data.prices[price] += data.prices[price] * (percentage / 100);
    data.prices[price] = Math.round(data.prices[price] * 100) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  let emptyObject = {};
  if (!idOrName) {
    data.employees.forEach((employee) => {
      emptyObject[`${employee.firstName} ${employee.lastName}`] = employee.responsibleFor.map((speciesResponsible) => data.species.find((animals) => animals.id === speciesResponsible).name);
    });
    return emptyObject;
  }
  data.employees.filter((employee) => employee.id === idOrName || employee.firstName === idOrName || employee.lastName === idOrName).forEach((employeeName) => {
    emptyObject[`${employeeName.firstName} ${employeeName.lastName}`] = employeeName.responsibleFor.map((species) => data.species.find((whichSpecies) => whichSpecies.id === species).name);
  });
  return emptyObject;
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
