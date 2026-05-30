import './styles.css';

export default function Product() {
  return (
    <div className="product-list col-12">
      <div className="row">
        <div className="col-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzPEYR-raSV7IVTP5G1eLJfG7HhnAnnDjNqQ&s"
            alt="imagem"
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h6>
            <label className="badge bg-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>Ração de Cachorro Pedigree Carne, Frango e Cereais Para Adultos 900g</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary rounded-circle">-</button>
        </div>
      </div>
    </div>
  );
}
