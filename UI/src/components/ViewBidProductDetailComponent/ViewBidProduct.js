import './ViewBidProduct.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import {productapiurl} from '../../userUrl';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function ViewBidProduct() {

  const navigate = useNavigate();

  const [pDetails,setPDetails]=useState([]);

  useEffect(()=>{
    axios.get(productapiurl+"fetch").then((response)=>{
      setPDetails(response.data);
      }).catch((error)=>{
      console.log(error)
    });
    

  })
  const handleViewBid = (id) => {
    navigate(`/viewbid/${id}`);
  };
  return (
    <>
           {/* About Start */}
           <div className="container-fluid py-5" style={{ background: "linear-gradient(to right, #e0eafc, #cfdef3)" }}>
  <div className="row justify-content-center">
    <div className="col-lg-10 col-md-12 shadow-lg rounded-3 bg-white p-5">
      <h1 className="display-5 mb-4 text-center text-primary">View Tender Detail</h1>
      <div className="table-responsive">
        <table className="table table-bordered align-middle text-center">
          <thead className="table-primary text-white">
            <tr>
              <th>Product ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Base Price</th>
              <th>Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pDetails.map((row, index) => (
              <tr key={index} className="table-row">
                <td className="unique-td">{row._id}</td>
                <td className="unique-td">{row.title}</td>
                <td className="unique-td">{row.subcatnm}</td>
                <td className="unique-td">{row.description}</td>
                <td className="unique-td">{row.baseprice}</td>
                <td className="unique-td">{row.info}</td>
                <td className="unique-td">
  <button 
    onClick={() => handleViewBid(row._id)} 
    className="btn btn-outline-primary btn-sm">
    View Bid
  </button>
</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    {/* About End */}
    </>
  );
}

export default ViewBidProduct;

