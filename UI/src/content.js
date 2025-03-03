import {Route, Routes} from 'react-router-dom';
import Home from './components/HomeComponent/Home';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Logout from './components/LogoutComponent/Logout';
import About from './components/AboutComponent/About';
import Adminhome from './components/AdminhomeComponent/Adminhome';
import Manageusers from './components/Manageusers/Manageusers';
import Userhome from './components/UserhomeComponent/Userhome';
import ChangePAdmin from './components/ChangePAdmin/ChangePAdmin';
import EditPAdmin from './components/EditPAdmin/EditPAdmin';
import Addcategory from './components/Addcategorycomponent/Addcategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';
import ViewCategory from './components/ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './components/ViewSubCategoryComponent/ViewSubCategory';
import AddFindUs from './components/AddFindUsComponent/AddFindUs';
import ViewProduct from './components/ViewProductComponent/ViewProduct';
import Bidproduct from './components/BidproductComponent/Bidproduct'
import ViewBidProduct from './components/ViewBidProductDetailComponent/ViewBidProduct';
import ViewBid from './components/ViewBidComponent/ViewBid';





export default function Content (){
    return (<>
    <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = '/about' element = {<About/>}></Route>
        <Route path = '/contact' element = {<Contact/>}></Route>
        <Route path = '/service' element = {<Service/>}></Route>
        <Route path = '/register' element = {<Register/>}></Route>
        <Route path = '/login' element = {<Login/>}></Route>
        <Route path = '/admin' element= {<Adminhome/>}></Route>
        <Route path = '/user' element= {<Userhome/>}></Route>
        <Route path = '/manageusers' element= {<Manageusers/>}></Route>
        <Route path = '/addcategory' element = {<Addcategory/>}></Route>
        <Route path = '/addsubcategory' element = {<AddSubCategory/>}></Route>
        <Route path = '/logout' element = {<Logout/>}></Route>
        <Route path = '/cpadmin' element = {<ChangePAdmin/>}></Route>
        <Route path = '/epadmin' element = {<EditPAdmin/>}></Route>
        <Route path = '/viewcategory' element = {<ViewCategory/>}></Route>
        <Route path = '/viewsc/:catnm' element = {<ViewSubCategory/>}></Route>
        <Route path = '/addfindus' element = {<AddFindUs/>}></Route>
        <Route path = '/viewp/:subcatnm' element = {<ViewProduct/>}></Route>
        <Route path="/bidp/:_id" element={ <Bidproduct/>} ></Route>
        <Route path="/viewbidp" element={ <ViewBidProduct />} ></Route>
        <Route path="/viewbid/:_id" element={ <ViewBid/>} ></Route>





    </Routes>
        </>
)

   
}
