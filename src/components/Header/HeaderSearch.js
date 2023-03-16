import React ,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {searchApis} from '../../functions/apifunctions'
import Table from "react-bootstrap/esm/Table";
import Menu from "@mui/material/Menu";

const HeaderSearch = () => {

  const [search,setsearch]=useState([])
                          
  const searchAPi = async(event)=> {
    const get = await searchApis(`product/searchProduct/${search}`)
    setsearch(get?.data?.data || [])
    console.log("searching Api")
    
  }

  console.log("product search:",search)
  
  return (
    <>
         <form action="" className="searc_sec">
            <input type="search" placeholder="Search " className="search_input" onChange={(e)=>setsearch(e.target.value)} />
            <button type="button" className="search_btn"><FontAwesomeIcon icon={faMagnifyingGlass} onClick={searchAPi}/></button>
            
         </form>
        
        
         
        
    </>
  )
}

export default HeaderSearch