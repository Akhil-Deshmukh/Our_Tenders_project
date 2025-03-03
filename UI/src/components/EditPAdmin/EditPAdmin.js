import './EditPAdmin.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { userUrl } from '../../userUrl';
import { useNavigate } from 'react-router-dom';

function EditPAdmin() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  useEffect(() => {
    const condition_obj = { "email": localStorage.getItem("email") };
    axios.get(userUrl + "fetch", { 
      params: { condition_obj:condition_obj } 
    }).then((res) => {
     
          const users = res.data[0];
          setName(users.name);
          setEmail(users.email);
          setMobile(users.mobile);
          setAddress(users.address);
          setCity(users.city);
          setGender(users.gender);
        
      })
      .catch((e) => console.log(e));
  }, []);

  const handleSubmit = () => {
    const update_details = {
      "condition_obj": { "email": email },
      "content_obj": { "name":name, "mobile":mobile, "address":address, "city":city, "gender":gender },
    };

    axios.patch(userUrl + "update", update_details)
      .then(() => {
        setOutput("Profile Updated Successfully");
        alert("Profile edited successfully");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 wow fadeIn" data-wow-delay="0.5s">
            <div className="card shadow-lg p-4 rounded">
              <div className="card-body">
                <h6 className="text-danger text-center">{output}</h6>
                <h2 className="text-center mb-4 text-primary">Edit Profile</h2>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email address:</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      redOnly
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Mobile:</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Enter Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Address:</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      placeholder="Enter Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">City:</label>
                    <select
                      className="form-control"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">Select City</option>
                      <option>Indore</option>
                      <option>Bhopal</option>
                      <option>Ujjain</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Gender:</label>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={e => setGender(e.target.value)}
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={e => setGender(e.target.value)}
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={handleSubmit}
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPAdmin;
