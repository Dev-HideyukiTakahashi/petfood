import './styles.css';

export default function Shop({ dados, isSelected, onSelect }) {
  // Variável de dados descritiva para evitar repetição do objeto dados
  const petshopId = dados?._id || dados?.id;
  const petshopNome = dados?.nome || 'Petshop';

  // Função de evento padronizada seguindo as boas práticas 'handle'
  const handleCardClick = () => {
    if (petshopId) {
      onSelect(petshopId);
    }
  };

  // Padrão de Projeto Fallback: Troca a logo dinamicamente para o layout ficar idêntico ao Figma
  const getLogoUrl = name => {
    const formatted = String(name).toLowerCase();
    if (formatted.includes('petz'))
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSlK3Hl3TEdI9APD4cJCniP4yR0eS6KFSC2w&s';
    if (formatted.includes('cobasi'))
      return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVulG4pibBQbPYgovoBWy_c76HJHqPRoIJmQ&s';
    return 'https://franquias360.com.br/wp-content/uploads/2024/07/pet-love-franquia-logo.jpg';
  };

  return (
    <li
      className={`petshop-card d-flex align-items-center bg-white p-2 rounded-2 ${isSelected ? 'active' : ''}`}
      onClick={handleCardClick}
    >
      <div className="petshop-logo-container flex-shrink-0 me-2">
        <img
          src={getLogoUrl(petshopNome)}
          alt={petshopNome}
          className="w-100 h-100 object-fit-contain rounded"
        />
      </div>

      <div className="petshop-content flex-grow-1">
        {/*  Agora renderiza dinamicamente Petlove, Petz ou Cobasi */}
        <b className="petshop-title text-dark d-block mb-1">{petshopNome}</b>

        <div className="petshop-infos d-flex align-items-center gap-1 text-secondary mb-1">
          <span className="mdi mdi-star text-warning"></span>
          <b className="text-dark">2,8</b>
          <span className="mx-1">•</span>
          <span className="mdi mdi-cash text-muted"></span>
          <span>$$$</span>
          <span className="mx-1">•</span>
          <span className="mdi mdi-crosshairs-gps text-muted"></span>
          <span>2,9km</span>
        </div>

        <span className="badge bg-success-subtle text-success fw-normal petshop-badge">
          Frete Grátis
        </span>
      </div>
    </li>
  );
}
