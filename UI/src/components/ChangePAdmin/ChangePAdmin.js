import './ChangePAdmin.css'
import { useState } from 'react';
import { userUrl } from '../../userUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function ChangePAdmin(){

    const navigate = useNavigate();
    const [opassword, setOldPassword] = useState();
    const [npassword, setNewPassword] = useState();
    const [cnpassword, setConfirmNewPassword] = useState();
    const [output, setOutput] = useState();

    const handleSubmit = ()=>{
        var condition_obj = {"email":localStorage.getItem("email"),"password":opassword};
        axios.get(userUrl+'fetch',{
            params:{condition_obj:condition_obj}
        }).then((res)=>{

            if(npassword == cnpassword){
                var update_details = {"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}};
                axios.patch(userUrl+"update",update_details)
                .then((res)=>{
                    alert('Password updated successfully , please login again....');
                    navigate("/logout");

                })
            }
            else{
                setOutput("New & Confirm new password mismatch , please try again....")
                setNewPassword("");
                setConfirmNewPassword("");
            }
        }).catch((e)=>{
            setOutput("Invalid old Password , Plz try again");
            setOldPassword("");
        });
    };


    return (
        <>
       {/* content Start */}
       <div className="container-fluid overflow-hidden py-5 px-lg-0">
      <div className="container login-page py-5 px-lg-0">
        <div className="row g-5 mx-lg-0 justify-content-center">
          <div className="col-md-6 login-form wow fadeIn" data-wow-delay="0.1s">
            <h6 className="text-secondary text-uppercase text-center">
              {output && <span className="text-danger">{output}</span>}
            </h6>
            <h1 className="mb-4 text-center">Change Your Password</h1>
            <div className="bg-light p-4">
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="opassword"
                        placeholder="Enter Old Password"
                        value={opassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                      />
                      <label htmlFor="opassword">Old Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="npassword"
                        placeholder="Enter New Password"
                        value={npassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                      />
                      <label htmlFor="npassword">New Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="cnpassword"
                        placeholder="Confirm New Password"
                        value={cnpassword}
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                      />
                      <label htmlFor="cnpassword">Confirm New Password</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      onClick={handleSubmit}
                      type="button"
                    >
                      Change Password
                    </button>
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
export default ChangePAdmin;