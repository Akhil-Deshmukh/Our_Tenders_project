import './AddSubCategory.css';
import { useEffect, useState } from 'react';
import { categoryUrl, subcategoryUrl } from '../../userUrl';
import axios from 'axios';

function Addsubcategory() {
  const [file, setFile] = useState();
  const [catName , setCatName] = useState();
  const [subCatName , setSubCatName] = useState();
  const [output , setOutput] = useState();
  const [cDetails , setCatDetails] = useState([]);
  
  useEffect(()=>{
    var condition_obj={};
    axios.get(categoryUrl+"fetch",{
      params : { condition_obj : condition_obj }
    }).then((response)=>{
        //console.log(response.data);
        setCatDetails(response.data);
    }).catch((error)=>{
        console.log(error);
    });    
  },[]);

  const handleChange=(event)=>{
    setFile(event.target.files[0]);
  };
  
  const handleSubmit=(event)=>{
    event.preventDefault();
    var formData = new FormData();
    formData.append('catnm', catName);
    formData.append('subcatnm', subCatName);
    formData.append('caticon', file);
    const config = {
        'content-type': 'multipart/form-data'
    };
    axios.post(subcategoryUrl+"save", formData, config).then((response) => {
      setCatName("");
      setSubCatName("");
      setOutput("Sub Category Added Successfully....");
    });
  };

  return (
    <div className="container-fluid overflow-hidden py-5 px-lg-0 bg-gradient-to-r from-blue-500 to-purple-500">
  <div className="container py-5 px-lg-0">
    <div className="row g-5 mx-lg-0 justify-content-center">
      <div className="col-md-6 wow fadeIn shadow-lg rounded p-4 bg-white" data-wow-delay="0.1s">
        <h6 className="text-danger text-center">{output}</h6>
        <h1 className="mb-4 text-center text-primary fw-bold">Add Subcategory</h1>
        <div className="bg-light p-4 rounded">
          <form>
            <div className="row g-3">
              {/* Category Dropdown */}
              <div className="col-12">
                <div className="form-floating">
                  <select
                    className="form-control border-0 shadow-sm"
                    id="categoryName"
                    value={catName}
                    onChange={e => setCatName(e.target.value)}
                  >
                    <option>Select Category</option>
                    {cDetails.map((row, index) => (
                      <option key={index} value={row.catnm}>{row.catnm}</option>
                    ))}
                  </select>
                  <label htmlFor="categoryName">Category Name</label>
                </div>
              </div>

              {/* Subcategory Name */}
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0 shadow-sm"
                    id="subCategoryName"
                    placeholder="Subcategory Name"
                    value={subCatName}
                    onChange={e => setSubCatName(e.target.value)}
                  />
                  <label htmlFor="subCategoryName">Subcategory Name</label>
                </div>
              </div>

              {/* Subcategory Icon */}
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="file"
                    className="form-control border-0 shadow-sm"
                    id="subCategoryIcon"
                    onChange={handleChange}
                  />
                  <label htmlFor="subCategoryIcon">Subcategory Icon</label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-12">
                <button
                  className="btn btn-success w-100 py-3 fw-bold shadow-sm rounded-pill"
                  onClick={handleSubmit}
                  type="button"
                >
                  Add Subcategory
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  
  
  );
}

export default Addsubcategory;
