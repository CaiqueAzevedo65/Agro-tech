import React from 'react';
import '../Styles/Header.css'; // Importação do CSS corrigida
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa o componente FontAwesomeIcon
import { faCartShopping, faLeaf, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // Importa ícones específicos do FontAwesome

// Componente Header que renderiza o cabeçalho da aplicação
function Header() {
  return (
    <div className="cabeçalho container-fluid bg-green">
      {/* Navbar superior */}
      <div className="cabeçalho3 container-fluid">
        {/* Logo */}
        <a className="Nome_site text-light" href="/">
          <FontAwesomeIcon icon={faLeaf} /> EconAgro
        </a>
        
        {/* Barra de pesquisa */}
        <div className="container d-flex align-items-center">
          {/* Barra de pesquisa */}
          <div className="search">
            <input type="text" id="searchinput" placeholder="Pesquisar" />
            <label htmlFor="searchinput">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </label> 
          </div>
        </div>

        <nav className="navbar navbar-expand-lg">
          {/* Botões */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/cadastro">Criar Conta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Entrar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/carrinho">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Navbar inferior */}
      <div className="cabeçalho2 container-fluid">
        <nav className="navbar navbar-expand-lg">
          {/* Botões */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Início</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#conta">Minha Conta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#favoritos">Favoritos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#historico">Histórico</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/talktous">Ajuda/Fale Conosco</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">Sobre Nós</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header; // Exporta o componente Header
