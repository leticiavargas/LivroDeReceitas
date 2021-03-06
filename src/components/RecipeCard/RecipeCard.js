import React, { useState } from "react";
import './RecipeCard.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from '@fortawesome/free-solid-svg-icons'; 

function RecipeCard({ imagem, tipo, autor, titulo, favorito }) {
  
  const [favorite, setFavorite] = useState(0);

  const handleClick = () => {
    const newValue = favorite +1;
    setFavorite(newValue);
  }


  return(
    <article className="recipeCard">
      <div className="recipeImage">
        <button className="recipeFavorite" title="Favoritar receita" onClick={handleClick}>
          <FontAwesomeIcon icon={faStar} className="star" />
        </button>
        <img src={`/recipes/${imagem}`} alt="Foto de uma receita" />
      </div>
      <div className="recipeInfo">
        <label className="recipeType">{tipo}</label>
        <h3>{titulo}</h3>
        <label className="recipeAuthor">por <span>{autor}</span></label>
        <span className="recipeFavorites">
          <FontAwesomeIcon icon={faHeart} className="heart" />
          <label>{favorite}</label>
        </span>
        <a href="#" target="_self" className="recipeLink">
          ver receita
        </a>
      </div>
    </article>
  )
}

export default RecipeCard;