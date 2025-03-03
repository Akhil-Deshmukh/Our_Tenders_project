  import './Header.css'
  // import { useNavigate } from "react-router-dom"; 
   import {Link} from "react-router-dom";
  import { useState, useEffect } from "react";
  import Auth from '../Auth/Auth';

function Header (){
  const   [HeaderContent,setHeaderContent] = useState();
  // const navigate = useNavigate();


  useEffect(()=>{
    setInterval(()=>{

  if(localStorage.getItem("token")!==undefined && localStorage.getItem("role")==="admin")
    {
      setHeaderContent(<>
          <div className="collapse navbar-collapse" id="navbarCollapse">
  <div className="navbar-nav ms-auto p-4 p-lg-0">
    <Link className="nav-item nav-link  text-primary" to="/admin">Admin Home</Link>
    <Link className="nav-item nav-link text-primary" to="/manageusers">Manage Users</Link>
    <Link className="nav-item nav-link text-primary" to="/addcategory">Add Category</Link>
    <Link className="nav-item nav-link text-primary" to="/addsubcategory">Add SubCategory</Link>


    <div className="nav-item dropdown">
        <button
          className="nav-link dropdown-toggle border-0 bg-transparent"
          style={{ color: "#3db074" }}
          data-bs-toggle="dropdown"
        >
          Settings
        </button>
        <div className="dropdown-menu rounded-0 m-0">
          <Link className="dropdown-item text-primary" to="/cpadmin">
            Change Password
          </Link>
          <Link className="dropdown-item text-success" to="/epadmin">
            Edit Profile
          </Link>
        </div>
      </div>
  </div>
  
  <Link 
    className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block" 
    style={{ color: "black" }} to="/logout">Logout <i className="fa fa-arrow-right ms-3"></i>
  </Link>
</div>

            
      </>);  
      // navigate("/admin");      
  }
  else if(localStorage.getItem("token")!==undefined && localStorage.getItem("role")==="user")

    {
      setHeaderContent(<>
     
     <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
            <a class="nav-item nav-link "><Link to="/user" >User Home</Link></a>
            <a class="nav-item nav-link "><Link to="/viewcategory" >View Category</Link></a>
            <a class="nav-item nav-link "><Link to="/addfindus" >Add Tender</Link></a>
            <a class="nav-item nav-link "><Link to="/Viewbidp">View Tender</Link></a>


        </div>
        <a class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"><Link style={{"color":"black"}} to="/logout" >Logout</Link><i class="fa fa-arrow-right ms-3"></i></a>
    </div> 
             
      </>);        
  }

  else{
    {
      setHeaderContent(<>
           <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
              <Link to="/" className="nav-item nav-link ">
                Home
              </Link>
              <Link to="/about" className="nav-item nav-link">
                About
              </Link>
              <Link to="/service" className="nav-item nav-link">
                Services
              </Link>

              <div className="nav-item dropdown">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Pages
                </Link>
                <div className="dropdown-menu fade-up m-0">
                  <Link to="price" className="dropdown-item">
                    Pricing Plan
                  </Link>
                  <Link to="feature" className="dropdown-item">
                    Features
                  </Link>
                  <Link to="quote" className="dropdown-item">
                    Free Quote
                  </Link>
                  <Link to="team" className="dropdown-item">
                    Our Team
                  </Link>
                  <Link to="testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                  <Link to="404" className="dropdown-item">
                    404 Page
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
              <Link to="/register" className="nav-item nav-link">
                Register
              </Link>
              <Link to="/login" className="nav-item nav-link">
             
                Login
              </Link>
            
</div>
          </div>   
      </>
      );        
           } 
          }
        },1000);
      },[]);
    return (
      <>
       {/* <Auth /> */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow border-top border-5 border-primary sticky-top p-0">
        <Link to="/about"
          className="navbar-brand bg-primary d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="mb-2 text-white">Tender</h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        
        {HeaderContent}
      
      </nav>
      </>
    )
}
export default Header;
