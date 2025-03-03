import './ViewSubCategory.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { subcategoryUrl } from '../../userUrl';
import { Link, useParams } from 'react-router-dom';

function ViewSubCategory() {
  const params = useParams();
  const [scdetails, setScDetails] = useState([]);
  
  // Show images by default
  const [showImages] = useState(true);

  useEffect(() => {
    axios
      .get(subcategoryUrl + 'fetch?catnm=' + params.catnm)
      .then((res) => {
        setScDetails(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [params.catnm]);

  return (
    <>
      <div className="container-fluid bg-gradient">
        <div className="row justify-content-center py-5">
          <div className="col-lg-10 text-center">
            <h1 className="display-4 text-white fw-bold mb-4">
              View SubCategories
            </h1>
          </div>
          <div className="col-lg-10 d-flex flex-wrap justify-content-center gap-4">
            {scdetails.map((row, index) => (
              <div
                className={`subcategory-card ${showImages ? 'show-card' : ''}`}
                key={index}
              >
                <Link
                  to={`/viewp/${row.subcatnm}`}
                  className="text-decoration-none"
                >
                  <img
                    src={`../assets/uploads/subcaticons/${row.subcaticonnm}`}
                    alt={row.subcatnm}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{row.subcatnm}</h5>
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

export default ViewSubCategory;
