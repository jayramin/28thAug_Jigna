import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginCompo = () => {
    const navigate = useNavigate();

    const checklogin = (e)=>{
        console.log("called");
        e.preventDefault()
        navigate("/admin/dashboard")
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card">
                            <div className="card-header text-center">Login</div>
                            {/* <div className="card-body">  </div>    */}
                            <div className="card-body">
                                <form onSubmit={checklogin}>
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" placeholder='Enter User Name' className='form-control' name="uname" required />
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Password' type="password"  name="pass" required />
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            <input type="submit" className='btn btn-info' /> &nbsp;
                                            <input type="reset" className='btn btn-warning' />
                                        </div>

                                    </div>
                                </form>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <Link to="/signup">Click here to create new account</Link>
                                    </div>
                                </div>
                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginCompo;