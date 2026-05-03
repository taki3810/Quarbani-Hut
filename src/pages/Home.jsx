import { Link } from 'react-router-dom';
import { BadgeCheck, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react';
import useAnimals from '../hooks/useAnimals.js';
import AnimalCard from '../components/AnimalCard.jsx';
import Loading from '../components/Loading.jsx';

export default function Home() {
  const { animals, loading } = useAnimals();
  const featured = animals.slice(0, 4);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className="hero">
        <div className="hero-content animate__animated animate__fadeInLeft">
          <span className="hero-badge">Trusted Livestock Booking Platform</span>
          <h1>Book healthy animals for Qurbani with confidence.</h1>
          <p>
            Explore cows, bulls and goats from different locations, check details, and book your preferred animal after login.
          </p>
          <div className="hero-buttons">
            <Link className="primary-btn" to="/animals">Browse Animals</Link>
            <Link className="outline-btn" to="/register">Create Account</Link>
          </div>
        </div>

        <div className="hero-card animate__animated animate__fadeInRight">
          <Leaf size={38} />
          <h2>Fresh Farm Selection</h2>
          <p>Verified animal information with price, breed, weight, age and location.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span>Featured Animals</span>
          <h2>Popular choices for this season</h2>
        </div>
        <div className="animal-grid">
          {featured.map(animal => <AnimalCard key={animal.id} animal={animal} />)}
        </div>
      </section>

      <section className="tips-section">
        <div className="section-heading">
          <span>Qurbani Tips</span>
          <h2>Things to check before booking</h2>
        </div>
        <div className="tips-grid">
          <div className="tip-card">
            <BadgeCheck />
            <h3>Check Health</h3>
            <p>Choose active animals with clear eyes, clean body and healthy movement.</p>
          </div>
          <div className="tip-card">
            <ShieldCheck />
            <h3>Confirm Details</h3>
            <p>Review price, age, breed, weight and location before submitting booking.</p>
          </div>
          <div className="tip-card">
            <HeartHandshake />
            <h3>Book Early</h3>
            <p>Early booking helps you get better options and enough time for planning.</p>
          </div>
        </div>
      </section>

      <section className="breeds-section">
        <div>
          <span className="hero-badge">Top Breeds</span>
          <h2>Deshi, Sahiwal, Brahman, Jamnapari and Black Bengal</h2>
          <p>
            QurbaniHat helps users compare animals by breed, category and price so that booking becomes simple and organized.
          </p>
        </div>
        <Link className="primary-btn" to="/animals">View All Animals</Link>
      </section>
    </>
  );
}
