'use strict'

class UserController {
  getUsers() {
    return [
      { id: 1, name: 'Douglas', age: 21, occupation: 'Developer' },
      { id: 2, name: 'João', age: 21, occupation: 'Analyst' },
      { id: 3, name: 'John Doe', age: 21, occupation: 'Scrum Master' },
    ];
  }

  index({ request, response }) {

    return response.send(this.getUsers());
  }

  show({ params }) {
    return this.getUsers().filter(u => (u.id == params.id));
  }
}

module.exports = UserController
