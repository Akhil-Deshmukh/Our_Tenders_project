import './Service.css';
import { motion } from 'framer-motion';

function Service(){
    return (
        <>
       <div className="container-xxl py-5 bg-white">
            <motion.div 
                className="container text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="display-4 text-success mb-3">Our Services</h1>
                <p className="lead text-secondary mb-4">Discover the range of services we offer for efficient tender management</p>
                <div className="row g-4 text-center mt-5">
                    <div className="col-md-4">
                        <motion.div 
                            className="card border-0 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Tender Creation</h5>
                                <p className="card-text">Easily create and manage tenders with customizable templates.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-md-4">
                        <motion.div 
                            className="card border-0 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Bid Management</h5>
                                <p className="card-text">Streamlined bidding process with real-time updates and notifications.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-md-4">
                        <motion.div 
                            className="card border-0 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Report & Analytics</h5>
                                <p className="card-text">Gain valuable insights with advanced reporting and analytics tools.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    )
}
export default Service;