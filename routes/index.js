const express = require('express');

const router = express.Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use((req, res) =>
  res.send('The route you are trying to access does not exist!')
);

module.exports = router;
