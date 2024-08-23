import React, { useState } from 'react';
import ValidateInput from './../CustomHook/Validate';
const RegistrationCompo = () => {
    // const [username,setUserName] = useState("");
    // const [password,setPassword] = useState("");
    // const [email,setEmail] = useState("");
    // const [mobile,setMobile] = useState("");
    // const [formData,setFormData] = useState({});
    const [emptyData,setEmptyData] = useState(false);
    const { InputChangeHandle, inp, errors } = ValidateInput({}, {});
    const btnClick = () => {
        // alert("called");
        // console.log(inp);
        // // console.log(sizeof(inp) );
        // console.log(inp.legth );
        // console.log(Object.keys(inp).length );
        
        if (Object.keys(inp).length == 0) {
            
            setEmptyData(!emptyData)
        }else{

            if (inp.uname == "" || inp.pass == "" ||inp.email == "" ||inp.mobile == ""  ) {
                // console.log(errors);
                setEmptyData(!emptyData)
            }else{
                setEmptyData(!emptyData)
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inp),
                    // body: JSON.stringify({ username: "example" }),
                })
            }
        }
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card">
                            <div className="card-header text-center">Signup</div>
                            <div className="card-body">

                                <form id='registration-form'>
                                    {/* {JSON.stringify(inp)}
                                    {JSON.stringify(errors)} */}
                                    <div className="row">
                                        <div className="col">
                                            <input type="text" placeholder='Enter User Name' className='form-control' onChange={InputChangeHandle} name="uname" onBlur={InputChangeHandle} required />
                                            {errors.unameError ? <span>This field is Required</span> : <span>&nbsp;*</span>}
                                        </div>

                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Password' type="password" name="pass" onChange={InputChangeHandle} onBlur={InputChangeHandle} required />
                                            {errors.passError ? <span>This field is Required</span> : <span>&nbsp;*</span>}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Email' type="email" onChange={InputChangeHandle} onBlur={InputChangeHandle} name="email" required />
                                            {errors.emailError ? <span>This field is Required</span> : <span>&nbsp;*</span>}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col">
                                            <input className='form-control' placeholder='Enter your Mobile' type="tel" name="mobile" onChange={InputChangeHandle} onBlur={InputChangeHandle} required />
                                            {errors.mobileError ? <span>This field is Required</span> : <span>&nbsp;*</span>}
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col text-center">
                                            <input type="button" onClick={btnClick} value="register" className='btn btn-info' /> &nbsp;
                                            <input type="reset" className='btn btn-warning' />
                                        </div>
                                    </div>
                                </form>
                                        {(emptyData) ? "* fields are required":"" }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegistrationCompo;