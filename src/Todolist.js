import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Todolist() {
  const [addname, setAddname] = useState("");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [index, setIndex] = useState(0);
  const [completed,setCompleted]=useState(null)

  function handleAdd() {
    if (addname === "" || addname === null) {
      alert("enter something");
      return false;
    } else {
      setList((o) => {
        let cp = [...o];
        cp.push(addname);
        return cp;
      });

      return true;
    }
  }

  let html = list.map((d, index) => (
    <tr>
      <th id={index} style={completed===index?{color:"green"}:{color:"red"}}>{d}</th>

      <button className=" button" onClick={() => Edit(index)}>
        Edit
      </button>
      <button className="button" onClick={() => handleDel(index)}>
        Del
      </button>

      <button className="button" value={completed} onClick={()=>handleCompleted()}>Completed</button>
    </tr>
  ));

  function handleCompleted(index){
    let val =document.getElementById(index)
    val.style.color="green"
    
  }

  function Edit(index) {
    setEdit(true);
    let val = list[index];
    setIndex(index);
    setAddname(val);
  }
  function handleUpdate() {
    setList((element) => {
      let cp = [...element];
      cp[index] = addname;
      return cp;
    });
  }
  function handleDel(index) {
    // let element=list.splice(index,1)
    setList((element) => {
      let cp = [...element];
      cp.splice(index, 1);
      return cp;
    });
  }

  return (
    <div style={{backgroundColor:"#0A0C42" }}>
      <div className="container" style={{ backgroundColor: "skyblue" }}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h2 style={{ textAlign: "center" }}>THINGS TO DO</h2>
                <ul className="nav justify-content-left">
                  <li>
                    <form
                      className="form-inline"
                      style={{ justifyContent: "center" }}
                    >
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Add New"
                        aria-label="Search"
                        value={addname}
                        onChange={(e) => setAddname(e.target.value)}
                      ></input>
                    </form>
                  </li>
                  <li>
                    {edit ? (
                      <button
                        className="btn btn-primary"
                        onClick={()=>{handleUpdate();}}
                      >
                        Update
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={()=>{handleAdd();setAddname("")}}>
                        ADD
                      </button>
                    )}
                  </li>
                </ul>
                <table>{html}</table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todolist;
