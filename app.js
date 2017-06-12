'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//PIKE PLACE
var PikePlaceMkt = {
  loc: '1st and Pike',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1 )) + this.minHourlyCustomers;
      this.customersEachHour.push(customersThisHour);
    }
  },
  customersEachHour: [],
  calcCookiestThisHour: function() {
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var cookiesThisHour = Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(cookiesThisHour);
    }
  },
  cookiesEachHour: [],
  render: function() {
    PikePlaceMkt.calcCustomersThisHour();
    PikePlaceMkt.calcCookiestThisHour();

    var PikePlaceUL = document.getElementById('PikePlace');
    PikePlaceUL.textContent = this.loc;

    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      PikePlaceUL.appendChild(liEl);
      totalCookies += this.cookiesEachHour[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookies + ' cookies';
    PikePlaceUL.appendChild(liEl);
  }
};

//SEATAC
var SeaTacAirport = {
  loc: 'SeaTac Airport',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1 )) + this.minHourlyCustomers;
      this.customersEachHour.push(customersThisHour);
    }
  },
  customersEachHour: [],
  calcCookiestThisHour: function() {
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var cookiesThisHour = Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(cookiesThisHour);
    }
  },
  cookiesEachHour: [],
  render: function() {
    SeaTacAirport.calcCustomersThisHour();
    SeaTacAirport.calcCookiestThisHour();

    var SeaTacUL = document.getElementById('SeaTac');
    SeaTacUL.textContent = this.loc;

    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      SeaTacUL.appendChild(liEl);
      totalCookies += this.cookiesEachHour[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookies + ' cookies';
    SeaTacUL.appendChild(liEl);
  }
};

//SEATTLE CENTER
var SeattleCenter = {
  loc: 'Seattle Center',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1 )) + this.minHourlyCustomers;
      this.customersEachHour.push(customersThisHour);
    }
  },
  customersEachHour: [],
  calcCookiestThisHour: function() {
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var cookiesThisHour = Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(cookiesThisHour);
    }
  },
  cookiesEachHour: [],
  render: function() {
    SeattleCenter.calcCustomersThisHour();
    SeattleCenter.calcCookiestThisHour();

    var SeaCenterUL = document.getElementById('SeaCenter');
    SeaCenterUL.textContent = this.loc;

    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      SeaCenterUL.appendChild(liEl);
      totalCookies += this.cookiesEachHour[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookies + ' cookies';
    SeaCenterUL.appendChild(liEl);
  }
};

//CAPITOL HILL
var CapitolHill = {
  loc: 'Capitol Hill',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1 )) + this.minHourlyCustomers;
      this.customersEachHour.push(customersThisHour);
    }
  },
  customersEachHour: [],
  calcCookiestThisHour: function() {
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var cookiesThisHour = Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(cookiesThisHour);
    }
  },
  cookiesEachHour: [],
  render: function() {
    CapitolHill.calcCustomersThisHour();
    CapitolHill.calcCookiestThisHour();

    var CapHillUL = document.getElementById('CapHill');
    CapHillUL.textContent = this.loc;

    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      CapHillUL.appendChild(liEl);
      totalCookies += this.cookiesEachHour[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookies + ' cookies';
    CapHillUL.appendChild(liEl);
  }
};

//ALKI
var Alki = {
  loc: 'Alki',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  calcCustomersThisHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var customersThisHour = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1 )) + this.minHourlyCustomers;
      this.customersEachHour.push(customersThisHour);
    }
  },
  customersEachHour: [],
  calcCookiestThisHour: function() {
    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var cookiesThisHour = Math.floor(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      this.cookiesEachHour.push(cookiesThisHour);
    }
  },
  cookiesEachHour: [],
  render: function() {
    Alki.calcCustomersThisHour();
    Alki.calcCookiestThisHour();

    var AlkiUL = document.getElementById('Alki');
    AlkiUL.textContent = this.loc;

    var totalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + ' cookies';
      AlkiUL.appendChild(liEl);
      totalCookies += this.cookiesEachHour[i];
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + totalCookies + ' cookies';
    AlkiUL.appendChild(liEl);
  }
};

PikePlaceMkt.render();
SeaTacAirport.render();
SeattleCenter.render();
CapitolHill.render();
Alki.render();
