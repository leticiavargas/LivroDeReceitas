import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faStar } from '@fortawesome/free-solid-svg-icons'; 
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './App.css';

import RecipeCard from './components/RecipeCard/RecipeCard';
import Destaque from './components/Destaque/Destaque';

import dados from './db.json';

function App() {

  const RECEITAS = dados.recipes;
  const receitaDestaque = RECEITAS.filter((receita) => (receita.highlight == true));
  //console.log("RECEITA", receitaDestaque);
  /*const receitaDestaque2 = RECEITAS.filter(function(receita) {
    return receita.highlight == true
  });*/

  const receitaSome = RECEITAS.some((receita) => (receita.type == "bolos"));
  //console.log("RECEITA do TIPO BOLOS?", receitaSome);

  const receitasFind = RECEITAS.find((receita) => (receita.type == 'bolos'));
  console.log("RECEITAS DO TIPO BOLO", receitasFind);



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
         <Destaque imagem={receitaDestaque[0].image} titulo={receitaDestaque[0].title} />
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
            {
              RECEITAS.map(function(receita, index){
                if (index < 3) {
                return (
                  <RecipeCard
                    titulo={receita.title} 
                    autor={receita.author}
                    imagem={receita.image}
                    tipo={receita.type}
                    favorito={receita.favorite}
                  />)
                }
              })
            }
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
