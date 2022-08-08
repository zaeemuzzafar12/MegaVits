import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
const CategoryDetails = ({categories}) => {

    const { id} = useParams(null)
    const [categorydetails,Setcategorydetails] = useState([]);

const CategoryData = () => {
    let cat = categories.map((data) =>  data).filter((item) => item?.id == id)
    Setcategorydetails(cat)
}
    
useEffect(() => {
    CategoryData()
},[])
    
console.log("categorydetails",categorydetails)

  return (
    <div className='container'>
        <div className='row'>
            {
               categorydetails?.length > 0 &&
               categorydetails?.map((data) => {
                return(
                    <>  
                          
                        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6' style={{padding:"40px"}}>
                                <img  src={data?.image} height={400} width={400} />
                        </div>
                        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6' style={{padding:"190px"}}>
                           <strong>{data?.name}</strong> 
                        </div>
                    </>
                )
               }) 
            }
          
        </div>
    </div>
  )
}

export default CategoryDetails