import { Link, NavLink } from 'react-router-dom';
import { LogOut, Menu, UserRound, X } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth.js';

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logoutUser()
      .then(() => toast.success('Logout successful'))
      .catch(() => toast.error('Logout failed'));
  };

  const navLinks = (
    <>
      <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
      <NavLink to="/animals" onClick={() => setOpen(false)}>All Animals</NavLink>
      {user && <NavLink to="/my-profile" onClick={() => setOpen(false)}>My Profile</NavLink>}
    </>
  );

  return (
    <header className="navbar">
      <Link className="logo" to="/">
        <span>Qurbani</span>Hat
      </Link>

      <nav className="desktop-nav">{navLinks}</nav>

      <div className="nav-actions">
        {user ? (
          <>
            <Link to="/my-profile" className="avatar-wrap" title={user.displayName || user.email}>
              {user.photoURL ? (
                <img src={user.photoURL} alt="user avatar" className="avatar" />
              ) : (
                <UserRound size={22} />
              )}
            </Link>
            <button className="outline-btn small-btn" onClick={handleLogout}>
              <LogOut size={16} /> Logout
            </button>
          </>
        ) : (
          <>
            <Link className="outline-btn small-btn" to="/login">Login</Link>
            <Link className="primary-btn small-btn" to="/register">Register</Link>
          </>
        )}

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && <div className="mobile-nav animate__animated animate__fadeInDown">{navLinks}</div>}
    </header>
  );
}
