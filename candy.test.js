const Candy = require("./candy");
const candy = new Candy('Mars', 4.99);

describe('Candy', () => {

  it('returns Mars', () => {
    expect(candy.getName()).toBe('Mars');
  });

  it('returns price', () => {
    expect(candy.getPrice()).toEqual(4.99);
  });

});