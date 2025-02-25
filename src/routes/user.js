const { Router } = require('express');
const models = require('../models/index')

const router = Router();
console.log(models)
router.get('/', (req, res) => {
  return res.send(Object.values(models.users));
});

router.get('/:userId', (req, res) => {
  return res.send(req.context.models.users[req.params.userId]);
});

module.exports = router;