    import './AddFindUs.css';
    import { useState, useEffect } from 'react';
    import { categoryUrl,subcategoryUrl, productapiurl} from '../../userUrl';
    import axios from 'axios';


    function AddFindUs(){
        const [file,setFile] = useState();
        const [catName , setCatName] = useState();
        const [title , setTitle] = useState();
        const [subCatName ,setSubCatName] =useState();
        const [descp,setDescription] = useState();
        const[bprice , setBasePrice] = useState();
        const [output,setOutput] = useState();
        const [cDetails ,setCatDetails] = useState([]);
        const [scDetails , setScDetails] = useState([]);

        useEffect(()=>{
            axios.get (categoryUrl +'fetch' )
            .then((res)=>{
                setCatDetails(res.data);
            })
            .catch((e)=>{console.log(e);
            })
        })

        const fetchSubCat = (catnm)=>{
            setCatName(catnm);
            axios.get(subcategoryUrl + 'fetch?catnm='+catnm)
            .then((res)=>{setScDetails(res.data)})
            .catch((e)=>{setCatDetails([]);
            });
        }

        const handleChange = (e)=>{
            setFile(e.target.files[0]);
        };
        const handleSubmit = (e)=>{
            e.preventDefault();
            var formData = new FormData();

            formData.append('title',title);
            formData.append('catnm', catName);
            formData.append('subcatnm', subCatName);
            formData.append('description',descp);
            formData.append('baseprice', bprice);
            formData.append('picon', file);

            const config ={
                'content-type' :'multipart/form-data'
            };
            axios.post (productapiurl + 'save',formData,config)
            .then((res)=>{
                setCatName("");
                setSubCatName("");
                setTitle("");
                setDescription("");
                setBasePrice("");
                setOutput("Add Successfully");
            });
        };
        return(<>
           <div className="container-fluid overflow-hidden py-5 px-lg-0 bg-gradient-to-r from-blue-500 to-purple-500">
  <div className="container py-5 px-lg-0">
    <div className="row g-5 mx-lg-0 justify-content-center">
      <div className="col-md-6 shadow-lg rounded p-4 bg-white">
        <h6 className="text-danger text-center">{output}</h6>
        <h1 className="mb-4 text-center text-primary fw-bold">Add Tenders Here !!!</h1>
        <div className="bg-light p-4 rounded">
          <form>
            <div className="row g-3">
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0 shadow-sm"
                    placeholder="Title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <label htmlFor="Title">Title</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <select
                    className="form-control border-0 shadow-sm"
                    value={catName}
                    onChange={e => fetchSubCat(e.target.value)}
                  >
                    <option>Select Category</option>
                    {cDetails.map((row) => (
                      <option key={row.catnm}>{row.catnm}</option>
                    ))}
                  </select>
                  <label htmlFor="catnm">Category Name</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <select
                    className="form-control border-0 shadow-sm"
                    value={subCatName}
                    onChange={e => setSubCatName(e.target.value)}
                  >
                    <option>Select Subcategory</option>
                    {scDetails.map((row) => (
                      <option key={row.subcatnm}>{row.subcatnm}</option>
                    ))}
                  </select>
                  <label htmlFor="subcatnm">Sub Category Name</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control border-0 shadow-sm"
                    placeholder="Description"
                    value={descp}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <label htmlFor="Description">Description</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="number"
                    className="form-control border-0 shadow-sm"
                    placeholder="Base Price"
                    value={bprice}
                    onChange={e => setBasePrice(e.target.value)}
                  />
                  <label htmlFor="Base Price" >Base Price</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input
                    type="file"
                    className="form-control border-0 shadow-sm"
                    onChange={handleChange}
                  />
                  <label htmlFor="file">Sub Product Icon</label>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-success w-100 py-3 fw-bold shadow-sm rounded-pill"
                  onClick={handleSubmit}
                  type="button"
                >
                  Add Tender
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
        </>)
    }
    export default AddFindUs;
