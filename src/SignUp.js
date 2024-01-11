import React from 'react'

function SignUp() {

    
  return (
    <div className='container'>
        <div className='row'>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='col-sm-5 py-4'>
                <div className='card'>
                    <div className='card-body'>
                        <center><h4>Register Form</h4></center>
                        <span> Name
                            <input type='text' placeholder=' name'></input>
                        </span><br/>
                        
                        <span>Email
                            <input type='email' placeholder='abc@gmail.com'></input>
                        </span><br/>

                        <span>password
                            <input type='password' placeholder='enter password'></input>
                        </span><br/>

                        <span>Confirm password
                            <input type='password' placeholder='enter password'></input>
                        </span><br/>
                        <center><button variant="primary">SignUp</button></center>
                        
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default SignUp