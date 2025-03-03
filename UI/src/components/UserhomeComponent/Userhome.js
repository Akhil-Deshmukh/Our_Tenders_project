import './Userhome.css';
import { motion } from 'framer-motion';

function Userhome(){
    return (
        <>
       {/* content Start */}
       <div className="container-xxl py-5 bg-light">
      <motion.div 
        className="container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="display-4 text-primary mb-3 text-center">User Dashboard</h1>
        <p className="lead text-secondary text-center mb-4">
          Manage your profile, view tenders, and track bids seamlessly.
        </p>
        
        <div className="row g-4">
          <div className="col-md-4">
            <motion.div 
              className="card border-0 shadow-sm rounded-3 hover-shadow"
              whileHover={{ scale: 1.03 }}
            >
              <div className="card-body text-center">
                <div className="icon mb-3 text-primary">
                  <i className="bi bi-person-circle fs-1"></i>
                </div>
                <h5 className="card-title">Profile Settings</h5>
                <p className="card-text">Update your personal information and change your password.</p>
                <button className="btn btn-outline-primary">Edit Profile</button>
              </div>
            </motion.div>
          </div>

          <div className="col-md-4">
            <motion.div 
              className="card border-0 shadow-sm rounded-3 hover-shadow"
              whileHover={{ scale: 1.03 }}
            >
              <div className="card-body text-center">
                <div className="icon mb-3 text-success">
                  <i className="bi bi-card-checklist fs-1"></i>
                </div>
                <h5 className="card-title">View Tenders</h5>
                <p className="card-text">Browse available tenders and apply with ease.</p>
                <button className="btn btn-outline-success">Explore Tenders</button>
              </div>
            </motion.div>
          </div>

          <div className="col-md-4">
            <motion.div 
              className="card border-0 shadow-sm rounded-3 hover-shadow"
              whileHover={{ scale: 1.03 }}
            >
              <div className="card-body text-center">
                <div className="icon mb-3 text-warning">
                  <i className="bi bi-graph-up-arrow fs-1"></i>
                </div>
                <h5 className="card-title">Track Bids</h5>
                <p className="card-text">Monitor the status of your bids in real-time.</p>
                <button className="btn btn-outline-warning">Track Now</button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
        </>
    )
}
export default Userhome;