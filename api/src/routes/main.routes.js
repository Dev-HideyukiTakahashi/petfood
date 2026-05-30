const express = require('express');
const router = express.Router();

const paymentRoutes = require('./payment.routes');

router.get('/', (req, res) => {
  try {
    res.json({ error: false, message: 'Hello World' });
  } catch (error) {
    res.json({ error: true, message: error.message });
  }
});

router.use('/payment', paymentRoutes);

module.exports = router;
