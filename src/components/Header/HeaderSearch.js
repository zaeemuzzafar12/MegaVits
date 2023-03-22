

import React ,{useState}from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {searchApis} from '../../functions/apifunctions'
import Table from "react-bootstrap/esm/Table";
import Menu from "@mui/material/Menu";
import { NavLink } from 'react-router-dom';
import '../../App.css'

const HeaderSearch = () => {

  const [search,setsearch]=useState([])
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(search);

  const filter = async(e) => {
    const keyword = e.target.value;
    console.log(keyword)
  
    if (keyword === '') {
      // If the keyword is empty, clear the search results and set the keyword state to an empty string
      setsearch([]);
      setName('');
      setFoundUsers([]);
      return;
    }
  
      const get = await searchApis(`product/searchProduct/${keyword}`)
      setsearch(get?.data?.data || [])
  
    if (keyword !== '') {
      const results = search?.filter((user) => {
        return user?.name?.toLowerCase()?.startsWith(keyword?.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
  
      console.log("filter",results)
      setFoundUsers(results);
    }
  
    setName(keyword);
  };
  
                          

 
  
  return (
    <>
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {search && search.length > 0 ? (
          search.map((user) => (
          
            <li key={user.id} className="user">
              <NavLink to={`/product/${user._id}`} >
              <span className="user-name">{user.name}</span>
              </NavLink>
              <span className="user-age">${user.price}</span>
            </li>
          ))
        ) : null}
      </div>
    </div>
       
    </>
  )
}

export default HeaderSearch