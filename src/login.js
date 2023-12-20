import { useState } from "react";
import { Link, redirect } from "react-router-dom";

function Login() {
  const [emailid, setEmailid] = useState("");
  const [password, setPassword] = useState("");

  function handleChange() {
    let input = {
      email: emailid,
      pswd: password,
    };
    let user = JSON.parse(localStorage.getItem("userlist"));
    let value = user.filter(
      (f) => f.email === input.email && f.password === input.pswd
    );
    console.log({ value });
    if (!value.length > 0) {
      alert("Data not matched");

      return false;
    } else {
      window.location.replace("/note");
      return true;
    }
  }

  return (
      <div className="container-fluid" style={{backgroundImage:`url(https://t3.ftcdn.net/jpg/05/40/78/28/240_F_540782871_Zv3ae5sC4wAR57Y0y33WwCeVw245xHaG.jpg)`,backgroundSize:"cover"}}>
        <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
          <div className="col-sm-4">
            <div className="card">
              <div
                className="card-header"
                style={{ backgroundColor: "seagreen" }}
              >
                <h3>Login Form</h3>
              </div>
              <form>
                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/User_No-Frame.png"
                        style={{ width: 25, height: 25 }}
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="emailid"
                    placeholder="Email or Phone "
                    value={emailid}
                    onChange={(e) => setEmailid(e.target.value)}
                  ></input>
                </div>

                <div className="input-group mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img
                        src="https://play-lh.googleusercontent.com/GxerXSj_Rvj7kLjMtL4ahrzs1QWH9h_sP1fI95v44oZPLJyeVcTrIdK2U2Bnp92B2FUx"
                        style={{ width: 25, height: 25 }}
                      />
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  ></input>
                </div>
                <a href="#" style={{ Color: "seagreen" }}>
                  Forgot password?
                </a>
                <center>
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{
                      width: 85,
                      height: 35,
                      backgroundColor: "seagreen",
                    }}
                    onClick={handleChange}
                  >
                    LOGIN {/* <Link to="/home">Login</Link> */}
                  </button>
                </center>
              </form>
              <h6>
                Not a member?
                {/*<a href="#" style={{color: "seagreen"}} > Signup now</a></h6>*/}
                <Link to="/register">Signup now</Link>
              </h6>

            </div>
          </div>
        </div>
      </div>

  );
}

export default Login;
