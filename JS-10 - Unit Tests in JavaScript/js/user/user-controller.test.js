const UserController = require("./user-controller");
const User = require("./user");

const Controller = new UserController();

beforeEach(() => {
  //const Controller = new UserController ();
  let user = new User(1235,"Santiago", "santiago@generation.org");
  Controller.add(user); 
  user = new User(1234,"Denise", "denise@gmail.com")
  Controller.add(user); 
  return Controller;

});

afterEach(() => {
  user = new User(1235,"Santiago", "santiago@generation.org");
  Controller.remove(user); 
  user = new User(1234,"Denise", "denise@gmail.com")
  Controller.remove(user);
});

test('add user to Controller', () => {    
    user = new User(1235,"Santiago", "santiago@generation.org");
    Controller.add(user);    
    expect(Controller.getUsers()).toContain(user);
  });

test('remove user to Controller', () => {    
    user = new User(1234,"Santiago", "santiago@generation.org");
    Controller.add(user);    
    Controller.remove(user);
    expect(Controller.users).not.toContain(user);
  });

test('add user not in list', () => {
  user = new User(1235,"Denise", "denise@gmail.com")
  Controller.add(user);
  expect(Controller.users).toContain(user);
});

test('remove user not in list', () => {
  user = new User(1234,"Denise", "denise@gmail.com")
  Controller.remove(user);
  expect(Controller.remove(user)).toEqual(undefined);
})



test('find user by email', () => {
  expect(Controller.findByEmail('denise@gmail.com')).toEqual({"email": "denise@gmail.com", "id":1234, "name": "Denise"})
});

test('find user by id', () => {
 expect(Controller.findById(1234)).toEqual({"email": "denise@gmail.com", "id":1234, "name": "Denise"})
});




