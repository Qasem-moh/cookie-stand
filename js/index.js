'use strict';
// let array of Hours is globale
let hoursCookies = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];

function Store(locationName, Max, Min, avg) {
  this.locationName = locationName;
  this.Max = Max;
  this.Min = Min;
  this.avg = avg;
  this.cookiePerHour = [];
  this.randomCou = [];
  this.total = 0;
}

Store.prototype.RandCook = function () {
  for (let i = 0; i < this.randomCou.length; i++) {
    let cokk = Math.ceil(this.randomCou[i] * this.avg);
    this.cookiePerHour.push(cokk);
    this.total += cokk;
  }
};
/*************************** */
Store.prototype.CalRandome = function () {
  console.log(this.Max);
  for (let i = 0; i < hoursCookies.length; i++) {
    let randomNimber = Math.floor(
      Math.random() * (this.Max - this.Min + 1) + this.Min
    );
    this.randomCou.push(randomNimber);
  }
};
/******************** */
let container = document.getElementById('container');
let tableElement = document.createElement('table');
container.appendChild(tableElement);
let trElement = document.createElement('tr');
tableElement.appendChild(trElement);
let thElement = document.createElement('th');
trElement.appendChild(thElement);
thElement.textContent = 'Location';
for (let i = 0; i < hoursCookies.length; i++) {
  let thElement2 = document.createElement('th');
  trElement.appendChild(thElement2);
  thElement2.textContent = hoursCookies[i];
}
let thtotaldaily = document.createElement('th');
trElement.appendChild(thtotaldaily);
thtotaldaily.textContent = 'Daily Location Total';
/**************************** */
Store.prototype.render = function () {
  let trTableData = document.createElement('tr');
  tableElement.appendChild(trTableData);
  let tdTableData = document.createElement('td');
  trTableData.appendChild(tdTableData);
  // eslint-disable-next-line no-undef
  tdTableData.textContent=this.locationName;
  for (let index = 0; index < this.cookiePerHour.length; index++) {
    let tdTableData = document.createElement('td');
    trTableData.appendChild(tdTableData);
    tdTableData.textContent=this.cookiePerHour[index];
  }
  let tdTableData1 = document.createElement('td');
  trTableData.appendChild(tdTableData1);
  tdTableData1.textContent=this.total;
};

let Seattle = new Store('Seattle', 65, 23, 6.3);
// eslint-disable-next-line new-cap
Seattle.CalRandome();
// eslint-disable-next-line new-cap
Seattle.RandCook();
Seattle.render();
// eslint-disable-next-line no-unused-vars
let Tokyo = new Store('Tokyo', 24, 3, 1.2);
// eslint-disable-next-line new-cap
Tokyo.CalRandome();
// eslint-disable-next-line new-cap
Tokyo.RandCook();
Tokyo.render();
// eslint-disable-next-line no-unused-vars
let Dubai = new Store('Dubai', 38, 11, 3.7);

// eslint-disable-next-line new-cap
Dubai.CalRandome();
// eslint-disable-next-line new-cap
Dubai.RandCook();
Dubai.render();

// eslint-disable-next-line no-unused-vars
let Lima = new Store('Lima', 16, 2, 4.6);
// eslint-disable-next-line new-cap
Lima.CalRandome();
// eslint-disable-next-line new-cap
Lima.RandCook();
Lima.render();
// eslint-disable-next-line no-unused-vars
let Paris = new Store('Paris', 38, 20, 2.3);
// eslint-disable-next-line new-cap
Paris.CalRandome();
// eslint-disable-next-line new-cap
Paris.RandCook();
Paris.render();
