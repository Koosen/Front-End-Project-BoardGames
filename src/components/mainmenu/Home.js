import { Link } from 'react-router-dom';

function Home() {
  return (
    <Link to="/">
      <button className="HomeIcon">
        <i className="fas fa-home"></i>
      </button>
    </Link>
  );
}

export default Home;
