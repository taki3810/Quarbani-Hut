import { Link } from 'react-router-dom';
import { MapPin, Scale } from 'lucide-react';

export default function AnimalCard({ animal }) {
  return (
    <article className="animal-card animate__animated animate__fadeInUp">
      <img src={animal.image} alt={animal.name} />
      <div className="animal-card-body">
        <span className="category">{animal.category}</span>
        <h3>{animal.name}</h3>
        <p className="muted">{animal.breed} • {animal.type}</p>

        <div className="animal-meta">
          <span><Scale size={16} /> {animal.weight} kg</span>
          <span><MapPin size={16} /> {animal.location}</span>
        </div>

        <div className="price-row">
          <strong>৳ {animal.price.toLocaleString()}</strong>
          <Link className="primary-btn small-btn" to={`/details-page/${animal.id}`}>
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
