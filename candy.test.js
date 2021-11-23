const Candy = require("./candy");

describe('Candy', () => {
  // const candies = [['Aero', 1.99], ['Skitties', 2.99], ['Maltesers', 3.49],
  // ['Mars', 1.49], ['Skittles', 1.49], ['Starburst', 5.99], ['Ricola', 1.99],
  // ['Polkagris', 5.99], ['Pastila', 4.99], ['Mentos', 8.99],
  // ['Raffaello', 7.99], ['Gummi bears', 10.99], ['Fraise Tagada', 5.99]];
  
  const candy = new Candy('Mars', 4.99);

  it('returns Mars', () => {
    expect(candy.getName()).toBe('Mars');
  });

  it('returns price', () => {
    expect(candy.getPrice()).toBe(4.99);
  });

});