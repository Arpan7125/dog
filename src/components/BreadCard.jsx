import React from 'react';
import breedImages from '../assets/breedImages';

const BreedCard = ({ name, description, lifespan, weight, hypoallergenic }) => {
  const imageUrl = breedImages[name] || 'https://via.placeholder.com/300x200?text=No+Image';

  return (
    <div className="bg-white shadow-md rounded p-4 hover:shadow-lg transition">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{description || 'No description available.'}</p>
      <ul className="text-sm text-gray-600">
        <li><strong>Lifespan:</strong> {lifespan?.min} - {lifespan?.max} years</li>
        <li><strong>Weight:</strong> {weight?.imperial} lbs</li>
        <li><strong>Hypoallergenic:</strong> {hypoallergenic ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default BreedCard;
