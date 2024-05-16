import React, { useRef } from 'react'
import 

const Adminlogin = () => {
    let name = useRef();
    let passowrd = useRef();

    const logindata = async () => {
        let data = {
            name: name.current.value,
            password: passowrd.current.value
        }
        console.log(data);
        if ("jignesh" == data.name && "3315" == data.password) {
            localStorage.setItem("role", "admin");
            window.location.href = "/reservation"
            console.log("login successfull");
            alert("login successfull")
        } else {
            alert("Error")
        }
    }
    return (
        <>
            <div class="mx-auto m-5 form" style={{ width: "400px" }}>
                <h1>Admin Login </h1>
                <label>Name  </label>
                <input type="text" placeholder='Enter admin Name' ref={name} /><br />
                <label>passowrd </label>
                <input type="password" placeholder='Enter admin password' ref={passowrd} /><br />
                <button onClick={logindata}>submit</button>
            </div>
        </>

    )
}

export default Adminlogin