import './ViewBid.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { bidapiurl } from '../../userUrl';
import { useParams } from 'react-router-dom';
function ViewBid() {
  const [bDetails,setBidDetails]=useState([]);
  const params=useParams();

  useEffect(()=>{
    axios.get(bidapiurl+"fetch").then((response)=>{
        setBidDetails(response.data);
    });
  })

  return (
    <>
           {/* About Start */}
           <div className="container-fluid py-5 bg-light">
  <div className="row justify-content-center">
    <div className="col-lg-10 col-md-12 shadow-lg rounded-3 bg-white p-5">
      <h1 className="display-5 mb-4 text-center text-success">Bid Details </h1>
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered align-middle text-center">
          <thead className="table-success">
            <tr>
              <th>Bidding ID</th>
              <th>Product ID</th>
              <th>User ID</th>
              <th>Bidding Price</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {
              bDetails.map((row, index) => (
                <tr key={index}>
                  <td>{row._id}</td>
                  <td>{row.p_id}</td>
                  <td>{row.u_id}</td>
                  <td>{row.bidprice}</td>
                  <td>{row.info}</td>
                </tr>
              ))
            }
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

export default ViewBid;

