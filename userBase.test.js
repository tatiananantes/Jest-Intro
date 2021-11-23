const UserBase = require("./userBase");
const User = require("./user");

describe("UserBase", () => {
  const users = [new User("Uma"), new User("Josh"), new User("Ollie")];
  const userBase = new UserBase(users);

  it("returns amount of users", () => {
    expect(userBase.count()).toBe(3);
  });

  it("returns all the names of users", () => {
    expect(userBase.getNames()).toEqual(["Uma", "Josh", "Ollie"]);
  });

  it("returns all the introductions of users", () => {
    expect(userBase.getIntroductions()).toEqual([
      "Hi, my name is Uma",
      "Hi, my name is Josh",
      "Hi, my name is Ollie",
    ]);
  });
});
