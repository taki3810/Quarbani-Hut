import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth.js';

export default function UpdateProfile() {
  const { user, updateUserProfile, setUser } = useAuth();
  const navigate = useNavigate();

  const handleUpdate = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateUserProfile(name, photo)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success('Profile updated successfully');
        navigate('/my-profile');
      })
      .catch(() => toast.error('Profile update failed'));
  };

  return (
    <section className="auth-page">
      <div className="auth-card animate__animated animate__zoomIn">
        <span>Update Profile</span>
        <h1>Update Information</h1>

        <form onSubmit={handleUpdate}>
          <input type="text" name="name" defaultValue={user?.displayName || ''} placeholder="New name" required />
          <input type="url" name="photo" defaultValue={user?.photoURL || ''} placeholder="New image URL" required />
          <button className="primary-btn full-btn" type="submit">Update Information</button>
        </form>
      </div>
    </section>
  );
}
