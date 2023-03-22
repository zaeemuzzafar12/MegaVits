import { useState, useEffect } from "react";
import About from "./About";
import "./App.css";
import { useSelector }  from 'react-redux'
import Categories from "./components/Category/Categories";
import Cover from "./components/Cover";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import { Routes , Route } from 'react-router-dom'
import Cart from "./components/AddToCart/Cart";
import LandingPage from "./components/LandingPage";
import Maincart from "./components/AddToCart/Maincart";
import ProductDetails from "./components/Products/ProductDetails";
import CategoryDetails from "./components/Category/CategoryDetails";
import Login from "./components/Authentication/Login";
import UserDashbaord from "./components/Authentication/UserDashbaord";
import Register from "./components/Authentication/Register";

import {getApi} from '../src/functions/apifunctions'

function App() {
  const [categories, Setcategories] = useState([]);
  const [filterbycategory, Setfilterbycategory] = useState("");
  const [data, Setdata] = useState([]);
  const [filterdata, Setfilterdata] = useState([]);
  const [idpass , Setidpass] = useState(0);
  const [productdetails , Setproductdetails] = useState({});

  const [prod ,setprod] = useState([])
  const [cate,setcate] = useState([])

  const apiGet = async()=>{
    const get = await getApi('product/getallProduct')
    setprod(get?.data?.data)
  }
  
  const ceteApi = async ()=>{
    const getCategory = await getApi('category/getAllCategory')
    //console.log("category ",getCategory.data.data)
    setcate(getCategory?.data?.data)
  }
  








  // const ProductByCategory = async () => {
  //   const data = await DataByData();
  //   const products = data?.filter((res) => {
  //     if (
  //       res &&
  //       res?.category &&
  //       res?.category?.name === filterbycategory?.name
  //     ) {
  //       return res?.category?.name;
  //     }
  //   });
  //   Setfilterdata(products);
  // };

  // const ProductsData = async () => {
  //   const products = await DataByData();
  //   Setdata(products);
  // };
  // console.log("data in app.js",data)


  const filterData = (data) => {
    Setfilterbycategory(data);
    // ProductByCategory();
  };
      
  useEffect(() => {
    
    // ProductsData();
    ceteApi()
    apiGet()

  }, []);

  const products = useSelector((state) => state?.carts?.cart)

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={ 
            <LandingPage 
              
             /> } ></Route>
          <Route path="/cart" element={ <Cart  data={prod}/> } ></Route>
          <Route path="/product/:id" element={ <ProductDetails  data={prod}   /> } ></Route>
          <Route path="/category/:id" element={ <CategoryDetails categories={categories}  /> } ></Route>
          <Route path="/category" element={ <Categories data={cate}  /> } ></Route>
          <Route path="/product" element={ <Products   data={prod}  /> } ></Route>
          <Route path="/aboutus" element={ <About /> } ></Route>
          <Route path="/maincart" element={ <Maincart /> } ></Route>
          <Route path="/login" element={ <Login /> }></Route>
          <Route path="/register" element={ <Register /> }></Route>
          <Route path="/userdashboard" element={ <UserDashbaord /> }></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
