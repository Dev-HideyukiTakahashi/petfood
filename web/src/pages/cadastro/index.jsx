import Illustration from '../../assets/illustration.png';
import Header from '../../components/header';

export default function Cadastro() {
  return (
    <div className="container-fluid bg-primary h-100">
      <Header whiteVersion={true} hideCart={true} />

      <div className="row mt-5">
        <div className="col-6 my-auto text-end">
          <img src={Illustration} alt="illustration" className="img-fluid" />
        </div>
        <div className="col-6">
          <div className="box col-8">
            <h2 className="text-center mb-5">Falta pouco pra fazer o seu pet feliz.</h2>
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Nome Completo"
            />
            <input type="text" className="form-control form-control-lg mb-3" placeholder="Email" />
            <input
              type="text"
              className="form-control form-control-lg mb-3"
              placeholder="Telefone"
            />
            <input type="text" className="form-control form-control-lg mb-3" placeholder="CPF" />
            <input
              type="date"
              className="form-control form-control-lg mb-3"
              placeholder="Data de nascimento"
            />

            <button className="btn btn-lg w-100 btn-secondary">Finalizar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}
