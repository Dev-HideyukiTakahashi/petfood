import './styles.css';

export default function Card() {
  return (
    <div className="product col-3">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZWx8HW3osowDm70UT7UVd-wnM8r6Ku-Nerg&s"
        alt="produto"
        className="img-fluid align-items-center"
      />

      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        <label className="badge bg-primary">R$ 90,00</label>
      </h4>
      <small>
        <b>Ração Golden para Cães Adultos Raças Pequenas Sabor Carne e Arroz 15Kg</b>
      </small>
    </div>
  );
}
