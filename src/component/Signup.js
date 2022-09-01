import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import register from "../assest/image/register.webp"
const Signup = () => {
    const Navigate = useNavigate()
    const [fullname, setfullname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [acc, setacc] = useState("")
    const [allUsers, setallUsers] = useState([])
    useEffect(() => {
        if (localStorage.tobi) {
            let inform = JSON.parse(localStorage.tobi)
            setallUsers(inform)
        } else {
            setallUsers([])
        }
    }, [])
    const submit = () => {
        if (fullname !== "" && email !== "" && password !== "" && phoneNumber !== "") {
            let accno = `0210${Math.floor(Math.random()*1000000)}`
            let cardno = `431${Math.floor(Math.random()*100000)}`
            let bvn = `${Math.floor(Math.random()*1000000)}`
            let defaultMoney = `350 ${Math.floor(Math.random() * 100)}`
            let User = { fullname, email, password, phoneNumber,accno,cardno,bvn,defaultMoney }
            // let takeRandom = math
            setallUsers(() => {
                let applicant = [...allUsers, User]
                localStorage.tobi = JSON.stringify(applicant)
                Navigate('/Signin')
                return applicant
            })
        }
    }
    return (
        <><NavBar />
            <div className="container">
                <div className="row py-5">
                    <div className="col-6">
                        <div className="row">
                            <div className="text-center">
                                <img src="https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg" style={{ width: '100px', marginBottom: "11px" }} className='img-responsive img-fluid' />
                                <h4>Create an account</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 my-3">
                                <input type="text" className=" inp" placeholder="FullName" onChange={(e) => setfullname(e.target.value)} />
                                <div className="dd">
                                    <small id="err1" className=""></small>
                                </div>
                            </div>
                            <div className="col-md-6 my-3">
                                <input type="text" className="inp" placeholder="Email" onChange={(e) => setemail(e.target.value)} />
                                <div className="dd">
                                    <small id="err4" className=""></small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 ">
                                    <input type="text" className="inp" placeholder="Password" onChange={(e) => setpassword(e.target.value)} />
                                    <div className="dd">
                                        <small id="err5" className=""></small>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="inp" placeholder="PhoneNumber" onChange={(e) => setphoneNumber(e.target.value)} />
                                    <div className="dd">
                                        <small id="err6" className=""></small>
                                    </div>
                                </div>
                            </div>
                            <center>
                                <button className="btn btn-success mt-4" onClick={submit}>signup</button>
                            </center>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src={register} className='img-responsive img-fluid w-100' />
                    </div>
                </div>
            </div>

        </>
    );
};
export default Signup;
