'use strict';

var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(loc, minCustomers, maxCustomers, avgCookies, id) {
  this.loc = loc;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  allStores.push(this);
  this.id = id;
}

Store.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1 )) + this.minCustomers);
  }
};

Store.prototype.calcCookiestPerHour = function() {
  this.calcCustomersPerHour();
  for (var i = 0; i < hours.length; i++) {
    this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
    this.totalCookies += this.cookiesEachHour[i];
  }
};

Store.prototype.render = function() {
  this.calcCookiestPerHour();

  var theTable = document.getElementById('stores');
  console.log(theTable);

  var trEl = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = this.loc;
  trEl.appendChild(tdEl);

  for (var i = 0; i < hours.length; i++) {
    var tdEL = document.createElement('td');
    tdEL.textContent = this.cookiesEachHour[i] + ' cookies';
    trEl.appendChild(tdEL);
  }
  var tdEL = document.createElement('td');
  tdEL.textContent = this.totalCookies + ' cookies';
  trEl.appendChild(tdEL);

  theTable.appendChild(trEl);
};

new Store('1st and Pike', 23, 65, 6.3, 'pikePlace');
new Store('SeaTac Airport', 3, 24, 1.2, 'seatac');
new Store('Seattle Center', 11, 38, 3.7, 'seacenter');
new Store('Capitol Hill', 20, 38, 2.3, 'caphill');
new Store('Alki', 2, 16, 4.6, 'alki');

function createHeader() {
  var theTable = document.getElementById('stores');
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = '';
  theTable.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    theTable.appendChild(thEl);
  }

  var thEL = document.createElement('th');
  thEL.textContent = 'Daily Location Total';
  theTable.appendChild(thEL);

  theTable.appendChild(trEl);
}

function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

createHeader();
renderAllStores();
