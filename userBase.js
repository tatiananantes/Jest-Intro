class UserBase {
  constructor(users) {
    this.users = users;
  }

  count() {
    return this.users.length;
  }

  getNames() {
    return this.users.map((person) => person.getName());
  }

  getIntroductions() {
    return this.users.map((person) => person.getIntroduction());
  }
}

module.exports = UserBase;
