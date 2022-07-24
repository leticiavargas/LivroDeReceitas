import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './App.css';

function App() {

  return (
    <>
      <header>
        <nav id="upMenu">
          <div className="container">
            <img src="LogoSemFundo.png" alt="Livro de Receitas" />
            <ul>
              <li><a href="#">Início</a></li>
              <li><a href="#">Receitas</a></li>
              <li><a href="#">Contato</a></li>
            </ul>
          </div>
        </nav>
        <div id="search">
          <div className="container">
            <label>Buscar receita</label>
            <input type="text" className="search" placeholder="Nome da receita"/>
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </div>
      </header>
      <main>
        <section className="container highlight">
          <div className="highlightImage">
            <span className="recipeTitle">Pão de Queijo</span>
            <img src="/recipes/paoDeQueijo.jpg" alt="Receita de pão de queijo" />
          </div>
          <aside>
            <header>Bem-vindo ao nosso Livro de Receitas</header>
            <p>Um projeto colaborativo com receitas de diversos países.</p>
            <p>Sinta-se a vontade para explorar e conhecer as delicias aqui reunidas.</p>
          </aside>
        </section>
        <section id="recipes">
          <header className="recipesHeader">
            <h1>Sugestões para hoje</h1>
            <h2>Receitas para alegrar o seu dia</h2>
          </header>
          <div className="container recipesBody">
            <article className="recipeCard">
              <div className="recipeImage">
                <button className="recipeFavorite" title="Favoritar receita">
                  <FontAwesomeIcon icon={faStar} className="star" />
                </button>
                <img src="/recipes/sanduicheDeFrango.jpg" alt="Foto de uma receita" />
              </div>
              <div className="recipeInfo">
                <label className="recipeType">Lanche</label>
                <h3>Sanduiche de Frango</h3>
                <label className="recipeAuthor">por <span>Letícia Vargas</span></label>
                <span className="recipeFavorites">
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                  <label>30.995</label>
                </span>
                <a href="#" target="_self" className="recipeLink">
                  ver receita
                </a>
              </div>
            </article>
            <article className="recipeCard">
              <div className="recipeImage">
                <button className="recipeFavorite" title="Favoritar receita">
                  <FontAwesomeIcon icon={faStar} className="star" />
                </button>
                <img src="recipes/boloDeLaranja.jpg" alt="Foto de uma receita" />
              </div>
              <div className="recipeInfo">
                <label className="recipeType">Bolos</label>
                <h3>Bolo de Laranja</h3>
                <label className="recipeAuthor">por <span>Yanersys</span></label>
                <span className="recipeFavorites">
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                  <label>30.995</label>
                </span>
                <a href="#" target="_self" className="recipeLink">
                  ver receita
                </a>
              </div>
            </article>
            <article className="recipeCard">
              <div className="recipeImage">
                <button className="recipeFavorite" title="Favoritar receita">
                  <FontAwesomeIcon icon={faStar} className="star" />
                </button>
                <img src="recipes/hallacaVenezolana.jpg" alt="Foto da Hallaca Venenolana" />
              </div>
              <div className="recipeInfo">
                <label className="recipeType">Prato típico</label>
                <h3>Hallaca Venenolana</h3>
                <label className="recipeAuthor">por <span>Leonardo</span></label>
                <span className="recipeFavorites">
                  <FontAwesomeIcon icon={faHeart} className="heart" />
                  <label>30.995</label>
                </span>
                <a href="#" target="_self" className="recipeLink">
                  ver receita
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer">
            <div className="infoCollumn">
              <h3>Categoria de receitas</h3>
              <ul>
                <li><a href="#">Todas</a></li>
                <li><a href="#">Rápidas</a></li>
                <li><a href="#">Lanches</a></li>
                <li><a href="#">Vegetariana</a></li>
                <li><a href="#">Novas</a></li>
              </ul>
            </div>
            <div className="infoCollumn">
              <h3>Sobre</h3>
              <ul>
                <li><a href="#">Quem somos</a></li>
                <li><a href="#">Termos de uso</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
            <div className="infoSocialMedia">
              <h3>Nossas redes</h3>
              <span>
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              </span>
              <img src="LogoSemFundo.png" alt="Livro de Receitas" />
            </div>
          </div>
          <div className="creativecommons">
            <span>2022 Produzido colaborativamente - </span>
            
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
