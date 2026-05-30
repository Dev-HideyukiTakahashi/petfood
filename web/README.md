# 🎬 PetFood - Full Stack

O **PetFood** é uma plataforma robusta de marketplace e e-commerce para petshops.
O ecossistema abrange uma API REST escalável para gerenciamento de dados e regras de negócio, além de uma aplicação Web responsiva.

---

## Design do Projeto (Figma)

Acesse o protótipo interativo e o mapeamento de telas do projeto:
👉 [Link do Projeto no Figma](https://www.figma.com/design/Iee83kGhK4YstiVO7IN0is/PETFOOD?node-id=0-1&t=JzSG1wIBqcLP4z4D-1)

---

## 🛠️ Tecnologias Utilizadas

### Backend (API REST)

- **Node.js & Express** — Ambiente de execução JavaScript server-side.
- **MongoDB & Mongoose** — Banco de dados NoSQL para modelagem e persistência de dados.

### Frontend Web

- **React** — Biblioteca para construção de interfaces componentizadas e SPA (Single Page Application).
- **React-Leaflet & OpenStreetMap** — Integração de mapas interativos de forma 100% open-source e leve, sem dependências de scripts proprietários ou chaves de API pagas.
- **Bootstrap 5 & CSS Moderno** — Estilização responsiva utilizando utilitários nativos.
- **Event-Driven Architecture (DOM Local)** — Comunicação desacoplada entre componentes irmãos (como Header e Sidebar) por meio de eventos customizados nativos (`CustomEvent`), mitigando re-renderizações desnecessárias.

---

# 🐾 PetFood - Marketplace de Petshop &

- [x] **Cadastro e Integração Visual:** Tela de captura de leads e novos usuários estilizada com ilustrações modernas e formulário controlado.
- [x] **Geolocalização e Descoberta (Home):** Integração visual com mapas para exibição de petshops e estabelecimentos parceiros baseados na proximidade do usuário.
- [x] **Mesa de Produtos (Catálogo):** Visualização interna da loja selecionada com exibição dinâmica de rações, preços e sistema de adição rápida à sacola.
- [x] **Sacola de Compras Interativa (Sidebar):** Carrinho lateral flutuante com listagem de itens em tempo real, controle de rolagem isolado para alta performance e cálculo automático de subtotal.
- [x] **Fluxo de Checkout e Faturamento:** Tela completa de fechamento contendo formulário de Endereço de Entrega, Dados de Pagamento e resumo do pedido integrado ao carrinho.
- [x] **Persistência de Dados e API:** Conexão robusta dos estados do front-end com banco de dados para salvar os pedidos feitos pelo usuário e carregar as lojas do mapa de forma dinâmica.

---
