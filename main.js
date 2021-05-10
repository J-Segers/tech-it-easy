// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];


// 1a:
// 1) create function
function countLeftOverStock() {
  let sum = 0;
// 2) create new array with leftover stock per tv
  const leftOverStock = inventory.map((item) => {
    return item.originalStock - item.sold;
  });
// 3) add together all indexes of the new array
  for (let i = 0; i < leftOverStock.length; i++) {
    sum += leftOverStock[i];
  }
// 4) return number in a string
  return `${sum}`;
}

const televisions = document.getElementById("televisions");
televisions.textContent = countLeftOverStock(countLeftOverStock());


// 2a
// 5) create a variable array containing the brand type and name for each tv
const typeNames = inventory.map((item) => {
  return item.brand + ' ' + item.type + ' (' + item.name + ')\n';
});

// 2b
// 6) create a variable array containing the items that have been sold out
const noStock = inventory.filter((item) => {
  return item.originalStock - item.sold === 0;
});

// 2c
// 7) create a variable array containing the items that have ambilight
const ambilight = inventory.filter((item) => {
  return item.options.ambiLight;
});

// 2d
// 8) create a function that sorts the inventory by price highest to low
function sortByPrice() {
 return  inventory.sort((a, b) => {
    return a.price - b.price;
  });
}

// 3a
// 9) create a variable array containing the maximum possible profit for each item in the inventory array
const maxProfit = inventory.map((item) => {
  return item.originalStock * item.price;
});

const maxPossibleProfit = document.getElementById("max-profit");
maxPossibleProfit.textContent = calculateProfit(maxProfit);


// 3b
// 10) create a variable array containing the profit made so far for each item in the inventory array
const numSold = inventory.map((item) => {
  return item.price;
});

const currentProfit = document.getElementById("current-profit");
currentProfit.textContent = calculateProfit(numSold);


// 3c
// 11) create a function that takes an array of numbers and returns the sum of all its indexes
function calculateProfit(profit) {
  let sum = 0;

  for (let i = 0; i < profit.length; i++) {
    sum += profit[i];
  }
  return `${sum}`;
}


// 4
let test = nameString(inventory, 2);

function nameString(array, num) {
  const newStr = [];

  for (let i = 0; i < num; i++) {
    newStr.push(`${array[i].brand} ${array[i].type} ${array[i].name}`);
  }

  return newStr;
}


const testTVName = inventory.map( (tvType) => {
  const test = [];
  for (let i = 0; i < 2; i++) {
    test.push(`${tvType.brand} ${tvType.type} ${tvType.name}`);
  }
  return test;
})

console.log(testTVName);

const twoTvs = document.getElementById("two-tvs")

const tvOne = document.createElement("li");
twoTvs.appendChild(tvOne);
tvOne.textContent = test[0];

const tvTwo = document.createElement("li");
twoTvs.appendChild(tvTwo);
tvTwo.textContent = test[1];


// 5a
function formatSingleName(item) {
  return `${item.brand} ${item.type} - ${item.name}`;
}
// 5b
function formatPrice(item) {
  return `€${item.price},-`
}

// 5c
function formatScreenSize(item) {
  const arr = [];
  let converted;
    for (let i = 0; i < item.availableSizes.length; i++) {
      let inches = item.availableSizes[i];
      converted = convertInches(item.availableSizes[i]);
      arr.push(`${inches} inches (${converted}cm)`);
    }
  return arr.join(" | ");
}

function convertInches(inches) {
  return Math.round(inches * 2.54);
}

// 5d
let elementTest = "tv-information-format";
const formatOutput = document.getElementById(elementTest);

let formatOutputLine1 = document.createElement("li");
formatOutput.appendChild(formatOutputLine1);
formatOutputLine1.textContent = formatSingleName(inventory[0]);

let formatOutputLine2 = document.createElement("li");
formatOutput.appendChild(formatOutputLine2);
formatOutputLine2.textContent = formatPrice(inventory[0]);

let formatOutputLine3 = document.createElement("li");
formatOutput.appendChild(formatOutputLine3);
formatOutputLine3.textContent = formatScreenSize(inventory[0]);

// 5e
function setItemPriceTag(item) {
  const position = document.getElementById("info-all-tvs");

  for (let i = 0; i < item.length; i++) {
      let groupedInfo = document.createElement("ul");
      position.appendChild(groupedInfo);

    let groupedInfoLine1 = document.createElement("li");
    groupedInfo.appendChild(groupedInfoLine1);
    groupedInfoLine1.textContent = formatSingleName(item[i]);

    let groupedInfoLine2 = document.createElement("li");
    groupedInfo.append(groupedInfoLine2);
    groupedInfoLine2.textContent = formatPrice(item[i]);

    let groupedInfoLine3 = document.createElement("li");
    groupedInfo.appendChild(groupedInfoLine3);
    groupedInfoLine3.textContent = formatScreenSize(item[i]);
  }

}

setItemPriceTag(inventory);



console.log(countLeftOverStock());
console.log(typeNames);
console.log(noStock);
console.log(ambilight);
console.log("\npriceSort:\n", sortByPrice());
console.log(calculateProfit(maxProfit));
console.log(calculateProfit(numSold));
console.log(nameString(inventory, 2));
console.log(formatSingleName(inventory[0]));
console.log(formatPrice(inventory[0]));
console.log(formatScreenSize(inventory[3]));


// const tvNames = document.getElementById("tv-names");
// tvNames.textContent = typeNames;
// const soldOut = document.getElementById("sold-out");
// soldOut.textContent = noStock;
// const withAmbilight = document.getElementById("ambi-light");
// withAmbilight.textContent = ambilight;
// const priceSort = document.getElementById("price-sort");
// priceSort.textContent = sortByPrice();




