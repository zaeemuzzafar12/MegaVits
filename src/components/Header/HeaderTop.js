import React from 'react'

const HeaderTop = () => {
  return (
    <>
        <a href="tel:1 352-394-8487">Info: +1 352-394-8487</a>
        <p className="greenText">Enjoy 5% discount on your first order</p>
        <select className="form-select" aria-label="Default select example">
            <option selected>Us Dollar</option>
            <option value="1">Us Dollar</option>
            <option value="2">Us Dollar</option>
            <option value="3">Us Dollar</option>
        </select>
    </>
  )
}

export default HeaderTop