import React, { useRef } from 'react'
import "./AdminLogin.css"

const Adminlogin = () => {
    let name = useRef();
    let passowrd = useRef();

    const logindata = async () => {
        let data = {
            name: name.current.value,
            password: passowrd.current.value
        }
        console.log(data);
        if ("parthik" == data.name && "123" == data.password) {
            localStorage.setItem("role", "admin");
            window.location.href = "/reservation"
            console.log("login successfull");
            alert("login successfull")
        } else {
            alert("Error")
        }
    }
    return (
        <div className='wrrapeer'> 
            <div class="mx-auto m-5 form" style={{ width: "400px" }}>
                <h1>Admin Login </h1>
                <label>Name  </label>
                <input type="text" placeholder='Enter admin Name' ref={name} />
                <label>passowrd </label>
                <input type="password" placeholder='Enter admin password' ref={passowrd} />
                <button onClick={logindata}>Submit</button>
            </div>
        </div>

    )
}

export default Adminlogin