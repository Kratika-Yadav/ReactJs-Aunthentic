import {Navigate} from "react-router-dom";
const Protect=({Child}) =>{
//return true if login is done .else returns false
let verify = ()=>{
    if(JSON.parse(localStorage.getItem("currentUser"))!=null)
    {
        return true

    }
    return false;
}

return(<>

{
    verify()?<Child/>:<Navigate to="/"/>
}

</>);
}

export default Protect;