import { useState } from "react";
import Button from 'react-bootstrap/Button';

function Form() {
  const [fullname, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [ph, setPh] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpswd, setConfirmpswd] = useState("");

  function validateInput() {
    if (fullname === "" || fullname === null) {
      alert("please enter your name");
      return false;
    }

    var userRegex = /^[a-zA-Z0-9]+$/;
    if (!userRegex.test(username)) {
      alert("please enter username");
      return false;
    }

    var emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email address");
      return false;
    }

    var phRegex = /^\d{10}$/;
    if (phRegex.length != 0) {
      if (!phRegex.test(ph)) {
        alert("please enter 10 digit number only!!");
        return false;
      }
    }

    if (password === "" || password === null) {
      alert("please enter the password ");
      return false;
    } else if (password.length < 8) {
      return false;
    } else if (password.length > 15) {
      alert("Password lenght must not exceed 15 characters!!");
      return false;
    } else if (password != confirmpswd) {
      alert("password does not match");
      return false;
    }
    return true
  }


function saveData() {
  if (validateInput()) {
    handleChange();
  }
}

function handleChange() {
  let currArray = JSON.parse(localStorage.getItem("userlist"));
  if (!!currArray && !!currArray.length ) {
    let userform = {
      fullname: fullname,
      username: username,
      email: email,
      ph: ph,
      password: password,
      confirmpswd: confirmpswd,
    };

    let fullName = currArray.filter((f) => f.fullname === userform.fullname);
    let un = currArray.filter((f) => f.username === userform.username);
    let emailid = currArray.filter((f) => f.email === userform.email);
    let phno = currArray.filter((f) => f.ph === userform.ph);
    let pswd = currArray.filter((f) => f.pswd === userform.password);

    if (
      fullName.length === 0 &&
      un.length === 0 &&
      emailid.length === 0 &&
      phno.length === 0 &&
      pswd.length === 0
    ) {
      currArray.push(userform);
      localStorage.setItem("userlist", JSON.stringify(currArray));
      alert("Data Saved");
    } else alert("Data already exists");
  } else {
    let userform = {
      fullname: fullname,
      username: username,
      email: email,
      ph: ph,
      password: password,
      confirmpswd: confirmpswd,
    };

    let userlist = [userform];
    localStorage.setItem("userlist", JSON.stringify(userlist));
    alert("Data Saved");
    //document.getElementById("home").click
  }
}
return (
  
    <div className="container-fluid" style={{backgroundImage:`url(https://t3.ftcdn.net/jpg/05/40/78/28/240_F_540782871_Zv3ae5sC4wAR57Y0y33WwCeVw245xHaG.jpg)`,backgroundSize:"cover"}}>
      <div class="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
        <div className="col-sm-6">
          <div className="card" >
            <div className="card-body">
              <form id="signupForm">
                <h4>
                  <u>Registration</u>
                </h4>
                <div className="form-group">
                  <label>
                    <span>
                      <b>Full Name</b>
                    </span>
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      placeholder="Enter Your Name"
                      value={fullname}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  </label>
                  <label className="form-label">
                    <span>
                      <b>Username</b>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                    ></input>
                  </label>
                </div>
                <p></p>

                <div class="form-group">
                  <label>
                    <span>
                      <b>Email address</b>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="abc@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </label>

                  <label>
                    <span>
                      <b>Phone Number</b>
                    </span>
                    <input
                      type="Phonenumber"
                      className="form-control"
                      name="ph"
                      placeholder="Phonenumber"
                      value={ph}
                      onChange={(e) => setPh(e.target.value)}
                    ></input>
                  </label>
                </div>

                <div class="form-group">
                  <label>
                    <span>
                      <b>Password</b>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="enter Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </label>

                  <label>
                    <span>
                      <b>Confirm Password</b>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmpswd"
                      placeholder="confirm Password"
                      value={confirmpswd}
                      onChange={(e) => setConfirmpswd(e.target.value)}
                    ></input>
                  </label>
                </div>

                <center>
                  <div className="col-auto my-1">
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{ width: 95, backgroundColor: "seagreen" }}
                      onClick={saveData}
                    >
                      Register
                    </button>
                    <a href="#" style={{display:"none"}} name="home" value="home">Login</a>
                  </div>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
)
}

export default Form;
