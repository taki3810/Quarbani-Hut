import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Calendar, MapPin, Scale, Tag } from 'lucide-react';
import Loading from '../components/Loading.jsx';
import useAnimals from '../hooks/useAnimals.js';
import useAuth from '../hooks/useAuth.js';

export default function Details() {
  const { id } = useParams();
  const { animals, loading } = useAnimals();
  const { user } = useAuth();

  if (loading) {
    return <Loading />;
  }

  const animal = animals.find(item => item.id === Number(id));

  if (!animal) {
    return (
      <section className="section page-top center-text">
        <h1>Animal not found</h1>
        <p>The animal you are looking for is not available.</p>
      </section>
    );
  }

  const handleBooking = event => {
    event.preventDefault();
    toast.success('Booking request submitted successfully!');
    event.target.reset();
  };

  return (
    <section className="section page-top">
      <div className="details-grid">
        <div className="details-image-wrap animate__animated animate__fadeInLeft">
          <img src={animal.image} alt={animal.name} />
        </div>

        <div className="details-content animate__animated animate__fadeInRight">
          <span className="category">{animal.category}</span>
          <h1>{animal.name}</h1>
          <p>{animal.description}</p>

          <div className="details-list">
            <p><Tag size={18} /> Type: <strong>{animal.type}</strong></p>
            <p><Tag size={18} /> Breed: <strong>{animal.breed}</strong></p>
            <p><Scale size={18} /> Weight: <strong>{animal.weight} kg</strong></p>
            <p><Calendar size={18} /> Age: <strong>{animal.age} years</strong></p>
            <p><MapPin size={18} /> Location: <strong>{animal.location}</strong></p>
          </div>

          <h2>৳ {animal.price.toLocaleString()}</h2>
        </div>
      </div>

      <div className="booking-card">
        <div>
          <span>Booking Form</span>
          <h2>Place a booking request</h2>
          <p className="muted">Data will not be saved in database or local storage. The form will reset after submit.</p>
        </div>

        <form className="form-grid" onSubmit={handleBooking}>
          <input type="text" name="name" defaultValue={user?.displayName || ''} placeholder="Your name" required />
          <input type="email" name="email" defaultValue={user?.email || ''} placeholder="Your email" required />
          <input type="tel" name="phone" placeholder="Phone number" required />
          <input type="text" name="address" placeholder="Address" required />
          <button className="primary-btn" type="submit">Submit Booking</button>
        </form>
      </div>
    </section>
  );
}
