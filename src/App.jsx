import { useEffect, useState } from 'react';
import axios from 'axios';
import BreedCard from './components/BreadCard';

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    axios.get('https://dogapi.dog/api/v2/breeds')
      .then(response => {
        setBreeds(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching breeds:", error);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dog Breed Explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {breeds.map(breed => (
          <BreedCard
            key={breed.id}
            name={breed.attributes.name}
            description={breed.attributes.description}
            lifespan={breed.attributes.life}
            weight={breed.attributes.weight}
            hypoallergenic={breed.attributes.hypoallergenic}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
