import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Mail } from 'lucide-react';
import useAuth from '../hooks/useAuth.js';

export default function Register() {
  const { createUser, updateUserProfile, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleRegister = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value || 'https://i.pravatar.cc/150';
    const password = form.password.value;

    createUser(email, password)
      .then(() => {
        return updateUserProfile(name, photo);
      })
      .then(() => {
        toast.success('Registration successful');
        form.reset();
        navigate('/login');
      })
      .catch(error => {
        console.log('REGISTER ERROR:', error.code, error.message);

        if (error.code === 'auth/weak-password') {
          toast.error('Password should be at least 6 characters');
        } else if (error.code === 'auth/email-already-in-use') {
          toast.error('This email is already registered. Please login.');
        } else if (error.code === 'auth/operation-not-allowed') {
          toast.error('Email/Password login is not enabled in Firebase.');
        } else if (error.code === 'auth/invalid-email') {
          toast.error('Invalid email address.');
        } else {
          toast.error(error.code || 'Registration failed');
        }
      });
  };

  const handleGoogleRegister = () => {
    googleLogin()
      .then(() => {
        toast.success('Google authentication successful');
        navigate('/');
      })
      .catch(error => {
        console.log('GOOGLE ERROR:', error.code, error.message);
        toast.error(error.code || 'Google authentication failed');
      });
  };

  return (
    <section className="auth-page">
      <div className="auth-card animate__animated animate__zoomIn">
        <span>Create Account</span>
        <h1>Register</h1>

        <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="url" name="photo" placeholder="Photo URL" />
          <input type="password" name="password" placeholder="Password" required />
          <button className="primary-btn full-btn" type="submit">Register</button>
        </form>

        <button className="outline-btn full-btn google-btn" onClick={handleGoogleRegister}>
          <Mail size={18} /> Continue with Google
        </button>

        <p className="auth-link">
          Already have an account? <Link to="/login">Login now</Link>
        </p>
      </div>
    </section>
  );
}