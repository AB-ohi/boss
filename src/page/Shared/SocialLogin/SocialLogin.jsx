import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSingIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const HandelGoogleSingIn = () =>{
        googleSingIn()
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
            const saveUser = {name: loggedUser.displayName, email: loggedUser.email}
            fetch("http://localhost:5000/users",{
            method:"POST",
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(saveUser)
          })
            .then((res) => res.json())
            .then(() => {
                navigate(from, { replace: true });
            });

            
        })
    }
    return (
        <div>
            <div className="divider m-0 px-3"></div> 
            <div className="my-4">
                <img onClick={HandelGoogleSingIn} className="w-[50px] m-auto" src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227" alt="" />
            </div>
        </div>
    );
};

export default SocialLogin;