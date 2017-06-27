// src/services/batches/batches.hooks.js

const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner, associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');
const { populate } = require('feathers-hooks-common');

// const studentSchema = {
//   include: {
//     // needs to change, students are not users. can they come from batches???
//     // Maybe better to make seperate student service
//     service: 'batches', // does this work??
//     nameAs: 'students',
//     parentField: 'studentId',
//     childField: '_id',
//   }
// };

// const create = require('../../hooks/create-game')


const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];


module.exports = {
  before: {
    all: [

      // Don't need this because only teachers can login.
      // associateCurrentUser({ as: 'authorId' }),
    ],
    find: [],
    get: [],
    create: [...restrict],
    update: [...restrict],
    patch: [...restrict],
    remove: [...restrict]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
