import React from 'react'
import HeaderIcons from './HeaderIcons'
import HeaderLogo from './HeaderLogo'
import HeaderNavbar from './HeaderNavbar'
import HeaderSearch from './HeaderSearch'
import HeaderTop from './HeaderTop'

const Header = () => {
  return (
    <>
        <div className='container'>
            <div className='header-top-section'>
                <HeaderTop />
            </div>
            <div className='header-top-sect2'>
                <div className='header-left'>
                    <HeaderLogo />
                </div> 
                <div className='header-right'>
                   <HeaderSearch />
                </div>
                <div className='header_detail_wrap'>
                    <HeaderIcons />
                </div>
            </div>
           
        </div>
        <div className='header_navigation'>
            <div className='container'>
                <div  style={{padding:"10px"}}>
                   <HeaderNavbar />
                </div>
            </div>
            </div>
    </>
  )
}

export default Header