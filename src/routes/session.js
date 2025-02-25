const { Router } = require('express');

const models = require('../models/index')
const router = Router();

router.get('/', (req, res) => {
  return res.send(models.users[models.me.id]);
});

module.exports = router;