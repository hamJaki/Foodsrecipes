import React, { useEffect, useState } from 'react';
import './App.css';
import RecipeCard from './Recipe';

const App = () => {
    const APP_ID = "e304de3b";
    const APP_KEY = "3068af25208517e530e6e9f58c48ed72";
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    useEffect(() => {
        getRecipes();
    }, [query]);

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    return (
        <div className="App">
            <header className="title">
                <center><font size="10"><h1>Food Recipes</h1></font></center>
            </header>
            <form className="search-form" onSubmit={getSearch}>
                <input
                    className="search-bar"
                    type="text"
                    value={search}
                    onChange={updateSearch}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <RecipeCard
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
