import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Profile =()=>{
    let navigate = useNavigate();

    let handeLogout =()=>{
            if(window.confirm("Logout ?"))
            {
                localStorage.removeItem("currentUser");
                navigate("/")
            }
    }


    return(<div className="profile conc">
        <Navbar/>

    <div className="profile-details">
        <h1>Name</h1>
        <h2>Email</h2>
        <h2>Phone</h2>
        <h3>DOB</h3>
        {/* <button>Logout</button>
        <button>Delete account</button> */}
        <button onClick={handeLogout}>logout</button>
      <button>Delete acoount</button>
    </div>

    </div>


    );
} 
export default Profile;