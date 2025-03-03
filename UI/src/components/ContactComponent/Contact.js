import './Contact.css';
import { motion } from 'framer-motion';

function Contact(){
    return (
        <>
        <div className="container-xxl py-5 bg-light">
            <motion.div 
                className="container"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="display-4 text-dark mb-3 text-center">Contact Us</h1>
                <p className="lead text-muted text-center mb-4">We'd love to hear from you! Reach out to us for any queries or support.</p>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <motion.form 
                            className="bg-white p-4 rounded shadow-lg"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button className="btn btn-primary w-100">Send Message</button>
                        </motion.form>
                    </div>
                </div>
            </motion.div>
        </div>
        </>
    )
}
export default Contact;