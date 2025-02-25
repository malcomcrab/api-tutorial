const dotenv = require('dotenv/config');
const express = require("express");
const app = express();
const cors = require('cors');

let users = {
    1: {
      id: '1',
      username: 'Robin Wieruch',
    },
    2: {
      id: '2',
      username: 'Dave Davids',
    },
  };
  
  let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };

  app.get('/users', (req, res) => {
    return res.send(Object.values(users));
  });
  
  app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
  });
  
app.listen(process.env.LOCALPORT, () => {
  console.log(`My first Express app - listening on port ${process.env.LOCALPORT}!`);
});
