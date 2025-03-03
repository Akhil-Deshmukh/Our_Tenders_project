import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <>
      {/* Carousel Section */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/img/banner2.jpg" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInDown">
              <h1 className="text-white fw-bold">Welcome to Our Tender Portal</h1>
              <p className="lead">Find the best opportunities for your business</p>
              <Link to="/" className="btn btn-primary rounded-pill shadow-lg">Explore Now</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src="assets/img/carousel-2.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block animate__animated animate__fadeInUp">
              <h1 className="text-white fw-bold">Your Growth, Our Mission</h1>
              <p className="lead">Connecting contractors with the right tenders</p>
              <Link to="/learn-more" className="btn btn-success rounded-pill shadow-lg">Learn More</Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Tender Categories Section */}
      <section className="tender-section">
        <h2>Explore Tender Categories</h2>
        <div className="tender-cards">
          <Link to="/" className="tender-card">
            <img src="assets/img/road.jpg" alt="Road Construction" />
            <h3>Road Construction</h3>
            <p>Find tenders related to road infrastructure and maintenance.</p>
          </Link>

          <Link to="/" className="tender-card">
            <img src="assets/img/building.jpeg" alt="Building Construction" />
            <h3>Building Construction</h3>
            <p>Discover tenders for residential and commercial buildings.</p>
          </Link>

          <Link to="/" className="tender-card">
            <img src="assets/img/subrowhouse.jpeg" alt="Other Tenders" />
            <h3>Other Tenders</h3>
            <p>Explore a variety of other tender opportunities.</p>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
