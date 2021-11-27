import { useState } from "react";
import axios from "axios"
import {useNavigate} from 'react-router-dom'

function Login(){
    localStorage.clear();
    return(<>
        <UserLogin/>
    </>)
}

function UserLogin(){
    const navigate = useNavigate()
    function SubmitHandle(event){
        event.preventDefault();
        console.log(inputs);

        axios
        .post(`http://localhost:3500/login`,inputs)
        .then(response=>{
            localStorage.setItem('mytoken',response.data.accessToken)
            if(inputs.role=='admin'){
            window.location='/VisitList'
            }
            else{
                window.confirm('Only admin can login')
            }
        })
        .catch(error=>{
            localStorage.clear()
            if(error.response){
                alert(error.response.data)
            }
        })
    }
    const [inputs,setInputs]=useState({})
    function ChangeHandle(event){
        const name=event.target.name;
        const value=event.target.value;

        setInputs(values=>({...values,[name]:value}))
    }

    //Styles
    const form={
        textAlign:'center',
        width:1275
    }
    const formStyle={
        fontSize:20,
        padding:15,
        color:'white'
    }
    const headStyle={
        color:'#AAABB8'
    }

    return(<div style={form}>
        <h1 style={headStyle}>Login</h1>
        <form style={formStyle} onSubmit={SubmitHandle}>
            <div>
            <label>User Name: </label>
            </div>
            <div>
            <input type='text' name='email' onChange={ChangeHandle} value={inputs.email || ""}></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Password: </label>
            </div>
            <div>
            <input type='password' name='password' onChange={ChangeHandle} value={inputs.password || ""}></input>
            </div>
            <div style={{marginTop:10}}>
            <label>Role: </label>
            </div>
            <div>
            <input type='text' name='role' onChange={ChangeHandle} value={inputs.role || ""}></input>
            </div>
            <div style={{marginTop:4}}>
            <input style={{marginRight:2,width:60, height:25}} type='submit'></input>
            <button style={{width:60, height:25}} type='button' onClick={()=>navigate(`/register`)}>Register</button>
            </div>
        </form>    
    </div>)
}

export default Login;