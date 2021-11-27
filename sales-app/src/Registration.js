import { useState } from "react";
import axios from "axios";

function Registration(){
    return(<>
        <Reg/>
    </>)
}

function Reg(){
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
        .post('http://localhost:3500/register',inputs)
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
       <h1 style={{color:'#AAABB8'}}>Employee Registration</h1>
        <form style={formStyle} onSubmit={SubmitHandle}>
            <div><label>User Name: </label>
            </div>
            <div>
            <input type='text' name='email' onChange={ChangeHandle} value={inputs.email || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Password: </label>
            </div>
            <div>
            <input type='password' name='password' onChange={ChangeHandle} value={inputs.password || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Role: </label>
            </div>
            <div>
            <input type='text' name='role' onChange={ChangeHandle} value={inputs.role || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>First Name: </label>
            </div>
            <div>
            <input type='text' name='first_name' onChange={ChangeHandle} value={inputs.first_name || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Last Name: </label>
            </div>
            <div>
            <input type='text' name='last_name' onChange={ChangeHandle} value={inputs.last_name || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Gender: </label>
            </div>
            <div>
            <input type='text' name='gender' onChange={ChangeHandle} value={inputs.gender || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Age: </label>
            </div>
            <div>
            <input type='number' name='age' onChange={ChangeHandle} value={inputs.age || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Address: </label>
            </div>
            <div>
            <input type='text' name='address' onChange={ChangeHandle} value={inputs.address || ""} required></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Phone Number: </label>
            </div>
            <div>
            <input type='tel' name='Phone_no' onChange={ChangeHandle} value={inputs.Phone_no || ""} required></input>
            </div>
            <div style={{marginTop:4}}>
            <input style={{marginRight:2,width:60, height:25}} type='submit'></input>
            </div>
        </form>
   </div>)
}



export default Registration;