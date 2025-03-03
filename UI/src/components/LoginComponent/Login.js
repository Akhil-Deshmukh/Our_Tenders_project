import './Login.css';
import { useState } from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom';
import { userUrl } from '../../userUrl';


function Login(){
    const navigate =useNavigate();
    const [email ,setEmail]= useState();
    const [password , setPassword]= useState();
    const [output , setOutput ] = useState();

    
   
    const handleSubmit =()=>{
        var userDetails = {"email":email,"password":password};
        axios.post(userUrl+'login',userDetails).then((res)=>{
            var userDetails = res.data.userDetails;

            localStorage.setItem("token",res.data.token);
            localStorage.setItem("name",userDetails.name);
            localStorage.setItem("email",userDetails.email);
            localStorage.setItem("mobile",userDetails.mobile);
            localStorage.setItem("address",userDetails.address);
            localStorage.setItem("city",userDetails.city);
            localStorage.setItem("gender",userDetails.gender);
            localStorage.setItem("role",userDetails.role);
            localStorage.setItem("info",userDetails.info);

            (userDetails.role=="admin")?navigate("/admin"):navigate('/user');
            

        }).catch((err)=>{
          //  alert("Invalid user or verify your account.....");
            setEmail("");
            setPassword("");
            setOutput("Invalid Username or Password ( Please Enter Valid Username or Password .....)");


        });
    }
    return(
        <>
          
    <div className="container-fluid overflow-hidden py-5 px-lg-0">
      <div className="container login-page py-5 px-lg-0">
        <div className="row g-5 mx-lg-0 justify-content-center">
          <div className="col-md-6 login-form wow fadeIn" data-wow-delay="0.1s">
          <h6 className="text-danger text-center">{output}</h6>
            <h4 className="text-secondary text-uppercase text-center">Welcome Back</h4>
            <h1 className="mb-4 text-center">Login to Your Account</h1>
            <div className="bg-light p-4">
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                       type="email" 
                       className="form-control" 
                       id="email" 
                       placeholder="Your Email"
                       value={ email} 
                       onChange={ e=>setEmail (e.target.value)} />
                      <label htmlFor="email">Your Email </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input 
                      type="password"
                       className="form-control" 
                       id="password"
                        placeholder="Password"
                        value={ password} 
                        onChange={ e=>setPassword (e.target.value)}/>
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" onClick={handleSubmit} type="button">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
     )
 }
 
export default Login;