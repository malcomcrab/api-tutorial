const { v4: uuidv4 } = require('uuid');
const { Router } = require ('express');

const models = require('../models/index')
const router = Router();

router.get('/', (req, res) => {
  return res.send(Object.values(models.messages));
});

router.get('/:messageId', (req, res) => {
  return res.send(models.messages[req.params.messageId]);
});

router.post('/', (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userId: models.me.id,
  };

  models.messages[id] = message;

  return res.send(message);
});

router.delete('/:messageId', (req, res) => {
  const {
    [req.params.messageId]: message,
    ...otherMessages
  } = models.messages;

  models.messages = otherMessages;

  return res.send(message);
});

module.exports = router;