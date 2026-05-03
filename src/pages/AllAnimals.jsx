// import { useMemo, useState } from 'react';
// import AnimalCard from '../components/AnimalCard.jsx';
// import Loading from '../components/Loading.jsx';
// import useAnimals from '../hooks/useAnimals.js';

// export default function AllAnimals() {
//   const { animals, loading } = useAnimals();
//   const [sortOrder, setSortOrder] = useState('');

//   const sortedAnimals = useMemo(() => {
//     const copied = [...animals];
//     if (sortOrder === 'low-high') {
//       copied.sort((a, b) => a.price - b.price);
//     }
//     if (sortOrder === 'high-low') {
//       copied.sort((a, b) => b.price - a.price);
//     }
//     return copied;
//   }, [animals, sortOrder]);

//   if (loading) {
//     return <Loading />;
//   }

//   return (
//     <section className="section page-top">
//       <div className="page-header">
//         <div>
//           <span>All Animals</span>
//           <h1>Find your preferred Qurbani animal</h1>
//           <p>Sort by price and open details to place a booking.</p>
//         </div>

//         <select className="sort-select" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
//           <option value="">Sort by price</option>
//           <option value="low-high">Low to High</option>
//           <option value="high-low">High to Low</option>
//         </select>
//       </div>

//       <div className="animal-grid">
//         {sortedAnimals.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
//       </div>
//     </section>
//   );
// }


import { useMemo, useState } from 'react';
import AnimalCard from '../components/AnimalCard.jsx';
import Loading from '../components/Loading.jsx';
import useAnimals from '../hooks/useAnimals.js';

export default function AllAnimals() {
  const { animals, loading } = useAnimals();
  const [sortOrder, setSortOrder] = useState('');

  const sortedAnimals = useMemo(() => {
    const copiedAnimals = [...animals];

    if (sortOrder === 'low-high') {
      copiedAnimals.sort((a, b) => a.price - b.price);
    }

    if (sortOrder === 'high-low') {
      copiedAnimals.sort((a, b) => b.price - a.price);
    }

    return copiedAnimals;
  }, [animals, sortOrder]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section page-top">
      <div className="page-header">
        <div>
          <span>All Animals</span>
          <h1>Find your preferred Qurbani animal</h1>
          <p>Sort animals by price and view details before booking.</p>
        </div>

        <select
          className="sort-select"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by price</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
        </select>
      </div>

      <div className="animal-grid">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </section>
  );
}