import React ,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const HeaderSearch = () => {
  const [search,setsearch]=useState()
  console.log("search Api",search)

  const searchAPi = ()=> {
    console.log("searching Api")
  }


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