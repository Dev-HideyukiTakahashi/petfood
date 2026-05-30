import Header from '../../components/header';
import Card from '../../components/product/card';

import './styles.css';

export default function PetShop() {
  return (
    <div className="h-100">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src="https://franquias360.com.br/wp-content/uploads/2024/07/pet-love-franquia-logo.jpg"
              alt="pet-love"
              className="img-fluid mb-2"
            />
            <b>Petlove</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <span>
                <b className="text">2,8</b>
                <span className="mdi mdi-cash"></span>
                <span className="text">$$$</span>
                <span className="mdi mdi-crosshairs-gps"></span>
                <span className="text">2,9km </span>
              </span>
            </div>

            <label className="badge bg-primary">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h5 className="mb-3">Produtos</h5>

            <div className="row">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
