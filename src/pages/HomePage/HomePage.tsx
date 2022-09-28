import './HomePage.css';
import Nav from '../../layout/Nav/Nav';

function HomePage() {
  return(
    <div className="home">
      <Nav />

      <section className="hero">
        <img src={require("../../image/hero-bg.png")} alt="" className="hero__image" />
        <div className="hero__container">
          <div className="hero__content">
            <h2 className="hero__title">Rick And Morty App</h2>
            <p className='hero__subtitle'>Develop a Rick and Morty app using an API rest</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;