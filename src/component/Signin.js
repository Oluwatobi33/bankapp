import React from 'react'
import { useState, useEffect } from "react"
// import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Background from './Background'
import { Navigate } from 'react-router-dom'
import l from "../assest/image/l.png"
import Signup  from './Signup'
// import { Navigate, useNavigate } from "react-router-dom";
const Signin = () => {
    // const Navigate = useNavigate()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [userLogin, setuserLogin] = useState([])
    const [Error, setError] = useState("")
    const login = () => {
        let emmanuel = JSON.parse(localStorage.getItem("tobi"))
        if (email !== "" && password !== "") {
            for (const a of emmanuel) {
                let User = { email, password }
                if (a["email"] === User.email && a["password"] === User.password) {
                    localStorage.signinEmail = JSON.stringify(email);
                    Navigate('')
                } else {
                    let err = "Please confirm you fill input outlet correctly"
                    setError(err)
                }
            }
        } else {
            let err = "Please fill all your input outlet"
            setError(err)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row justify-content-center my-3">
                   <div className='text-center'>
                   <img src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '100px', marginBottom: "11px" }} className='img-responsive img-fluid' />
                  <h4> Welcome To Our Career Page</h4>
                   </div>
                    <div className="col-md-4">
                        <p>Login Page</p>
                        <div className="col-md-6 my-3">
                            <input type="text" className=" inp" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                            <div className="dd">
                                <small id="err1" className=""></small>
                            </div>
                        </div>
                        <div className="col-md-6 my-3">
                            <input type="text" className="inp" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                            <div className="dd">
                                <small id="err4" className=""></small>
                            </div>
                        </div>
                        <button type='button' className='btn btn-primary btn-sm' onClick={login}>Signin</button>
                        <small className='text-secondary'>Don't have an account yet?<Link to='./Signup'><span>Signup</span></Link></small>
                    </div>
                    <div className="col-md-4">
                        <img src={l} className='img-responsive img-fluid w-100'/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Signin