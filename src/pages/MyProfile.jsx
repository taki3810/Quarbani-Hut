import { Link } from 'react-router-dom';
import { Mail, UserRound } from 'lucide-react';
import useAuth from '../hooks/useAuth.js';

export default function MyProfile() {
  const { user } = useAuth();

  return (
    <section className="profile-page page-top">
      <div className="profile-card animate__animated animate__fadeInUp">
        {user?.photoURL ? (
          <img src={user.photoURL} alt="profile" className="profile-img" />
        ) : (
          <div className="profile-placeholder"><UserRound size={48} /></div>
        )}

        <h1>{user?.displayName || 'No Name Added'}</h1>
        <p><Mail size={18} /> {user?.email}</p>

        <Link to="/update-profile" className="primary-btn">
          Update Information
        </Link>
      </div>
    </section>
  );
}
