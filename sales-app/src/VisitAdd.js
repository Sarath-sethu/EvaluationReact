import { useState } from "react";

import axios from "axios";


function VisitAdd(){
    if(!localStorage.getItem('mytoken')){
        window.location='./login'
      }
    const[inputs, setInputs]=useState({})

    function ChangeHandle(event){
        const name=event.target.name;
        const value=event.target.value;

        setInputs(values=>({...values,[name]:value}))
    }
    

    function SubmitHandle(event){
        event.preventDefault();
        console.log(inputs);

        if(window.confirm('sure?')){
        axios
        .post('http://localhost:4500/visit',inputs,{
            headers:{
              'authorization':localStorage.getItem('mytoken'),
              'Accept':'application/json',
              'Content-Type':'application/json'
            }
        })
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)
            window.location='/VisitList';
        })
    }
}

    //Styles
    const form={
        textAlign:'center',
        width:1270
    }
    const formStyle={
        fontSize:20,
        padding:15,
        color:'white'
    }



    return(<div style={form}>
        <h1 style={{color:'#AAABB8'}}>Add Visitor Details</h1>
         <form style={formStyle} onSubmit={SubmitHandle}>
             <div><label>Customer Name: </label>
             </div>
             <div>
             <input type='text' name='cust_name' onChange={ChangeHandle} value={inputs.cust_name || ""} required></input>
             </div>
             <div style={{marginTop:10}}>
             <label>Contact Person: </label>
             </div>
             <div>
             <input type='text' name='contact_person' onChange={ChangeHandle} value={inputs.contact_person || ""} required></input>
             </div>
             <div style={{marginTop:10}}>
             <label>Contact Number: </label>
             </div>
             <div>
             <input type='tel' name='contact_no' onChange={ChangeHandle} value={inputs.contact_no || ""} required></input>
             </div>
             <div style={{marginTop:10}}>
             <label>Interested Product: </label>
             </div>
             <div>
             <input type='text' name='interest_product' onChange={ChangeHandle} value={inputs.interest_product || ""} required></input>
             </div>
             <div style={{marginTop:10}}>
             <label>Visit Subject: </label>
             </div>
             <div>
             <input type='text' name='visit_subject' onChange={ChangeHandle} value={inputs.visit_subject || ""} required></input>
             </div>
             <div style={{marginTop:10}}>
             <label>Description: </label>
             </div>
             <div>
             <input type='text' name='description' onChange={ChangeHandle} value={inputs.description || ""} required></input>
             </div>
             <div style={{marginTop:10}}>
             <label>Visit Date and Time: </label>
             </div>
             <div>
             <input type='datetime' name='visit_datetime' onChange={ChangeHandle} value={inputs.visit_datetime || ""} required></input>
             </div>
             <div style={{marginTop:10}}>
             <label>Disabled: </label>
             </div>
             <div>
             <input type='number' name='is_disabled' onChange={ChangeHandle} value={inputs.is_disabled || ""} required></input>
             </div>
             <div style={{marginTop:10}}>
             <label>Deleted: </label>
             </div>
             <div>
             <input type='number' name='is_deleted' onChange={ChangeHandle} value={inputs.is_deleted || ""} required></input>
             </div>
             <div style={{marginTop:10}}>
             <label>Employer ID: </label>
             </div>
             <div>
             <input type='number' name='emp_id' onChange={ChangeHandle} value={inputs.emp_id || ""} required></input>
             </div>
             <div style={{marginTop:4}}>
             <input style={{marginRight:2,width:60, height:25}} type='submit'></input>
             </div>
         </form>
    </div>)

}

export default VisitAdd;