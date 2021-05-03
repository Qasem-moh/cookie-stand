"use strict";
// let array of Hours is globale
let hoursCookies = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

// define object
let seattleCookies = {
  //define max&min&average
  StoreName: "Seattle",
  maxCustomrePerHour: 65,
  minCustomrePerHour: 23,
  averagCustomrePerHour: 6.3,
  randomeCustomrePerHour: [],
  salesCustomrePerHour: [],

  totalCustomrePerHour: 0,

  //found randome randomeCustomrePerHour number
  randomeCustomrePerHourNumber: function (min, max) {
    for (let randhour = 0; randhour < hoursCookies.length; randhour++) {
      this.randomeCustomrePerHour.push(
        Math.floor(
          Math.random() *
            (this.maxCustomrePerHour - this.minCustomrePerHour + 1) +
            this.minCustomrePerHour
        )
      );
    }
  },

  // found averagCustomrePerHour and do totalCustomrePerHour
  salesCustomrePerHourAv: function () {
    for (let i = 0; i < hoursCookies.length; i++) {
      this.salesCustomrePerHour.push(
        Math.ceil(this.randomeCustomrePerHour[i] * this.averagCustomrePerHour)
      );
      //assign value to totalCustomrePerHour
      this.totalCustomrePerHour += this.salesCustomrePerHour[i];
    }
  },
  // add Html Elements
  renderDataInHtml: function () {
    //define conatner to render Element
    let container = document.getElementById("container");
    //define title Seattle
    let h3Element = document.createElement("h3");
    // append h3 to conatiner
    container.appendChild(h3Element);
    // assign value to h3
    h3Element.textContent = this.StoreName;
    //define create unorder list
    let ulElement = document.createElement("ul");
    //append unorder list to container
    container.appendChild(ulElement);

    for (let index = 0; index < hoursCookies.length; index++) {
      let liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.textContent = `${hoursCookies[index]}:${this.salesCustomrePerHour[index]} cookies`;
    }
  },
};
//called function
seattleCookies.randomeCustomrePerHourNumber(
  seattleCookies.minCustomrePerHour,
  seattleCookies.maxCustomrePerHour
);

seattleCookies.salesCustomrePerHourAv();
seattleCookies.renderDataInHtml();

//tokyo
/*********************************************************** */

let tokyoCookies = {
  //define max&min&average
  StoreName: "tokyo",
  maxCustomrePerHour: 65,
  minCustomrePerHour: 23,
  averagCustomrePerHour: 6.3,
  randomeCustomrePerHour: [],
  salesCustomrePerHour: [],

  totalCustomrePerHour: 0,

  //found randome randomeCustomrePerHour number
  randomeCustomrePerHourNumber: function (min, max) {
    for (let randhour = 0; randhour < hoursCookies.length; randhour++) {
      this.randomeCustomrePerHour.push(
        Math.floor(
          Math.random() *
            (this.maxCustomrePerHour - this.minCustomrePerHour + 1) +
            this.minCustomrePerHour
        )
      );
    }
  },

  // found averagCustomrePerHour and do totalCustomrePerHour
  salesCustomrePerHourAv: function () {
    for (let i = 0; i < hoursCookies.length; i++) {
      this.salesCustomrePerHour.push(
        Math.ceil(this.randomeCustomrePerHour[i] * this.averagCustomrePerHour)
      );
      //assign value to totalCustomrePerHour
      this.totalCustomrePerHour += this.salesCustomrePerHour[i];
    }
  },
  // add Html Elements
  renderDataInHtml: function () {
    //define conatner to render Element
    let container = document.getElementById("container");
    //define title Seattle
    let h3Element = document.createElement("h3");
    // append h3 to conatiner
    container.appendChild(h3Element);
    // assign value to h3
    h3Element.textContent = this.StoreName;
    //define create unorder list
    let ulElement = document.createElement("ul");
    //append unorder list to container
    container.appendChild(ulElement);

    for (let index = 0; index < hoursCookies.length; index++) {
      let liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.textContent = `${hoursCookies[index]}:${this.salesCustomrePerHour[index]} cookies`;
    }
  },
};
//called function
tokyoCookies.randomeCustomrePerHourNumber(
  tokyoCookies.minCustomrePerHour,
  tokyoCookies.maxCustomrePerHour
);

tokyoCookies.salesCustomrePerHourAv();
tokyoCookies.renderDataInHtml();
/*********************************************************** */

//Dubai
/*********************************************************** */

let DubaiCookies = {
  //define max&min&average
  StoreName: "Dubai",
  maxCustomrePerHour: 65,
  minCustomrePerHour: 23,
  averagCustomrePerHour: 6.3,
  randomeCustomrePerHour: [],
  salesCustomrePerHour: [],

  totalCustomrePerHour: 0,

  //found randome randomeCustomrePerHour number
  randomeCustomrePerHourNumber: function (min, max) {
    for (let randhour = 0; randhour < hoursCookies.length; randhour++) {
      this.randomeCustomrePerHour.push(
        Math.floor(
          Math.random() *
            (this.maxCustomrePerHour - this.minCustomrePerHour + 1) +
            this.minCustomrePerHour
        )
      );
    }
  },

  // found averagCustomrePerHour and do totalCustomrePerHour
  salesCustomrePerHourAv: function () {
    for (let i = 0; i < hoursCookies.length; i++) {
      this.salesCustomrePerHour.push(
        Math.ceil(this.randomeCustomrePerHour[i] * this.averagCustomrePerHour)
      );
      //assign value to totalCustomrePerHour
      this.totalCustomrePerHour += this.salesCustomrePerHour[i];
    }
  },
  // add Html Elements
  renderDataInHtml: function () {
    //define conatner to render Element
    let container = document.getElementById("container");
    //define title Seattle
    let h3Element = document.createElement("h3");
    // append h3 to conatiner
    container.appendChild(h3Element);
    // assign value to h3
    h3Element.textContent = this.StoreName;
    //define create unorder list
    let ulElement = document.createElement("ul");
    //append unorder list to container
    container.appendChild(ulElement);

    for (let index = 0; index < hoursCookies.length; index++) {
      let liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.textContent = `${hoursCookies[index]}:${this.salesCustomrePerHour[index]} cookies`;
    }
  },
};
//called function
DubaiCookies.randomeCustomrePerHourNumber(
  DubaiCookies.minCustomrePerHour,
  DubaiCookies.maxCustomrePerHour
);

