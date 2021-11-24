class Basket {
 
  constructor() {
    this.candies = [];
  };
  
  addItem = (candy) => {
    this.candies.push(candy);
    return this.candies;
  };
    
}











module.exports = Basket;