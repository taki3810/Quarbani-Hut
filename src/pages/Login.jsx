import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Mail } from 'lucide-react';
import useAuth from '../hooks/useAuth.js';

export default function Login() {
  const { loginUser, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(() => {
        toast.success('Login successful');
        navigate(from, { replace: true });
      })
      .catch(() => toast.error('Invalid email or password'));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success('Google login successful');
        navigate('/');
      })
      .catch(() => toast.error('Google login failed'));
  };

  return (
    <section className="auth-page">
      <div className="auth-card animate__animated animate__zoomIn">
        <span>Welcome Back</span>
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Password" required />
          <button className="primary-btn full-btn" type="submit">Login</button>
        </form>

        <button className="outline-btn full-btn google-btn" onClick={handleGoogleLogin}>
          <Mail size={18} /> Continue with Google
        </button>

        <p className="auth-link">
          New here? <Link to="/register">Register now</Link>
        </p>
      </div>
    </section>
  );
}
