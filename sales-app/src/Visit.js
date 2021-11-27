import React from 'react'
import {Link} from 'react-router-dom'


function Visit(props){
    console.log(props)
    
    return(<div style={{textAlign:'center'}} >
        <br/>
        <Link style={{color:'#45A29E',marginTop:80,fontWeight:'bolder',textDecoration:'none'}} to={`/VisitDetails/${props.details.id}`}><h3 style={{paddingRight:40 ,width:300,display:'inline'}}>{props.details.cust_name}</h3></Link>        
     <br></br>
 </div>)



}

export default Visit 