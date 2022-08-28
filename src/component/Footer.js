import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='container'>
                <hr style={{borderTop:"3px solid rgba(0,0,0,.1)"}} />
                    <div className="row">
                        <div className="col-4 ">
                            <img className='float-start ms-4 pt-2' src='https://www.interswitchgroup.com/assets/images/home/interswitch_logo.svg' style={{ width: "100px" }} />
                        </div>
                        <div className="col-4 pt-3">
                            <p style={{fontSize:"12px",color:"color: #353f50"}}>© 2002 - 2020 Interswitch Group.</p>
                        </div>
                        <div className="col-4">
                            <ul style={{listStyleType:"none"}}>
                                <li  className="okay"><a href='https://www.linkedin.com/company/interswitch-limited'><i className='fa fa-facebook'></i></a></li>
                                <li><a href='https://twitter.com/InterswitchGRP'></a></li>
                                <li><a href='https://www.facebook.com/InterswitchGroup'><i className='fa fa-facebook'></i></a></li>
                                <li><a href='https://www.instagram.com/interswitchgroup/?hl=en'><i className='fa fa-facebook'></i></a></li>
                                <li><a href='https://www.youtube.com/user/Interswitch'><i className='fa fa-facebook'></i></a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Footer