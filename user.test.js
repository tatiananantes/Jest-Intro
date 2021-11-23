const User = require('./user');

describe('User', () => {
  const user = new User('Uma')
  it('returns a name', () => {
    expect(user.getName()).toBe('Uma')
  });
  it('returns an introduction', () => {
    expect(user.getIntroduction()).toBe('Hi, my name is Uma')
  });

  
});