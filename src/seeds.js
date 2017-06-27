// src/seeds.js

const feathers = require('feathers/client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication-client');

const user = {
  email: 'jesse@test.nl',
  password: 'qwe123'
}

const batches = [
  {
    batchNumber: '11',
    starts: new Date(2017, 05, 15), //string and then with time T
    ends: new Date(2017, 07, 12),
    students: [
    {
      fullName: 'Han',
      picture: 'https://s-media-cache-ak0.pinimg.com/736x/34/ba/bc/34babc4956f8e334c3036747d8b8a3dc--monsters-university-disney-characters.jpg',
      evaluation: {
        date: new Date(2017, 05, 15),
        color: "green",
        remark: "excellent"
      }
    },
    {
      fullName: 'Maressa',
      picture: 'https://s-media-cache-ak0.pinimg.com/736x/34/ba/bc/34babc4956f8e334c3036747d8b8a3dc--monsters-university-disney-characters.jpg',
      evaluation: {
        date: new Date(2017, 05, 15),
        color: "green",
        remark: "excellent"
      }
    }]
  },
  {
    batchNumber: '12',
    starts: new Date(2017, 09, 15),
    ends: new Date(2017, 11, 12),
    students: [
    {
      fullName: 'Bram',
      picture: 'https://s-media-cache-ak0.pinimg.com/736x/34/ba/bc/34babc4956f8e334c3036747d8b8a3dc--monsters-university-disney-characters.jpg',
      evaluation: {
        date: new Date(2017, 05, 15),
        color: "red",
        remark: "Do better!"
      }
    },
    {
      fullName: 'Ann',
      picture: 'https://s-media-cache-ak0.pinimg.com/736x/34/ba/bc/34babc4956f8e334c3036747d8b8a3dc--monsters-university-disney-characters.jpg',
      evaluation: {
        date: new Date(2017, 05, 15),
        color: "yellow",
        remark: "Go, go , go!!"
      }
    }]
  }
]

const feathersClient = feathers();

feathersClient
  .configure(hooks())
  .configure(rest('http://localhost:3030').superagent(superagent))
  .configure(auth());

feathersClient.service('users').create(user)
.then(() => {
  feathersClient.authenticate({
    strategy: 'local',
    email: user.email,
    password: user.password
  })
  .then(() => {
    batches.map((batch) => {
      feathersClient.service('batches').create(batch)
        .then((result) => {
          console.log('Batch seeded...', result.batchNumber);
        }).catch((error) => {
          console.error('Error seeding batch!', error.message);
        });
    })
  })
  .catch(function(error){
    console.error('Error authenticating!', error);
  });
})
.catch(function(error) {
  console.error('Error creating user!');
});
