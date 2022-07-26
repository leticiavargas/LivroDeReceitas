import React from "react";

function Destaque ({imagem, titulo}) {
  return(
    <div className="highlightImage">
      <span className="recipeTitle">{titulo}</span>
      <img src={`/recipes/${imagem}`} alt="Receita destaque" />
    </div>
  )
}

export default Destaque;