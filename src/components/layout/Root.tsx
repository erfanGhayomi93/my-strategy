import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";


function Root() {
    const navigate = useNavigate()

    useEffect(() => {
        const email = localStorage.getItem("email")
        if(!email) navigate("/login")
    }, [])


  return <div><Outlet /></div>;
}

export default Root;
