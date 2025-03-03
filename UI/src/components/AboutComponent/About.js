import './About.css'
import { motion } from 'framer-motion';

function About(){
    return (
        <>
          <div className="container-xxl py-5 bg-light">
            <motion.div 
                className="container text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="display-4 text-primary mb-3">About Tender Application</h1>
                <p className="lead text-secondary mb-4">Revolutionizing the way you manage tenders</p>
                <div className="row g-4 text-center mt-5">
                    <div className="col-md-4">
                        <motion.div 
                            className="card border-0 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">User-Friendly Interface</h5>
                                <p className="card-text">Easily navigate and manage tenders with our intuitive UI.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-md-4">
                        <motion.div 
                            className="card border-0 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Powerful Analytics</h5>
                                <p className="card-text">Gain insights with detailed reports and analytics tools.</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-md-4">
                        <motion.div 
                            className="card border-0 shadow-lg"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="card-body">
                                <h5 className="card-title">Secure Transactions</h5>
                                <p className="card-text">Ensure safe and secure bidding with robust security features.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    )
}
export default About;