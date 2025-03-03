import './ViewProduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { productapiurl } from '../../userUrl';
import { Link, useParams } from 'react-router-dom';
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};


function ViewProduct() {
  const params = useParams();
  const [ pDetails , setProductDetails ] = useState([]);

  useEffect(()=>{
    axios.get(productapiurl+"fetch?subcatnm="+params.subcatnm).then((response)=>{
      const fetchProductDetails=response.data;
      var p=fetchProductDetails.map(product => {
        const initialtime = new Date(product.info);
        //console.log(initialtime); 
        const timedifference = (new Date() - initialtime)/(1000*60*60);
        //console.log(timedifference); 
                return{
          ...product,
          timedifference:timedifference
        }
      });
      setProductDetails(p);  
    }).catch((error)=>{
      console.log(error);   
    });
  },[]);

  return (
    <>
         <div className="container-fluid py-5 bg-light">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-md-12">
          <h1 className="display-5 mb-4 text-center text-primary">View Product List &gt;&gt; {params.subcatnm}</h1>
          <div className="row g-4">
            {
              pDetails.map((row, index) => (
                <motion.div className="col-lg-4 col-md-6" key={index} 
                  variants={cardVariants} 
                  initial="hidden" 
                  animate="visible" 
                  whileHover="hover"
                >
                  <div className="card border-0 shadow-sm rounded-3 h-100 overflow-hidden" style={{ transition: 'transform 0.3s' }}>
                    <div className="position-relative">
                      <img src={`../assets/uploads/picons/${row.piconnm}`} 
                        className="card-img-top" 
                        alt={row.title} 
                        style={{ height: '200px', objectFit: 'cover', transition: 'transform 0.3s' }} 
                      />
                    </div>
                    <div className="card-body text-center">
                      <h5 className="card-title text-success">{row.title}</h5>
                      <p className="card-text text-muted">{row.description}</p>
                      <h6 className="text-danger">Base Price: {row.baseprice}</h6>
                      {
                        row.timedifference > 48 
                        ? <button className="btn btn-secondary" disabled>Bid Closed</button>
                        : <Link to={`/bidp/${row._id}`} className="btn btn-primary shadow-sm hover-zoom">Bid Open</Link>
                      }
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
 
    </>
  );
}

export default ViewProduct;

