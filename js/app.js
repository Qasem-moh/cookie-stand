'use strict';
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
// // define object
let seattleCookies = {
  //define max&min&average
  StoreName: 'Seattle',
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
    let container = document.getElementById('container');
    //define title Seattle
    let h3Element = document.createElement('h3');
    // append h3 to conatiner
    container.appendChild(h3Element);
    // assign value to h3
    h3Element.textContent = this.StoreName;
    //define create unorder list
    let ulElement = document.createElement('ul');
    //append unorder list to container
    container.appendChild(ulElement);

    for (let index = 0; index < hoursCookies.length; index++) {
      let liElement = document.createElement('li');
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

// //tokyo
// /*********************************************************** */

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
// /*********************************************************** */

// //Dubai
// /*********************************************************** */

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
// //******************************************** */

// //Paris
// /*********************************************************** */

// let ParisCookies = {
//   //define max&min&average
//   StoreName: "Paris",
//   maxCustomrePerHour: 65,
//   minCustomrePerHour: 23,
//   averagCustomrePerHour: 6.3,
//   randomeCustomrePerHour: [],
//   salesCustomrePerHour: [],

//   totalCustomrePerHour: 0,

//   //found randome randomeCustomrePerHour number
//   randomeCustomrePerHourNumber: function (min, max) {
//     for (let randhour = 0; randhour < hoursCookies.length; randhour++) {
//       this.randomeCustomrePerHour.push(
//         Math.floor(
//           Math.random() *
//             (this.maxCustomrePerHour - this.minCustomrePerHour + 1) +
//             this.minCustomrePerHour
//         )
//       );
//     }
//   },

//   // found averagCustomrePerHour and do totalCustomrePerHour
//   salesCustomrePerHourAv: function () {
//     for (let i = 0; i < hoursCookies.length; i++) {
//       this.salesCustomrePerHour.push(
//         Math.ceil(this.randomeCustomrePerHour[i] * this.averagCustomrePerHour)
//       );
//       //assign value to totalCustomrePerHour
//       this.totalCustomrePerHour += this.salesCustomrePerHour[i];
//     }
//   },
//   // add Html Elements
//   renderDataInHtml: function () {
//     //define conatner to render Element
//     let container = document.getElementById("container");
//     //define title Seattle
//     let h3Element = document.createElement("h3");
//     // append h3 to conatiner
//     container.appendChild(h3Element);
//     // assign value to h3
//     h3Element.textContent = this.StoreName;
//     //define create unorder list
//     let ulElement = document.createElement("ul");
//     //append unorder list to container
//     container.appendChild(ulElement);

//     for (let index = 0; index < hoursCookies.length; index++) {
//       let liElement = document.createElement("li");
//       ulElement.appendChild(liElement);
//       liElement.textContent = `${hoursCookies[index]}:${this.salesCustomrePerHour[index]} cookies`;
//     }
//   },
// };
// //called function
// ParisCookies.randomeCustomrePerHourNumber(
//   ParisCookies.minCustomrePerHour,
//   ParisCookies.maxCustomrePerHour
// );

// ParisCookies.salesCustomrePerHourAv();
// ParisCookies.renderDataInHtml();
// /**************************** */

// //Lima
// /*********************************************************** */

// let LimaCookies = {
//   //define max&min&average
//   StoreName: "Lima",
//   maxCustomrePerHour: 65,
//   minCustomrePerHour: 23,
//   averagCustomrePerHour: 6.3,
//   randomeCustomrePerHour: [],
//   salesCustomrePerHour: [],

//   totalCustomrePerHour: 0,

//   //found randome randomeCustomrePerHour number
//   randomeCustomrePerHourNumber: function (min, max) {
//     for (let randhour = 0; randhour < hoursCookies.length; randhour++) {
//       this.randomeCustomrePerHour.push(
//         Math.floor(
//           Math.random() *
//             (this.maxCustomrePerHour - this.minCustomrePerHour + 1) +
//             this.minCustomrePerHour
//         )
//       );
//     }
//   },

//   // found averagCustomrePerHour and do totalCustomrePerHour
//   salesCustomrePerHourAv: function () {
//     for (let i = 0; i < hoursCookies.length; i++) {
//       this.salesCustomrePerHour.push(
//         Math.ceil(this.randomeCustomrePerHour[i] * this.averagCustomrePerHour)
//       );
//       //assign value to totalCustomrePerHour
//       this.totalCustomrePerHour += this.salesCustomrePerHour[i];
//     }
//   },
//   // add Html Elements
//   renderDataInHtml: function () {
//     //define conatner to render Element
//     let container = document.getElementById("container");
//     //define title Seattle
//     let h3Element = document.createElement("h3");
//     // append h3 to conatiner
//     container.appendChild(h3Element);
//     // assign value to h3
//     h3Element.textContent = this.StoreName;
//     //define create unorder list
//     let ulElement = document.createElement("ul");
//     //append unorder list to container
//     container.appendChild(ulElement);

//     for (let index = 0; index < hoursCookies.length; index++) {
//       let liElement = document.createElement("li");
//       ulElement.appendChild(liElement);
//       liElement.textContent = `${hoursCookies[index]}:${this.salesCustomrePerHour[index]} cookies`;
//     }
//   },
// };
// // //called function
// LimaCookies.randomeCustomrePerHourNumber(
//   LimaCookies.minCustomrePerHour,
//   LimaCookies.maxCustomrePerHour
// );

// LimaCookies.salesCustomrePerHourAv();
// LimaCookies.renderDataInHtml();

// // ******************************/

// ("use strict");
// // let array of Hours is globale
// let hoursCookies = [
//   "6am",
//   "7am",
//   "8am",
//   "9am",
//   "10am",
//   "11am",
//   "12pm",
//   "1pm",
//   "2pm",
//   "3pm",
//   "4pm",
//   "5pm",
//   "6pm",
//   "7pm",
// ];

// let salesCustomrePerHour = [];
// let totalCustomrePerHour = 0;
// let arrayOfobjects = [];
// let randomeCustomrePerHour = [];

// function SeattleCookies(
//   storeName,
//   maxCustomrePerHour,
//   minCustomrePerHour,
//   averagCustomrePerHour
// ) {
//   this.storeName = storeName;
//   this.maxCustomrePerHour = maxCustomrePerHour;
//   this.minCustomrePerHour = minCustomrePerHour;
//   this.averagCustomrePerHour = averagCustomrePerHour;

//   arrayOfobjects.push(this);
// }

// SeattleCookies.prototype.randomeCustomrePerHourNumber = function (min, max) {
//   for (let randhour = 0; randhour < hoursCookies.length; randhour++) {
//     randomeCustomrePerHour.push(
//       Math.floor(
//         Math.random() *
//           (this.maxCustomrePerHour - this.minCustomrePerHour + 1) +
//           this.minCustomrePerHour
//       )
//     );
//   }
// };
// // found averagCustomrePerHour and do totalCustomrePerHour
// SeattleCookies.prototype.salesCustomrePerHourAv = function () {
//   for (let i = 0; i < hoursCookies.length; i++) {
//     salesCustomrePerHour.push(
//       Math.ceil(randomeCustomrePerHour[i] * this.averagCustomrePerHour)
//     );

//     //assign value to totalCustomrePerHour
//     totalCustomrePerHour += salesCustomrePerHour[i];
//   }
// };

// // add Html Elements
// //************************************************** */
// let Seattle = new SeattleCookies("Seattle", 65, 23, 6.3);
// console.log(totalCustomrePerHour);
// Seattle.randomeCustomrePerHourNumber(
//   Seattle.minCustomrePerHour,
//   Seattle.maxCustomrePerHour
// );
// Seattle.salesCustomrePerHourAv();
// /******************************************************** */
// //************************************************** */
// let Tokyo = new SeattleCookies("Tokyo", 65, 23, 6.3);
// console.log(totalCustomrePerHour);
// Tokyo.randomeCustomrePerHourNumber(
//   // Tokyo.minCustomrePerHour,
//   Tokyo.maxCustomrePerHour
// );
// Tokyo.salesCustomrePerHourAv();
// /******************************************************** */

// /******************************************************* */

// let Dubai = new SeattleCookies("Dubai", 65, 23, 6.3);

// console.log(totalCustomrePerHour);
// Dubai.randomeCustomrePerHourNumber(
//   Dubai.minCustomrePerHour,
//   Dubai.maxCustomrePerHour
// );
// Dubai.salesCustomrePerHourAv();
// /**************************************************** */

// /************************************************** */
// let Paris = new SeattleCookies("Paris", 65, 23, 6.3);

// console.log(totalCustomrePerHour);
// Paris.randomeCustomrePerHourNumber(
//   Paris.minCustomrePerHour,
//   Paris.maxCustomrePerHour
// );
// Paris.salesCustomrePerHourAv();
// /********************************************************* */

// /********************************************************* */
// let Lima = new SeattleCookies("Lima", 65, 23, 6.3);

// console.log(totalCustomrePerHour);
// Lima.randomeCustomrePerHourNumber(
//   Lima.minCustomrePerHour,
//   Lima.maxCustomrePerHour
// );
// Lima.salesCustomrePerHourAv();
// /************************************************************* */

// // SeattleCookies.prototype.renderDataInHtml = function () {
// let container = document.getElementById("container");
// let tableElement = document.createElement("table");
// container.appendChild(tableElement);
// /**************************************** */
// let trElement = document.createElement("tr");
// tableElement.appendChild(trElement);
// /************************************************* */
// let thElement = document.createElement("th");
// trElement.appendChild(thElement);
// thElement.textContent = "Location";
// /**************************************************** */
// for (let i = 0; i < hoursCookies.length; i++) {
//   let thElement2 = document.createElement("th");
//   trElement.appendChild(thElement2);
//   thElement2.textContent = hoursCookies[i];
// }
// let thtotaldaily = document.createElement("th");
// trElement.appendChild(thtotaldaily);
// thtotaldaily.textContent = "Daily Location Total";
// /********************************************** */
// //tokyo
// let trElement2 = document.createElement("tr");
// tableElement.appendChild(trElement2);
// // /******************************************************** */

// trElement.appendChild(thtotaldaily);
// thtotaldaily.textContent = "Daily Location Total";
// /*************************************** */
// let trElement1 = document.createElement("tr");
// tableElement.appendChild(trElement1);
// let tdelement1 = document.createElement("td");
// trElement1.appendChild(tdelement1);
// for (let index = 0; index < arrayOfobjects.length; index++) {
//   console.log(arrayOfobjects.length);

//   tdelement1.textContent = arrayOfobjects[index].storeName;

//   for (let i = 0; i < randomeCustomrePerHour.length; i++) {
//     tdelement1 = document.createElement("td");
//     trElement1.appendChild(tdelement1);
//     tdelement1.textContent += randomeCustomrePerHour[i];
//   }
//   let thtotaldaily2 = document.createElement("td");
//   trElement1.appendChild(thtotaldaily2);
//   thtotaldaily2.textContent = totalCustomrePerHour;
// }

// // /**************************************************** */
// let tdElement2 = document.createElement("td");
// trElement2.appendChild(tdElement2);
// tdElement2.textContent = this.storeName;
// for (let i = 0; i < randomeCustomrePerHour.length; i++) {
//   let tdElement2 = document.createElement("td");
//   trElement2.appendChild(tdElement2);
//   tdElement2.textContent = randomeCustomrePerHour[i];
// }
// let thtotaldaily2 = document.createElement("td");
// trElement2.appendChild(thtotaldaily2);
// thtotaldaily2.textContent = totalCustomrePerHour;
// // finish Tokyo
// /******************************************************** */
// // };
// /*************************************************************** */

// Seattle.renderDataInHtml();
// Tokyo.renderDataInHtml();
// Dubai.renderDataInHtml();
// Paris.renderDataInHtml();
// Lima.renderDataInHtml();

// let thElement0 = document.createElement("th");
// tableElement.appendChild(thElement0);
// thElement0.textContent = "location";
// for (let i = 0; i < hoursCookies.length; i++) {
//   let thElement = document.createElement("th");
//   tableElement.appendChild(thElement);
//   thElement.textContent = hoursCookies[i];
// }
