import { useParams } from "react-router-dom";
import axios from "axios";

function VisitDelete(){
    if(!localStorage.getItem('mytoken')){
        window.location='./login'
      }
    const {id}=useParams();


    axios
            .delete(`http://localhost:4500/visit/${id}`,{
                headers:{
                  'authorization':localStorage.getItem('mytoken'),
                  'Accept':'application/json',
                  'Content-Type':'application/json'
                }
              }) 
            .then(response=>{
                console.log("Promise fulfilled");
                console.log(response);
                window.location='/visitlist';
            })
}

export default VisitDelete;