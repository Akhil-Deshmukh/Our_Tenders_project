import './ViewCategory.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { categoryUrl } from '../../userUrl';
import { Link } from 'react-router-dom';

function ViewCategory() {
  const [cDetails, setCDetails] = useState([]);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    axios
      .get(categoryUrl + 'fetch')
      .then((res) => {
        setCDetails(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleButtonClick = () => {
    setShowImages(true); 
  };

  return (
    <>
      <div className="container-fluid bg-gradient">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 text-center">
            <h1 className="display-4 text-white fw-bold mb-4">
              View Categories
            </h1>
            <button onClick={handleButtonClick} className="btn btn-light btn-lg shadow-sm rounded-pill mb-5">
              Show Categories
            </button>
          </div>
          <div className="col-lg-10 d-flex flex-wrap justify-content-center gap-4">
            {cDetails.map((row, index) => (
              <div
                className={`category-card ${showImages ? 'show-card' : ''}`}
                key={index}
              >
                <Link to={`/viewsc/${row.catnm}`} className="text-decoration-none">
                  <img
                    src={`./assets/uploads/caticons/${row.caticonnm}`}
                    className="img-fluid rounded-top"
                    alt={row.catnm}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{row.catnm}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCategory;
