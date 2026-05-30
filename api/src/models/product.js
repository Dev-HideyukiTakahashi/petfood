const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    petshop_id: {
      type: Schema.Types.ObjectId,
      ref: 'Petshop',
      required: true,
    },
    nome: { type: String, required: true },
    capa: { type: String },
    preco: { type: Number, required: true },
    avaliacoes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Product', productSchema);
