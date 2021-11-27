import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import Home from './Home.js';
import NoMatch from './NoMatch';
import About from "./About";
import VisitList from './VisitList'
import background from './background.jpg'
import VisitDetails from "./VisitDetails.js";
import VisitDelete from "./VisitDelete.js";
import VisitEdit from "./VisitEdit.js";
import Registration from "./Registration.js";
import Login from "./Login.js";
import VisitAdd from "./VisitAdd.js";


function App(){
  return(
    <div style={{position:"absolute",backgroundImage:`url(${background})`}}>
    <RoutingAssignment/>
    </div>
  )
}


function RoutingAssignment(){
  return(
    <Router>
      <div  >
      <header><h1 style={{textAlign:'center',color:'white'}}>Sales Team Monitoring System</h1>
      <h3 style={{color:'white',textAlign:'center'}}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</h3></header>
      <ul style={{margin:10,padding:5,listStyleType:"none", textAlign:'center', fontSize:25,backgroundColor:'#1f1e1f'}}>
      <li style={{display:"inline", marginRight:15,borderRight:'1px solid',paddingRight:7,fontFamily:'Snell Roundhand, cursive',fontSize:20}}><Link style={{color:'#7F7F7F',textDecoration:'none'}} to="/">Home</Link></li>
      <li style={{display:"inline", marginRight:15,borderRight:'1px solid',paddingRight:7,fontFamily:'Snell Roundhand, cursive',fontSize:20}}><Link style={{color:'#7F7F7F',textDecoration:'none'}} to="/about">About Us</Link></li>
      <li style={{display:"inline",marginRight:15,borderRight:'1px solid',paddingRight:7,fontFamily:'Snell Roundhand, cursive',fontSize:20}}><Link style={{color:'#7F7F7F',textDecoration:'none'}} to="/register">Register</Link></li>
      {!localStorage.getItem('mytoken')&&<li style={{display:"inline",fontFamily:'Snell Roundhand, cursive',fontSize:20}}><Link style={{color:'#7F7F7F',textDecoration:'none'}} to="/login">Login</Link></li>}
      {localStorage.getItem('mytoken')&&<li style={{display:"inline",marginRight:15,borderRight:'1px solid',paddingRight:7,fontFamily:'Snell Roundhand, cursive',fontSize:20}}><Link style={{color:'#7F7F7F',textDecoration:'none'}} onClick={()=>{window.location='/login'}} to="/login">Logout</Link></li>}
      {localStorage.getItem('mytoken')&&<li style={{display:"inline",marginRight:15,borderRight:'1px solid',paddingRight:7,fontFamily:'Snell Roundhand, cursive',fontSize:20}}><Link style={{color:'#7F7F7F',textDecoration:'none'}} to="/visitlist">Visit List</Link></li>}
      {localStorage.getItem('mytoken')&&<li style={{display:"inline",fontFamily:'Snell Roundhand, cursive',fontSize:20}}><Link style={{color:'#7F7F7F',textDecoration:'none'}} to="/visitadd">Add Visit Details</Link></li>}
      </ul>
    

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NoMatch/>}/>
      <Route path="/visitlist" element={<VisitList/>}/>
      <Route path="/visitdetails/:id" element={<VisitDetails/>}/>
      <Route path="/visitedit/:id" element={<VisitEdit/>}/>
      <Route path="/Visitdelete/:id" element={<VisitDelete/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/visitadd" element={<VisitAdd/>}/>
      
    </Routes>
    <br></br><br></br><br></br><br/><br/><br/><br/>
    <footer style={{textAlign:'center',color:'white',fontSize:20}}><p>CopyRight@ABCSYSTEM2021</p></footer>
    </div>
    </Router>
  )
}

export default App