'use strict';

let seattle = {
  // initialize keys
  store: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  currentHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  // write to DOM
  render: function() {
    let seattle = document.getElementById('sales-data');

    let articleElem = document.createElement('article');
    seattle.appendChild(articleElem);
    articleElem.setAttribute('id', 'seattle');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.store;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let total = 0;
    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      let hourTotal = Math.ceil(this.currentHour(this.minCust, this.maxCust) * this.avgSale);
      liElem.textContent = `${this.hours[i]}: ${Math.ceil(hourTotal)} cookies`;
      ulElem.appendChild(liElem);
      total += hourTotal;
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${total} cookies`;
    ulElem.appendChild(liElem);
  }
};
seattle.currentHour(seattle.minCust, seattle.maxCust);
seattle.render();

let Tokyo = {
  // initialize keys
  store: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  currentHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  // write to DOM
  render: function() {
    let Tokyo = document.getElementById('sales-data');

    let articleElem = document.createElement('article');
    Tokyo.appendChild(articleElem);
    articleElem.setAttribute('id', 'tokyo');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.store;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let total = 0;
    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      let hourTotal = Math.ceil(this.currentHour(this.minCust, this.maxCust) * this.avgSale);
      liElem.textContent = `${this.hours[i]}: ${Math.ceil(hourTotal)} cookies`;
      ulElem.appendChild(liElem);
      total += hourTotal;
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${total} cookies`;
    ulElem.appendChild(liElem);
  }
};
Tokyo.currentHour(Tokyo.minCust, Tokyo.maxCust);
Tokyo.render();

let dubai = {
  // initialize keys
  store: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgSale: 3.7,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  currentHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  // write to DOM
  render: function() {
    let dubai = document.getElementById('sales-data');

    let articleElem = document.createElement('article');
    dubai.appendChild(articleElem);
    articleElem.setAttribute('id', 'dubai');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.store;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let total = 0;
    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      let hourTotal = Math.ceil(this.currentHour(this.minCust, this.maxCust) * this.avgSale);
      liElem.textContent = `${this.hours[i]}: ${Math.ceil(hourTotal)} cookies`;
      ulElem.appendChild(liElem);
      total += hourTotal;
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${total} cookies`;
    ulElem.appendChild(liElem);
  }
};
dubai.currentHour(dubai.minCust, dubai.maxCust);
dubai.render();

let paris = {
  // initialize keys
  store: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgSale: 2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  currentHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  // write to DOM
  render: function() {
    let paris = document.getElementById('sales-data');

    let articleElem = document.createElement('article');
    paris.appendChild(articleElem);
    articleElem.setAttribute('id', 'paris');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.store;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let total = 0;
    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      let hourTotal = Math.ceil(this.currentHour(this.minCust, this.maxCust) * this.avgSale);
      liElem.textContent = `${this.hours[i]}: ${Math.ceil(hourTotal)} cookies`;
      ulElem.appendChild(liElem);
      total += hourTotal;
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${total} cookies`;
    ulElem.appendChild(liElem);
  }
};
paris.currentHour(paris.minCust, paris.maxCust);
paris.render();

let lima = {
  // initialize keys
  store: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgSale: 4.6,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  currentHour: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  // write to DOM
  render: function() {
    let lima = document.getElementById('sales-data');

    let articleElem = document.createElement('article');
    lima.appendChild(articleElem);
    articleElem.setAttribute('id', 'lima');

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.store;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    let total = 0;
    for(let i = 0; i < this.hours.length; i++) {
      let liElem = document.createElement('li');
      let hourTotal = Math.ceil(this.currentHour(this.minCust, this.maxCust) * this.avgSale);
      liElem.textContent = `${this.hours[i]}: ${Math.ceil(hourTotal)} cookies`;
      ulElem.appendChild(liElem);
      total += hourTotal;
    }

    let liElem = document.createElement('li');
    liElem.textContent = `Total: ${total} cookies`;
    ulElem.appendChild(liElem);
  }
};
lima.currentHour(lima.minCust, lima.maxCust);
lima.render();
