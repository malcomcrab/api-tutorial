const dotenv = require('dotenv/config');
const express = require("express");
const app = express();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.me = users[1];
  next();
});

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

  app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
  });
  
  app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
  });

  app.post('/messages', (req, res) => {
    const id =  uuidv4();
    const message = {
      id,
      text: req.body.text,
      userId: req.me.id,
    };
  
    messages[id] = message;
  
    return res.send(message);
  });

  app.delete('/messages/:messageId', (req, res) => {
    const {
      [req.params.messageId]: message,
      ...otherMessages
    } = messages;
  
    messages = otherMessages;
  
    return res.send(message);
  });

  app.get('/session', (req, res) => {
    return res.send(users[req.me.id]);
  });
  
app.listen(process.env.LOCALPORT, () => {
  console.log(`My first Express app - listening on port ${process.env.LOCALPORT}!`);
});
