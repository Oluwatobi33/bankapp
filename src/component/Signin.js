import React from 'react'
import { useState, useEffect } from "react"
// import { useParams, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Background from './Background'
import { Navigate } from 'react-router-dom'
const Signin = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [userLogin, setuserLogin] = useState([])
    const [Error, setError] = useState("")
    const login = () => {
        let emmanuel = JSON.parse(localStorage.getItem("tobi"))
        if (email !== "" && password !== "") {
            for (const a of emmanuel) {
                let User = { email, password}
                if (a["email"] === User.email && a["password"] === User.password) {
                    localStorage.signinEmail = JSON.stringify(email);
                    Navigate('')
                } else {
                    let err = "Please confirm you fill input outlet correctly"
                    setError(err)
                }
            }
        }else{
            let err = "Please fill all your input outlet"
            setError(err)
          }
    }
        return (
            <>
                <div className="container">
                    <p>{Error}</p>
                    <div className="row">
                        <div className="col-md-6 my-3">
                            <input type="text" className=" inp" placeholder="Email" onChange={(e) => setemail(e.target.value)}/>
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
                        <button type='button' className='btn btn-primary' onClick={login}>Signin</button>
                    </div>
                </div>
            </>
        )
    }

    export default Signin