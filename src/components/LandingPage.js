import React, { useEffect } from 'react'
import About from '../About'
import Categories from './Category/Categories'
import Cover from './Cover'
import Products from './Products/Products'

const LandingPage = ({categories,filterData,data,filterdata,Setidpass ,idpass}) => {



  return (
    <>
        <Cover />
        <About />
        <Categories categories={categories} filterData={filterData} />
        <Products  data={data} filterdata={filterdata} Setidpass={Setidpass} idpass={idpass} />
    </>
  )
}

export default LandingPage