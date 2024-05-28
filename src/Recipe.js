import React, { useState } from 'react';
import './recipe.module.css';

const Recipe = ({ title, image, ingredients }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(prevShowDetails => !prevShowDetails);
    };

    return (
        <div className="recipe-card">
            <h1 className="recipe-title">{title}</h1>
            <img className="recipe-image" src={image} alt={title} />
            <button className="toggle-button" onClick={toggleDetails}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDetails && (
                <div className="recipe-details">
                    <ul className="recipe-ingredients">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient.text}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Recipe;
