import Navbar from '../../components/shared/Navbar/Navbar';
import './Home.scss';
import Title from '../../assets/Logo.png';
import Banda from '../../assets/Banda.png';
import Ships from '../../assets/Ships.png'
const Home = () => {
  return (
    <div className="home">

      <div className="background-image">
        <div className="overlay">
          <Navbar />
          <div className="code"> <p>UHJlcGFyZSBm<br />b3IgYmF0dGxlL<br />CB0aGUgTW90a<br />GVyc2hpcCBhc<br />HByb2FjaGVzIG<br />9uIHRoZSBob3J<br />pem9uLgoKCgoK</p>
            <p>d2Ugc3RhbmQ<br />gdW5pdGVk</p></div>
          <img src={Title} alt="" className='title-img' />
          <p className="tagline">WAR COMES TO EVERY WORLD</p>
          <img src={Banda} alt="" className='banda' />
          <p className='date'>30TH - 31ST MARCH</p>
          <img src={Ships} alt="" className='ships' />
        </div>
      </div>
    </div >
  );
};

export default Home;
