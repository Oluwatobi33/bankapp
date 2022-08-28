import React from 'react'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

const UserInterface = () => {
  const [account, setaccount] = useState('')
  return (
    <>
    <div className="mt-5">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-6 d-flex">
                        <img  alt="" className='img-fluid rounded-circle me-2' width="40" height="40"/>
                        <h5 className='pt-2'><b>Ade</b></h5>
                    </div>
                    <div className="col-6">
                        <h5 className='pt-2' style={{float:'right'}}>Transfer History</h5>
                    </div>
                </div>
                <div className="row my-3 p-3" style={{background:'#1FC69D',borderRadius:'15px'}}>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-6">
                                <p className='pt-2'>Account Number</p>
                            </div>
                            <div className="col-6">
                                <h5 className='pt-2' style={{float:'right'}}></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-6"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserInterface