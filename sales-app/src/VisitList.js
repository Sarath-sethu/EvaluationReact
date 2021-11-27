import {useState, useEffect } from "react";
import  axios  from "axios";
import Visit from './Visit'
function VisitList(){
    if(!localStorage.getItem('mytoken')){
      window.location='./login'
    }
    const[visit,setvisit]=useState([])    

    useEffect(()=>{
        axios
        .get('http://localhost:4500/visit',{
          headers:{
            'authorization':localStorage.getItem('mytoken'),
            'Accept':'application/json',
            'Content-Type':'application/json'
          }
        }) 
        .then(response=>{
            console.log("Promise fulfilled");
            console.log(response);
            setvisit(response.data);
        })

    },[])

    return(<>
        <div style={{width:1265,height:560}}>
        <div style={{color:'white'}}>
        <h1 style={{textAlign:'center',color:'#AAABB8'}}>Visit List</h1><br></br>        
          <hr style={{width:1100}}></hr>
          <h2 style={{color:'#AAABB8',textAlign:'center'}}>Customer Name</h2>
            <ul style={{listStyleType:'none'}}>
                {visit.map(visit=>
                  <li key={visit.id}>
                  <Visit details={visit}></Visit>
                  </li>)}
          </ul>
         
        </div>
        </div>
      </>);
}

export default VisitList;