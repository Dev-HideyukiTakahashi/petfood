const express = require('express');
const router = express.Router();
const { handleProcessCheckout } = require('../controllers/checkout-controller');

// Rota para finalizr pagamento com mercado pago
router.post('/checkout/pay', handleProcessCheckout);

module.exports = router;
