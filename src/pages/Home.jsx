import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Phonebook</h1>
          <p className="py-6">
            Discover seamless contact management with our Phone Book website.
            Effortlessly store, update, and access your contacts in one place.
          </p>
          <NavLink to={'/login'} className="btn btn-primary">
            Get Started
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
