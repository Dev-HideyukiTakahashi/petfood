import { useState } from 'react';
import Header from '../../components/header';
import Shop from '../../components/shop';
import PetShopMap from '../../components/Map';
import './styles.css';

export default function Home() {
  const [petshops, setPetshops] = useState([
    { _id: '1', nome: 'Petlove', latitude: -23.5545, longitude: -46.6373 },
    { _id: '2', nome: 'Petz', latitude: -23.5615, longitude: -46.6553 },
    { _id: '3', nome: 'Cobasi', latitude: -23.5435, longitude: -46.6213 },
  ]);

  // Variável de dados descritiva para o item selecionado
  const [selectedPetshopId, setSelectedPetshopId] = useState(null);

  // Função de evento padronizada com o prefixo 'handle'
  const handleSelectPetshop = id => {
    setSelectedPetshopId(id);
  };

  return (
    <div className="h-100 d-flex flex-column">
      <Header hideCart={true} />

      <div className="container-fluid petshop-list-container py-3">
        <div className="col-12 text-center mb-3">
          <h5 className="fw-bold text-secondary">
            Mais próximos de você encontrados ({petshops.length})
          </h5>
        </div>

        <ul className="petshop-list-grid d-flex flex-column flex-wrap gap-3 list-unstyled m-0 p-0">
          {petshops.map(shop => (
            <Shop
              key={shop._id}
              dados={shop}
              isSelected={shop._id === selectedPetshopId}
              onSelect={handleSelectPetshop}
            />
          ))}
        </ul>
      </div>

      <div className="flex-grow-1 google-map-container position-relative">
        {/* O mapa agora escuta qual ID está ativo e reage a ele */}
        <PetShopMap
          petshops={petshops}
          selectedPetshopId={selectedPetshopId}
          onSelectMarker={handleSelectPetshop}
        />
      </div>
    </div>
  );
}
