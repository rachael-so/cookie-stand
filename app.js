'use strict';

var theTable = document.getElementById('stores');
var form = document.getElementById('form');
var allStores = [];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(loc, minCustomers, maxCustomers, avgCookies) {
  this.loc = loc;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalCookies = 0;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  allStores.push(this);
}

Store.prototype.calcCustomersPerHour = function() {
  for (var i = 0; i < hours.length; i++) {
    this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1 )) + this.minCustomers);
  }
};

Store.prototype.calcCookiestPerHour = function() {
  this.calcCustomersPerHour();
  this.totalCookies = 0;
  for (var i = 0; i < hours.length; i++) {
    this.cookiesEachHour.push(Math.floor(this.customersEachHour[i] * this.avgCookies));
    this.totalCookies += this.cookiesEachHour[i];
  }
};

Store.prototype.render = function() {
  this.calcCookiestPerHour();

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

function createHeader() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  var thEL = document.createElement('th');
  thEL.textContent = 'Daily Location Total';
  trEl.appendChild(thEL);

  theTable.appendChild(trEl);
}

function createFooter() {
  var hourlyTotal = 0;
  var totalOfTotals = 0;

  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Totals';
  trEl.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    hourlyTotal = 0;
    for (var j = 0; j < allStores.length; j++) {
      hourlyTotal += allStores[j].cookiesEachHour[i];
      totalOfTotals += allStores[j].cookiesEachHour[i];
    }
    var thEl = document.createElement('th');
    thEl.textContent = hourlyTotal;
    trEl.appendChild(thEl);
  }

  var thEl = document.createElement('th');
  thEl.textContent = totalOfTotals;
  trEl.appendChild(thEl);

  theTable.appendChild(trEl);
}

function renderAllStores() {
  theTable.innerHTML = '';
  createHeader();

  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }

  createFooter();
}

new Store('1st and Pike', 23, 65, 6.3, 'pikePlace');
new Store('SeaTac Airport', 3, 24, 1.2, 'seatac');
new Store('Seattle Center', 11, 38, 3.7, 'seacenter');
new Store('Capitol Hill', 20, 38, 2.3, 'caphill');
new Store('Alki', 2, 16, 4.6, 'alki');

//FORM
function handleSubmit(event) {
  event.preventDefault();
  var location = event.target.loc.value;
  var min = parseFloat(event.target.min.value);
  var max = parseFloat(event.target.max.value);
  var avg = parseFloat(event.target.avg.value);

  if (!location || !min || !max || !avg) {
    return alert('fields cannot be empty');
  }
  if (min < 0 || max < 0 || avg < 0 || min > max) {
    return alert('invalid values');
  }

  for (var i = 0; i < allStores.length; i++) {
    if (location === allStores[i].loc) {
      allStores[i].minCustomers = min;
      allStores[i].maxCustomers = max;
      allStores[i].avgCookies = avg;
      allStores[i].customersEachHour = [];
      allStores[i].cookiesEachHour = [];

      clearForm();

      renderAllStores();
      return;
    }
  }

  new Store(location, min, max, avg);

  clearForm();

  renderAllStores();
}

function clearForm() {
  event.target.loc.value = null;
  event.target.min.value = null;
  event.target.max.value = null;
  event.target.avg.value = null;
}

renderAllStores();

form.addEventListener('submit', handleSubmit);
