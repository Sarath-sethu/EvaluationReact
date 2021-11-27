import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function VisitDetails(){
    if(!localStorage.getItem('mytoken')){
        window.location='./login'
      }
    const [visit,setvisit]=useState([])
    const {id}=useParams();
    const navigate = useNavigate()

   useEffect(()=>{
        axios
        .get(`http://localhost:4500/visit/${id}`,{
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



    return(<div style={{width:1270}}>
        <h1 style={{textAlign:'center',color:'#AAABB8'}}>Visit Details</h1>
        <br/>
        <div style={{color:'white',textAlign:'center'}}>
        <h2>Customer Name: {visit.cust_name}</h2>
        <h2>Contact Person: {visit.contact_person}</h2>
        <h2>Contact Number: {visit.contact_no}</h2>
        <h2>Interested Product: {visit.interest_product}</h2>
        <h2>Visit Subject: {visit.visit_subject}</h2>
        <h2>Description: {visit.description}</h2>
        <h2>Visit Date and Time: {visit.visit_datetime}</h2>
        <h2>Disabled: {visit.is_disabled}</h2>
        <h2>Deleted: {visit.is_deleted}</h2>
        <h2>Employer ID: {visit.emp_id}</h2>

        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div>
        <button style={{backgroundColor:'#1f1e1f',color:'#7F7F7F',width:95, height:35,fontWeight:'bolder'}} type='submit' onClick={()=>navigate(`/visitdelete/${visit.id}`)}>Delete visit</button>
        </div>
        <div>
        <button style={{width:80, height:35,backgroundColor:'#1f1e1f',color:'#7F7F7F',fontWeight:'bolder'}} type='button' onClick={()=>navigate(`/visitedit/${visit.id}`)}>Edit visit</button>
        </div>
        </div>
        <div>
        <br/>
        <Link style={{fontSize:20,color:'#45A29E',fontWeight:'bolder'}} to={'/visitlist'}>Go back to visit List</Link>
        </div>
        </div>
    </div>)

}

export default VisitDetails;