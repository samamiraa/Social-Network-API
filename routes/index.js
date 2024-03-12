// imports express & files from api folder
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// default if wrong route is used
router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports = router;
