'use strict'
const User = use('App/Models/User');

class UserController {
  /*getUsers() {
    return [
      { id: 1, name: 'Douglas', age: 21, occupation: 'Developer' },
      { id: 2, name: 'João', age: 21, occupation: 'Analyst' },
      { id: 3, name: 'John Doe', age: 21, occupation: 'Scrum Master' },
    ];
  }*/

  async index() {
    const users = await User.all();

    return users;
  }

  async show({ params }) {
    const user = await User.findOrFail(paramsasync .id)

    return user;
  }
}

module.exports = UserController
