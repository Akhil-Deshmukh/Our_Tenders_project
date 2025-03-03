import './Adminhome.css'
import { motion } from 'framer-motion';


function Adminhome(){
    return (
        <>
       {/* content Start */}
       <div className="container-xxl py-5 bg-light">
            <motion.div 
                className="container text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="display-4 text-primary mb-3">Welcome To Admin Page of Tender</h1>
                <h2 className="text-secondary mb-4">Admin Home Page</h2>
                <p className="mb-4"> Manage tenders, categories, and bids efficiently with an intuitive interface.</p>
            </motion.div>

            <motion.div 
                className="row g-4 text-center mt-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Manage Users</h5>
                            <p className="card-text">Control user access and privileges.</p>
                            <button className="btn btn-primary">Go</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Manage Tenders</h5>
                            <p className="card-text">Create, update, and review tenders.</p>
                            <button className="btn btn-success">Go</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card border-0 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">Reports & Analytics</h5>
                            <p className="card-text">View detailed reports and analytics.</p>
                            <button className="btn btn-info">Go</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    )
}
export default Adminhome;