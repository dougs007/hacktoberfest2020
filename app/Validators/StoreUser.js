'use strict'

class StoreUser {
  get rules () {
    return {
      name: 'required' ,
      occupation: 'required',
      email: 'required|email|unique:users',
      password: 'required'
    }
  }
}

module.exports = StoreUser
