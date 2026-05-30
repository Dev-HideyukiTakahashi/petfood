const Petshop = require('../models/petshop');
const Product = require('../models/product');
const petshopsData = require('../data/petfood.json');

require('../database');

const handleSeedDatabase = async () => {
  try {
    console.log('🔄 [Seed] Limpando coleções antigas para evitar duplicidade...');
    await Petshop.deleteMany({});
    await Product.deleteMany({});

    console.log('🚀 [Seed] Populando banco de dados com chaves de marketplace...');

    for (let item of petshopsData) {
      const newPetshop = await new Petshop(item).save();

      const formattedProducts = item.produtos.map(product => ({
        ...product,
        petshop_id: newPetshop._id, // Vincula a chave estrangeira do produto ao ID gerado do Petshop
      }));

      await Product.insertMany(formattedProducts);
      console.log(`✅ Banco populado para: ${newPetshop.nome} -> ID: ${newPetshop.recipient_id}`);
    }

    console.log('✨ [Seed] Carga inicial executada com sucesso absoluto!');
    process.exit(0);
  } catch (err) {
    console.error('❌ [Seed] Erro fatal durante a execução:', err.message);
    process.exit(1);
  }
};

handleSeedDatabase();
