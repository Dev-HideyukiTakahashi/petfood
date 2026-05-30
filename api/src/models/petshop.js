const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petshopSchema = new Schema(
  {
    nome: { type: String, required: true },
    logo: { type: String },
    categoria: { type: String },
    destaque: { type: Number, default: 0 },
    location: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
    recipient_id: { type: String },
  },
  {
    timestamps: true, // Adiciona colunas de criação e atualização automaticamente
  },
);

module.exports = mongoose.model('Petshop', petshopSchema);
