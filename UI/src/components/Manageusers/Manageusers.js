import './Manageusers.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { userUrl } from '../../userUrl';
import { useNavigate } from 'react-router-dom';

function Manageusers()
{
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState([]);

    useEffect(()=>{
        var condition_obj = {"role":"user"};
        axios.get(userUrl+'fetch',{
            params : {condition_obj:condition_obj}
        }).then((res)=>{
            // console.log(res.data);
            setUserDetails(res.data);
            
        }).catch((err)=>{
            console.log(err);
            
        })

    });
    var changeStatusUser = (_id,s)=>{
        if(s=="verify"){
            var update_details = {"condition_obj":{"_id":_id,},"content_obj":{"status":1}};
            axios.patch(userUrl+"update",update_details)
            .then((res)=>{
                alert("User verified");
                navigate("/manageusers");
            }).catch((err)=>{
                console.log(err);
                
            });

        }
        else if(s=='block'){
            var update_details = {"condition_obj":{"_id":_id,},"content_obj":{"status":0}};
            axios.patch(userUrl+"update",update_details)
            .then((res)=>{
                alert ('user blocked');
            navigate("/manageusers");

            });
          
        }
        else{
            var delete_details = {"data":{"_id":_id}};
            axios.delete(userUrl+"delete",delete_details).then((res)=>{
                alert("User delete");
                navigate("/manageusers");
            });
        }
    };

    return(<>
    {/* content Start */}
    <div className="container-fluid overflow-hidden py-5 px-lg-0">
      <div className="container login-page py-5 px-lg-0">
        <div className="row g-5 mx-lg-0 justify-content-center">
          <div className="col-lg-12 login-form wow fadeIn" data-wow-delay="0.5s">
            <h1 className="mb-4 text-center">View & Manage Users</h1>

            <div className="bg-light p-4 rounded">
              <table className="table table-bordered text-center">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>RegID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Info</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
              
                  {userDetails.length > 0 ? (
                    userDetails.map((row) => (
                      <tr key={row._id}>
                        <td>{row._id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td>{row.mobile}</td>
                        <td>{row.address}</td>
                        <td>{row.city}</td>
                        <td>{row.gender}</td>
                        <td>{row.info}</td>
                        <td>
                          {row.status == 1 ? (<span className="text-success fw-bold">Verified</span>) : (<span className="text-warning fw-bold">Blocked</span>
                          )}
                        </td>   
                        <td>
                          <button
                            className="btn btn-sm btn-outline-primary me-2"
                            onClick={() =>
                              changeStatusUser(row._id, row.status == 1 ? "block" : "verify")
                            }
                          >
                            {row.status == 1 ? "Block" : "Verify"}
                          </button>
                          <button
                            className="btn btn-sm btn-outline-dark me-2"
                            onClick={() => changeStatusUser(row._id, "delete")}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="10" className="text-center text-muted">
                        No users found.
                      </td>
                    </tr>
                  )}
               
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>)
}
export default Manageusers;