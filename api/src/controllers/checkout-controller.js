const { MercadoPagoConfig, Payment } = require('mercadopago');
const Petshop = require('../models/petshop');

// VARIÁVEL DE DADOS: Captura o token real carregado do ambiente
const mpToken = process.env.MERCADOPAGO_ACCESS_TOKEN;
let paymentConfig = null;

// Validação mais inteligente: Verifica se o token existe e tem o tamanho mínimo de uma chave real
if (mpToken && mpToken.length > 20) {
  console.log('🔌 [Mercado Pago] SDK Inicializado com Token Real de Testes.');
  const client = new MercadoPagoConfig({ accessToken: mpToken });
  paymentConfig = new Payment(client);
} else {
  console.log(
    '✨ [Modo Estudo] Token real não detectado ou inválido. Rodando em Modo Emulado (Mock).',
  );
}

const handleProcessCheckout = async (req, res) => {
  try {
    const { petshopId, totalAmount, payerEmail } = req.body;

    if (!petshopId || !totalAmount || !payerEmail) {
      return res.status(400).json({ error: true, message: 'Dados incompletos.' });
    }

    const currentPetshop = await Petshop.findById(petshopId).select('recipient_id nome');
    if (!currentPetshop) {
      return res.status(404).json({ error: true, message: 'Petshop não encontrado.' });
    }

    // --- Se o token real foi validado e carregado lá em cima ---
    if (paymentConfig) {
      const paymentData = {
        body: {
          transaction_amount: Number(totalAmount),
          description: `Pedido PetFood - ${currentPetshop.nome}`,
          payment_method_id: 'pix',
          payer: { email: payerEmail },
          metadata: {
            petshop_id: currentPetshop._id,
            marketplace_seller_id: currentPetshop.recipient_id,
          },
        },
      };

      const mpResponse = await paymentConfig.create(paymentData);

      return res.status(200).json({
        error: false,
        source: 'Mercado Pago API',
        status: mpResponse.status,
        paymentId: mpResponse.id,
        qrCodeBase64: mpResponse.point_of_interaction.transaction_data.qr_code_base64,
        qrCodeCopiaECola: mpResponse.point_of_interaction.transaction_data.qr_code,
      });
    }

    // --- MODO DE FALLBACK / EMULAÇÃO ---
    const mockRandomHash = Math.random().toString(36).substring(2, 15).toUpperCase();
    return res.status(200).json({
      error: false,
      source: 'Emulador Interno Local',
      status: 'pending',
      paymentId: Math.floor(1000000000 + Math.random() * 9000000000),
      qrCodeBase64:
        'iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz9eiAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUHNQY',
      qrCodeCopiaECola: `00020101021226830014BR.GOV.BCB.PIX2561330003000${mockRandomHash}`,
    });
  } catch (err) {
    console.error('❌ Erro no checkout:', err.message);
    return res.status(500).json({ error: true, message: err.message });
  }
};

module.exports = { handleProcessCheckout };
