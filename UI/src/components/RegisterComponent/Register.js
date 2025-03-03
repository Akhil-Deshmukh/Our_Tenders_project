// import {Link} from 'react-router-dom';
// import './Register.css';
import axios from 'axios';
import {userUrl} from '../../userUrl.js'

import { useState } from "react";
import {validateForm} from "../ValidationLogics/validation.js";

function Register (){
  const [output , setOutput ] = useState();
    const [userDetails ,setUserDetails] = useState({
        name : "",
        email : "",
        password:"",
        mobile:"",
        address:"",
        city :"",
        gender : ""
        
    }) 
    const [errors, setErrors] = useState({
        name : "",
        email : "",
        password:"",
        mobile:"",
        address:"",
        city :"",
        gender : "",
        role:""
    }) 


    const handleOnChange =(event)=>{

        let fieldName = event.target.name;
        let value = event.target.value;
        setUserDetails((currData)=>({...currData , [fieldName]:value }))
    }

    const handleSubmit=()=>{
    const {valid, validateErrors} = validateForm(userDetails);
    setErrors(validateErrors)
    // console.log(userDetails);
    //     console.log(valid);
        
    if(valid){
     
        
        axios.post(userUrl + "save" , userDetails)
        .then((res) => {
           alert("User register successfully....")
            setUserDetails({
          
                name : "",
                email : "",
                password:"",
                mobile:"",
                address:"",
                city :"",
                gender : "",
                role:""
            });
            // setErrors({});
        }).catch((err) => {
          setOutput("Invalid user or verify your account.....");

           
        });
    }
    return valid;

        
    }

    return (
        <>
        
<div className="container-xxl py-5">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
        <div className="card shadow-lg p-4 rounded">
        <h6 className="text-danger text-center">{output}</h6>
          <div className="card-body">
            <h2 className="text-center mb-4 text-primary">Register Here!</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                name = "name"
                value= {userDetails.name}
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                    onChange={handleOnChange}
                  required
                />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name = "email"
                  onChange={handleOnChange}
                  required
                  value= {userDetails.email}
                />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  onChange={ handleOnChange}
                   name = "password"
                  required
                  value= {userDetails.password}
                />
                 {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter Mobile"
                  onChange={ handleOnChange}
                   name = "mobile"
                  required
                  value= {userDetails.mobile}
                />
                {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  rows="3"
                  className="form-control"
                  placeholder="Enter Address"
                onChange={ handleOnChange}
                   name = "address"
                  required
                  value= {userDetails.address}
                ></textarea>
                    {errors.address && <small className="text-danger">{errors.address}</small>}

              </div>

              <div className="mb-3">
                <label className="form-label">City</label>
                <select
                  className="form-control"
                onChange={ handleOnChange}
                   name = "city"
                  required
                  value= {userDetails.city}

                >
                  <option value="">Select City</option>
                  <option>Indore</option>
                  <option>Bhopal</option>
                  <option>Ujjain</option>
                  <option>Betul</option>
                </select>
                {errors.city && <small className="text-danger">{errors.city}</small>}
              </div>

              <div className="mb-3">
                <label className="form-label">Gender</label>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    onChange={ handleOnChange}
                        value = "male"
                        name="gender"
                    required
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    className="form-check-input"
                    onChange={ handleOnChange}
                    name="gender"
                    value="female"
                    required
                  />
                  <label className="form-check-label">Female</label>
                </div>
                {errors.gender && <small className="text-danger">{errors.gender}</small>}

              </div>

              <button onClick={handleSubmit} type="button" className="btn btn-success w-100" >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


        </>
    )

}
export default Register;
