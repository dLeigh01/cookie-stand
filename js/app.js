'use strict';

// ******************************* GLOBAL VARIABLES ***************************************
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeList = [];
let storeTable = document.getElementById('sales-data');
let cookiesPerHour = function() {
  let cookiesPerHourlength = [];
  for(let i = 0; i < hours.length; i++) {
    cookiesPerHourlength.push(0);
  }
  return cookiesPerHourlength;
} ();
let dailyTotal = 0;
let tfootElem = document.createElement('tfoot');
storeTable.appendChild(tfootElem);

// ******************************** RANDOM NUMBER GENERATOR ******************************
function currentHour(min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}

// ********************************** STORE CONSTRUCTOR ***********************************
function StoreStats(store, minCust, maxCust, avgSale) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.display = [];
  this.totalCookies = 0;

  storeList.push(this);
}

// ******************************** ASSIGNING RANDOM NUMBERS ****************************
StoreStats.prototype.avgCust = function() {
  for(let i = 0; i < hours.length; i++) {
    this.display[i] = Math.ceil(currentHour(this.minCust, this.maxCust) * this.avgSale);
    this.totalCookies += this.display[i];
    dailyTotal += this.display[i];
  }
};

// ******************************** CREATING STORES *************************************
new StoreStats('Seattle', 23, 65, 6.3);
new StoreStats('Tokyo', 3, 24, 1.2);
new StoreStats('Dubai', 11, 38, 3.7);
new StoreStats('Paris', 20, 38, 2.3);
new StoreStats('Lima', 2, 16, 4.6);

// ********************************* HELPER FUNCTION ************************************
function hourlyTotalArr() {
  for(let i = 0; i < hours.length; i++) {
    for(let j = 0; j < storeList.length; j++) {
      cookiesPerHour[i] += storeList[j].display[i];
    }
  }
}

// ********************************* DOM MANIPULATION **********************************
function renderThead() {// _______________________________________Table header
  let theadElem = document.createElement('thead');
  storeTable.appendChild(theadElem);
  let thElem = document.createElement('th');
  thElem.textContent = '';
  thElem.setAttribute('scope', 'column');
  theadElem.appendChild(thElem);
  
  for(let i = 0; i < hours.length; i++) {
    let thElem = document.createElement('th');
    thElem.textContent = `${hours[i]}`;
    thElem.setAttribute('scope', 'column');
    theadElem.appendChild(thElem);
  }
  
  thElem = document.createElement('th');
  thElem.textContent = 'Daily Total';
  thElem.setAttribute('scope', 'column');
  theadElem.appendChild(thElem);
}

StoreStats.prototype.render = function() {//______________________Table body
  let tbodyElem = document.createElement('tbody');
  storeTable.appendChild(tbodyElem);
  let thElem = document.createElement('th');
  thElem.textContent = this.store;
  thElem.setAttribute('scope', 'row');
  tbodyElem.appendChild(thElem);
  
  for(let i = 0; i < this.display.length; i++) {
    let tdElem = document.createElement('td');
    tdElem.textContent = this.display[i];
    tbodyElem.appendChild(tdElem);
  }
  
  let tdElem = document.createElement('td');
  tdElem.textContent = this.totalCookies;
  tbodyElem.appendChild(tdElem);
};

function renderTfoot() {// _______________________________________Table foot
  let thElem = document.createElement('th');
  thElem.textContent = 'Totals';
  thElem.setAttribute('scope', 'row');
  tfootElem.appendChild(thElem);

  for(let i = 0; i < cookiesPerHour.length; i++) {
    let thElem = document.createElement('th');
    thElem.textContent = cookiesPerHour[i];
    tfootElem.appendChild(thElem);
  }

  thElem = document.createElement('th');
  thElem.textContent = dailyTotal;
  tfootElem.appendChild(thElem);
}

function renderStore() {// _____________________________________Finish rendering
  renderThead();
  for(let i = 0; i < storeList.length; i++) {
    storeList[i].avgCust();
    storeList[i].render();
  }
  hourlyTotalArr();
  renderTfoot();
}

renderStore();

//*********************************** FORM GRAB ********************************************
let storeForm = document.getElementById('getForm');
storeForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let name = event.target.name.value;
  let min = +event.target.min.value;
  let max = +event.target.max.value;
  let avg = +event.target.avg.value;

  let userStore = new StoreStats(name, min, max, avg);
  userStore.avgCust();
  userStore.render();

  tfootElem.innerHTML = '';
  for(let i = 0; i < cookiesPerHour.length; i++) {
    cookiesPerHour[i] = 0;
  }
  hourlyTotalArr();
  renderTfoot();
}
