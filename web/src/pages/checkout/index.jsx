import Header from '../../components/header';
import Product from '../../components/product/list';

import './styles.css';

export default function Checkout() {
  return (
    <div className="h-100">
      <Header hideCart={true} />

      <div className="container mt-4">
        <div className="row">
          {/* DADOS */}
          <div className="col-6">
            {/* DADOS ENTREGA */}
            <span className="section-title">Dados de Entrega</span>
            <div className="row mb-3">
              <div className="col-12">
                <input type="text" placeholder="CEP" className="form-control form-control-lg" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input type="text" placeholder="Cidade" className="form-control form-control-lg" />
              </div>
              <div className="col-6 ps-0">
                <input
                  type="text"
                  placeholder="Logradouro"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-5">
                <input type="text" placeholder="Número" className="form-control form-control-lg" />
              </div>
              <div className="col-5 ps-0">
                <input type="text" placeholder="Bairro" className="form-control form-control-lg" />
              </div>
              <div className="col-2 ps-0">
                <input type="text" placeholder="UF" className="form-control form-control-lg" />
              </div>
            </div>

            {/* DADOS DE PAGAMENTO */}
            <span className="section-title">Dados de Pagamento</span>
            <div className="row mb-3">
              <div className="col-12">
                <input
                  type="text"
                  placeholder="Número do Cartão"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Validade"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 ps-0">
                <input type="text" placeholder="CVV" className="form-control form-control-lg" />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <input
                  type="text"
                  placeholder="Nome do Titular"
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-6 ps-0">
                <input type="text" placeholder="CPF" className="form-control form-control-lg" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 d-flex justify-content-between align-items-center mb-2">
                <b>Total</b>
                <h3>R$ 30,00</h3>
              </div>
              <div className="col-12">
                <button className="btn w-100 btn-lg btn-primary">Finalizar Compra</button>
              </div>
            </div>
          </div>

          {/* CARRINHO */}
          <div className="col-6">
            <div className="box col mb-4 box-sidebar">
              <h5>Minha Sacola(7)</h5>

              <div className="row products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
