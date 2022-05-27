import { useEffect, useState } from "react";
import "./Recipes.css";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const api = await fetch(`https://tomat-pqblx.ondigitalocean.app/recipes`);
    const data = await api.json();
    setRecipes(data);
    console.log(data);
  };

  return (
    <div className="wrapper">
      {recipes.map((recipe) => {
        return (
          <div className="card" key={recipe._id}>
            <p>{recipe.title}</p>
            <img src={recipe.imageUrl} alt={recipe.title} />
          </div>
        );
      })}
    </div>
  );
}

export default Recipes;
