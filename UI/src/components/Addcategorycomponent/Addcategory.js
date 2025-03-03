import './Addcategory.css';
import {useState} from "react";  
import { categoryUrl } from '../../userUrl';
import axios from 'axios'


function Addcategory(){

    const [catnm , setCatName ] = useState();
    const [file, setFile ] = useState();
    const [output , setOutput] = useState();

    const handleChange = (e)=>{
        setFile(e.target.files[0]);

    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        var formdata =  new FormData();
        formdata.append('catnm',catnm);
        formdata.append('caticon',file);

        const config = {
            "contact-type":'multipart/form-data'
        }
        axios.post(categoryUrl+"save",formdata,config)
        .then((res)=>{
            setOutput("Category added Successfully")
            setCatName("");

        }).catch((e)=>{
            console.log(e);
            
        })
    }
    return (
        <>
       {/* content Start */}
       
       <div className="container-fluid overflow-hidden py-5 px-lg-0 bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="container login-page py-5 px-lg-0">
        <div className="row g-5 mx-lg-0 justify-content-center">
          <div className="col-md-6 login-form wow fadeIn shadow-lg rounded p-4 bg-white" data-wow-delay="0.1s">
          <h6 className="text-danger text-center">{output}</h6>
            <h1 className="mb-4 text-center text-primary fw-bold">Add New Category</h1>
            <div className="bg-light p-4 rounded">
              <form>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 shadow-sm"
                        id="categoryName"
                        placeholder="Category Name"
                        value={catnm}
                        onChange={e => setCatName(e.target.value)}
                      />
                      <label htmlFor="categoryName">Category Name</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control border-0 shadow-sm"
                        id="categoryIcon"
                        onChange={handleChange}
                      />
                      <label htmlFor="categoryIcon">Category Icon</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-success w-100 py-3 fw-bold shadow-sm rounded-pill"
                      onClick={handleSubmit}
                      type="button"
                    >
                      Add Category
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
export default Addcategory;