DubaiCookies.salesCustomrePerHourAv();
DubaiCookies.renderDataInHtml();
//******************************************** */

//Paris
/*********************************************************** */

let ParisCookies = {
  //define max&min&average
  StoreName: "Paris",
  maxCustomrePerHour: 65,
  minCustomrePerHour: 23,
  averagCustomrePerHour: 6.3,
  randomeCustomrePerHour: [],
  salesCustomrePerHour: [],

  totalCustomrePerHour: 0,

  //found randome randomeCustomrePerHour number
  randomeCustomrePerHourNumber: function (min, max) {
    for (let randhour = 0; randhour < hoursCookies.length; randhour++) {
      this.randomeCustomrePerHour.push(
        Math.floor(
          Math.random() *
            (this.maxCustomrePerHour - this.minCustomrePerHour + 1) +
            this.minCustomrePerHour
        )
      );
    }
  },

  // found averagCustomrePerHour and do totalCustomrePerHour
  salesCustomrePerHourAv: function () {
    for (let i = 0; i < hoursCookies.length; i++) {
      this.salesCustomrePerHour.push(
        Math.ceil(this.randomeCustomrePerHour[i] * this.averagCustomrePerHour)
      );
      //assign value to totalCustomrePerHour
      this.totalCustomrePerHour += this.salesCustomrePerHour[i];
    }
  },
  // add Html Elements
  renderDataInHtml: function () {
    //define conatner to render Element
    let container = document.getElementById("container");
    //define title Seattle
    let h3Element = document.createElement("h3");
    // append h3 to conatiner
    container.appendChild(h3Element);
    // assign value to h3
    h3Element.textContent = this.StoreName;
    //define create unorder list
    let ulElement = document.createElement("ul");
    //append unorder list to container
    container.appendChild(ulElement);

    for (let index = 0; index < hoursCookies.length; index++) {
      let liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.textContent = `${hoursCookies[index]}:${this.salesCustomrePerHour[index]} cookies`;
    }
  },
};
//called function
ParisCookies.randomeCustomrePerHourNumber(
  ParisCookies.minCustomrePerHour,
  ParisCookies.maxCustomrePerHour
);

ParisCookies.salesCustomrePerHourAv();
ParisCookies.renderDataInHtml();
/**************************** */

//Lima
/*********************************************************** */

let LimaCookies = {
  //define max&min&average
  StoreName: "Lima",
  maxCustomrePerHour: 65,
  minCustomrePerHour: 23,
  averagCustomrePerHour: 6.3,
  randomeCustomrePerHour: [],
  salesCustomrePerHour: [],

  totalCustomrePerHour: 0,

  //found randome randomeCustomrePerHour number
  randomeCustomrePerHourNumber: function (min, max) {
    for (let randhour = 0; randhour < hoursCookies.length; randhour++) {
      this.randomeCustomrePerHour.push(
        Math.floor(
          Math.random() *
            (this.maxCustomrePerHour - this.minCustomrePerHour + 1) +
            this.minCustomrePerHour
        )
      );
    }
  },

  // found averagCustomrePerHour and do totalCustomrePerHour
  salesCustomrePerHourAv: function () {
    for (let i = 0; i < hoursCookies.length; i++) {
      this.salesCustomrePerHour.push(
        Math.ceil(this.randomeCustomrePerHour[i] * this.averagCustomrePerHour)
      );
      //assign value to totalCustomrePerHour
      this.totalCustomrePerHour += this.salesCustomrePerHour[i];
    }
  },
  // add Html Elements
  renderDataInHtml: function () {
    //define conatner to render Element
    let container = document.getElementById("container");
    //define title Seattle
    let h3Element = document.createElement("h3");
    // append h3 to conatiner
    container.appendChild(h3Element);
    // assign value to h3
    h3Element.textContent = this.StoreName;
    //define create unorder list
    let ulElement = document.createElement("ul");
    //append unorder list to container
    container.appendChild(ulElement);

    for (let index = 0; index < hoursCookies.length; index++) {
      let liElement = document.createElement("li");
      ulElement.appendChild(liElement);
      liElement.textContent = `${hoursCookies[index]}:${this.salesCustomrePerHour[index]} cookies`;
    }
  },
};
//called function
LimaCookies.randomeCustomrePerHourNumber(
  LimaCookies.minCustomrePerHour,
  LimaCookies.maxCustomrePerHour
);

LimaCookies.salesCustomrePerHourAv();
LimaCookies.renderDataInHtml();
