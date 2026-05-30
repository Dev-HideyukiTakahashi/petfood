import { useEffect, useState } from 'react';
import Product from '../product/list';
import './styles.css';

export default function Sidebar() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    const handleOpenCart = () => {
      setIsOpened(true);
    };

    window.addEventListener('openCart', handleOpenCart);

    return () => {
      window.removeEventListener('openCart', handleOpenCart);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-sidebar bg-dark text-white d-flex flex-column ${isOpened ? 'opened' : ''}`}
      >
        {/* Cabeçalho fixo da barra lateral */}
        <div className="sidebar-header d-flex justify-content-between align-items-center p-4 border-bottom border-secondary">
          <h5 className="mb-0">Minha Sacola (13)</h5>
          <button className="btn-close btn-close-white" onClick={() => setIsOpened(false)}></button>
        </div>

        {/* Área de conteúdo rolável */}
        <div className="sidebar-content flex-grow-1 overflow-y-auto p-4">
          <div className="products-list row g-3">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>

        {/* Rodapé fixo da barra lateral */}
        <div className="sidebar-footer row pt-4 mt-auto border-top border-secondary p-4">
          <div className="col-12 d-flex justify-content-between align-items-center mb-3">
            <b className="text-muted">Total</b>
            <h3 className="mb-0 text-success fw-bold">R$ 90,00</h3>
          </div>
          <div className="col-12">
            <button className="btn w-100 btn-lg btn-primary rounded-1 fw-bold">
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>

      {isOpened && <div className="sidebar-backdrop" onClick={() => setIsOpened(false)}></div>}
    </>
  );
}
