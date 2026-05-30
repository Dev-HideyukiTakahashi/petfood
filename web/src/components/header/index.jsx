import LogoWhite from '../../assets/logo-white.png';
import Logo from '../../assets/logo.png';

import './styles.css';

export default function Header({ whiteVersion, hideCart }) {
  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };
  return (
    <div className="col-12">
      <header className="py-4 text-center">
        <img src={whiteVersion ? LogoWhite : Logo} alt="logo" className="img-fluid" />
      </header>
      {!hideCart && (
        <button className="btn btn-secondary cart-button" onClick={() => openDrawer()}>
          <span className="mdi mdi-cart"></span> 13 Itens
        </button>
      )}
    </div>
  );
}
