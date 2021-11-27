import { useState,useEffect } from "react";
import axios from "axios";
import {Link,useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function VisitEdit(){
    if(!localStorage.getItem('mytoken')){
        window.location='./login'
      }
    const {id}=useParams()
    return(<>
        <VisitEditFunc id={id}/>
    </>)
}

function VisitEditFunc(props){
    const[visit, setvisit]=useState({})
    const navigate = useNavigate()

    useEffect(()=>{
        axios
        .get(`http://localhost:4500/visit/${props.id}`,{
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

    function ChangeHandle(event){
        const name=event.target.name;
        const value=event.target.value;

        setvisit(values=>({...values,[name]:value}))
    }
    

    function SubmitHandle(event){
        event.preventDefault();
        console.log(visit);

        if(window.confirm('sure?')){
        axios
        .put(`http://localhost:4500/visit/${props.id}`,visit,{
            headers:{
              'authorization':localStorage.getItem('mytoken'),
              'Accept':'application/json',
              'Content-Type':'application/json'
            }
          })
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            alert('The user details were updated')
        })
    }
}

    //Styles
    const form={
        textAlign:'center',
        width:1263
    }
    const formStyle={
        fontSize:20,
        padding:15,
        color:'white'
    }
   return(<div style={form}>
       <h1 style={{color:'#AAABB8'}}>Visit Details Edit</h1>
        <form style={formStyle} onSubmit={SubmitHandle}>
            <div><label>Customer Name: </label>
            </div>
            <div>
            <input type='text' name='cust_name' onChange={ChangeHandle} value={visit.cust_name || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Contact Person: </label>
            </div>
            <div>
            <input type='text' name='contact_person' onChange={ChangeHandle} value={visit.contact_person || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Contact Number: </label>
            </div>
            <div>
            <input type='number' name='contact_no' onChange={ChangeHandle} value={visit.contact_no || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Interested Product: </label>
            </div>
            <div>
            <input type='text' name='interest_product' onChange={ChangeHandle} value={visit.interest_product || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Visit Subject: </label>
            </div>
            <div>
            <input type='text' name='visit_subject' onChange={ChangeHandle} value={visit.visit_subject || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Description: </label>
            </div>
            <div>
            <input type='text' name='description' onChange={ChangeHandle} value={visit.description || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Visit Date and Time: </label>
            </div>
            <div>
            <input type='datetime' name='visit_datetime' onChange={ChangeHandle} value={visit.visit_datetime || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Employer Id: </label>
            </div>
            <div>
            <input type='number' name='emp_id' onChange={ChangeHandle} value={visit.emp_id || ""} required></input>
            </div>
            <br/>
            <div style={{marginTop:4}}>
            <input style={{backgroundColor:'#1f1e1f',color:'#7F7F7F',width:95, height:35,fontWeight:'bolder'}} type='submit'></input>
            <button style={{backgroundColor:'#1f1e1f',color:'#7F7F7F',width:95, height:35,fontWeight:'bolder'}} type='button' onClick={()=>navigate(`/visitlist`)}>Cancel</button>
            <div>
        <br/>
        <Link style={{fontSize:20,color:'#45A29E',fontWeight:'bolder'}} to={'/visitlist'}>Go back to visit List</Link>
        </div>
            
            </div>
        </form>
   </div>)
}



export default VisitEdit;