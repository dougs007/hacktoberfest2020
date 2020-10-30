'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('/users', () => {
  return [
    {name: 'Douglas',  age: 21, occupation: 'Developer'},
    {name: 'João',     age: 21, occupation: 'Analyst'},
    {name: 'John Doe', age: 21, occupation: 'Scrum Master'},
  ];
});
