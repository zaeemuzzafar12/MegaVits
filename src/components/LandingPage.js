import React, { useEffect } from 'react'
import About from '../About'
import Categories from './Category/Categories'
import Cover from './Cover'
import Pagination from './Pagination'
import Products from './Products/Products'

const LandingPage = ({cate,prod}) => {



  return (
    <>
        <Cover />
        <About />
        <Categories data={cate} />
        <Products    data={prod} />
        <Pagination />
    </>
  )
}

export default LandingPage