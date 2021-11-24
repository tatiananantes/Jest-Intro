class Basket {
 
  constructor() {
    this.candies = [];
  };
  
  addItem = (candy) => {
    this.candies.push(candy);
    return this.candies;
  };
    
  getTotalPrice = () => {
    if(this.candies.length === 0) {
      return 0;
    } else {
      let candyPrices = this.candies.map(candy => candy.getPrice());
      let totalPrice = candyPrices.reduce((a,b) => a+b);
      return Number(totalPrice.toFixed(2));
      
    };
  };

};


module.exports = Basket;