const Basket = require("./basket");
const Candy = require("./candy");

describe('Basket.addItem', () => {
    
  it('adds an item to the basket', () => {
    let testBasket = new Basket();
    let testCandyMars = new Candy('Mars', 4.99);

    expect(testBasket.addItem(testCandyMars)).toEqual([testCandyMars])
  });
});

describe('Basket.getTotalPrice', () => {
  it('returns zero when basket is empty', () => {
    let testBasket = new Basket();
    expect(testBasket.getTotalPrice()).toEqual(0)
  });

  it('returns total price of basket items', () => {
    let testBasket = new Basket();
    let testCandyMars = new Candy('Mars', 4.99);
    let testCandySkittles = new Candy('Skittles', 3.45);
    
    testBasket.addItem(testCandyMars);
    expect(testBasket.getTotalPrice()).toEqual(4.99);
    testBasket.addItem(testCandySkittles);
    expect(testBasket.getTotalPrice()).toEqual(8.44);
    testBasket.addItem(testCandySkittles);
    expect(testBasket.getTotalPrice()).toEqual(11.89);
  });

});