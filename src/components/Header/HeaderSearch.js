import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const HeaderSearch = () => {
  return (
    <>
         <form action="" className="searc_sec">
            <input type="search" placeholder="Search Product" className="search_input" />
            <button type="button" className="search_btn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
         </form>
    </>
  )
}

export default HeaderSearch