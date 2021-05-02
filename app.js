"use strict";

let list = ["am", "pm"];

// define object
let shop = {
  arraryCookies: [16, 20, 35, 48, 56, 77, 93, 144, 119, 84, 61, 23, 42, 57],
  maxHour: 0,
  minHour: 0,
  averageHoure: 0,
  total: 0,
  //found randome max number
  DataMaxHour: function (max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.maxHour = Math.floor(Math.random() * (max - min - 1) + min);
  },
  //found randome min number
  DataMinHour: function (max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.minHour = Math.floor(Math.random() * (max - min + 1) + min);
    // push min number to array let mixN = [];
  },

  //found randome type time pm or am
  get_random: function (list) {
    return list[Math.floor(Math.random() * list.length)];
  },
  get_random_cookikes: function (cookie) {
    return cookie[Math.floor(Math.random() * cookie.length)];
  },

  drawElements: function () {
    let divElement = document.getElementById("container");
    let articleElement = document.createElement("article");
    divElement.appendChild(articleElement);
    let h2Element = document.createElement("h2");
    h2Element.textContent = "Seattle";
    articleElement.appendChild(h2Element);

    //create unoreder list
    let ulElement = document.createElement("ul");
    articleElement.appendChild(ulElement);
    // create for loop
    for (let i = 0; i < shop.arraryCookies.length; i++) {
      // define liElements to create li elements
      let liElements = document.createElement("li");
      // add content to li
      liElements.textContent =
        this.maxHour +
        " " +
        shop.get_random(list) +
        ":" +
        "  " +
        this.arraryCookies[i] +
        "  cookies";
      ulElement.appendChild(liElements);
      // add ++ to make randome number between 1 to 24 numbers of day hours
      this.maxHour++;
      this.total += this.arraryCookies[i];
    }
    // total cookies
    let litotal = document.createElement("li");
    litotal.textContent = `Total: ${this.total} cookies`;
    ulElement.appendChild(litotal);
  },
};

//add numbers to randome
shop.DataMaxHour(1, 12);
shop.DataMinHour(1, 5);

// called function to draw html elements
shop.drawElements();
