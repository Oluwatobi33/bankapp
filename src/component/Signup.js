import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
const Signup = () => {
    const [fullname, setfullname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [allUsers, setallUsers] = useState([])
    useEffect(() => {
        if (localStorage.tobi) {
          let inform = JSON.parse(localStorage.tobi)
          setallUsers(inform)        
        }else{
          setallUsers([])
        }
      }, [])
    const submit = () => {
        if (fullname !=="" && email !=="" && password !=="" && phoneNumber !=="") {
            let User = {fullname,email,password,phoneNumber}
            setallUsers(()=>{
            let applicant = [...allUsers,User]
            localStorage.tobi = JSON.stringify(applicant)
            // Navigate('/')
            return applicant 
            }) 
        }
    }
    return (
        <><NavBar/>
            <div className="container">
                <div className="row">
                    <div className="row justify-content-center nice ">
                        <div className="col-11 ">
                            <div className="row justify-content-center mt-5 ">
                                <h1 className=" fw-bold text-center text-uppercase text-white mt-4">Registration
                                    page</h1>
                                <div className="col-md-6 my-3">
                                    <input type="text" className=" inp" placeholder="FullNmae" onChange={(e)=>setfullname(e.target.value)}/>
                                    <div className="dd">
                                        <small id="err1" className=""></small>
                                    </div>
                                </div>
                                <div className="col-md-6 my-3">
                                    <input type="text" className="inp" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
                                    <div className="dd">
                                        <small id="err4" className=""></small>
                                    </div>
                                </div>
                            </div>
                            <div className="row"> 
                                <div className="col-md-6 my-3">
                                    <input type="text" className="inp" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                                    <div className="dd">
                                        <small id="err5" className=""></small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="inp" placeholder="PhoneNumber" onChange={(e)=>setphoneNumber(e.target.value)} />
                                    <div className="dd">
                                        <small id="err6" className=""></small>
                                    </div>
                                </div>
                            </div>
                            <center className='mt-4'>
                                <button type="submit" className="btn btn-lg btn-success" onClick={submit} >SignUp</button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div classNameName="col-md-6">
                {/* <img src={img1} classNameName='img-responsive img-fluid'/> */}
            </div>
        </>
    );
};
export default Signup;
