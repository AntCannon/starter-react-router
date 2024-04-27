import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <div>
        <ul><Link to="/lamps"><h3>Lamps</h3></Link>
          <li><Link to="/lamps/ceiling">Ceiling</Link></li>
          <li><Link to="/lamps/table">Table</Link></li>
          <li><Link to="/lamps/floor">Floor</Link></li>
        </ul>
        <ul><Link to="/candles"><h3>Candles</h3></Link>
          <li><Link to="/candles/decorative">Decorative</Link></li>
          <li><Link to="/candles/celebratory">Celebratory</Link></li>
          <li><Link to="/candles/flameless">Flameless</Link></li>
        </ul>
      </div>
    </nav>
  );
};