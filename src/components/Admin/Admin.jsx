import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useSelector } from 'react-redux';




import { Link, useNavigate } from 'react-router-dom';





const Admin = () => {

  const store=useSelector((store)=>
  store)
 
  const navigate=useNavigate()
 
  const [state,setstate]=useState(store)

 

   
    function Data(){
        const [data,setdata]=useState([])
 
        useEffect(()=>{
            axios.get("https://brandandbeyond.herokuapp.com/users").then((res)=>{
              setdata(res.data)
            })
        },[])
         
        console.log(data)

      return (
        <>
        {
            data.map((e)=>(
               <Link to={`/user/${e._id}`}> <p>{e.username}</p></Link>
            ))
        }
        </>
      )
    }
 
 

  
    return (
   <>
   <h1>Admin  page</h1>

<br />
<p1>{state.state == true && state.data == "admin"?  "Users list" :null  } </p1>


   <div >{state.state == false  || state.data == "user"  ?  "Only Admin can Access this page  LOGIN!! .." :null  } </div>
  


   <div >{state.state == true  && state.data == "admin" ?  <Data></Data> :null  } </div>


   
   </>
    )
    }

export default Admin;