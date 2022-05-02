import './Home.css';
import Cards from '../components/Cards';

function Home() {
  return (
    <div>
      <div className="section">
        <p className="head">Standard</p>
        <Cards />
      </div>
    </div>
  );
}

export default Home;