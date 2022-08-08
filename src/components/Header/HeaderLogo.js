import React from 'react'
import img1 from '../../images/logo.png'
const HeaderLogo = () => {
  return (
        <>
            <a href="index.php">
				<img src={img1} className="img-fluid" alt="logo" />
			</a>
        </>
  )
}

export default HeaderLogo