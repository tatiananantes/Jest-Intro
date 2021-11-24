const Basket = require("./basket");
const Candy = require("./candy");

describe('Basket.addItem', () => {
    
  it('adds an item to the basket', () => {
    let testBasket = new Basket();
    let testCandyMars = new Candy('Mars', 4.99);

    expect(testBasket.addItem(testCandyMars)).toEqual([testCandyMars])
  });
});

