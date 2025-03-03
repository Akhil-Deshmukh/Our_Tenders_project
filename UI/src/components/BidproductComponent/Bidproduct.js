import './Bidproduct.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { bidapiurl, categoryapiurl, productapiurl } from '../../userUrl';
import { useParams , useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const textVariants = {
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 }
  },
  tap: { scale: 0.95 }
};

function Bidproduct() {

  const params = useParams();
  const navigate = useNavigate();
  const [output , setOutput] = useState();
  const [pDetails , setProductDetails] = useState([]);
  const [cPrice , setCurrentPrice] = useState([]);
  const [ BidPrice , setBidPrice ] = useState('');
 
  useEffect(()=>{
  axios.get(productapiurl+"fetch?_id="+params._id).then((response) => {
//   console.log(response.data[0]);  
    setProductDetails(response.data[0]);
    });

    axios.get(bidapiurl+"fetch?p_id="+params._id).then((response1) => {
      var min_bidprice=response1.data[0].bidprice;
     // console.log("minprice = "+min_bidprice);
      for(let row of response1.data) 
      {
        if(min_bidprice<row.bidprice)
        {
          min_bidprice=row.bidprice;
        }
      }
      setCurrentPrice(min_bidprice);
    }).catch((error)=>{
      setCurrentPrice(pDetails.baseprice);
    });
  });

  const handleSubmit=(e)=>{
    e.preventDefault();
    var bidDetails={"p_id":params._id,"u_id":localStorage.getItem("email"),"bidprice":parseInt(BidPrice)};
    axios.post(bidapiurl+"save",bidDetails).then((response)=>{
      setOutput("Bid implemented successfully....");
      setBidPrice("");
      navigate("/bidp/"+params._id);
    }).catch((error)=>{
      setOutput("Unable to bid , please try again....");
      setBidPrice("");
    });
  };


  return (
    <>
            {/* About Start */}
            <div className="container-xxl py-5">
      <div className="container">
        <div className="row justify-content-center">
          <motion.div 
            className="col-lg-6 col-md-8 col-sm-10 shadow-lg p-5 rounded-3 bg-white text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="mb-4 text-primary"> Start Bid Here</h2>

            <motion.div 
              className="mb-4 p-3 rounded-3 bg-light"
              whileHover="hover"
              variants={textVariants}
            >
              <h4 className="text-muted">Product ID:</h4>
              <h3 className="text-dark">{pDetails._id}</h3>
            </motion.div>

            <motion.div 
              className="mb-4 p-3 rounded-3 bg-light"
              whileHover="hover"
              variants={textVariants}
            >
              <h4 className="text-muted">Base Price:</h4>
              <h3 className="text-success">&#8377;{pDetails.baseprice}</h3>
            </motion.div>

            <motion.div 
              className="mb-4 p-3 rounded-3 bg-light"
              whileHover="hover"
              variants={textVariants}
            >
              <h4 className="text-muted">Auction Current Price:</h4>
              <h3 className="text-danger">&#8377;{cPrice}</h3>
            </motion.div>

            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  className="form-control form-control-lg text-center" 
                  placeholder="Enter Your Bid Price"
                  value={BidPrice} 
                  onChange={e => setBidPrice(e.target.value)} 
                  style={{ fontWeight: 'bold' }}
                />
              </div>

              <motion.button 
                onClick={handleSubmit} 
                type="button" 
                className="btn btn-primary btn-lg w-100" 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Bid Product
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Bidproduct;


