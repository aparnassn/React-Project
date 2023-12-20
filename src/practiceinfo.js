import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

function Practiceinfo() {
  const [data, setData] = useState({
    id: "",
    title: "",
    completed: "",
  });

  const [edit, setEdit] = useState(false);

  
  let content = window.location.hash.split("#")[1];

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${content}`)
      .then((res) => setData(res.data));
  };
  useEffect(() => getData(), []);

  const post = (id) => {
    axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, data);
  };

  
  return (
    <div>
      <form>
        <div className="container">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="col-sm-3">
              <div className="card">
                <div className="card-header">
                  <h4>User Details</h4>
                  <span>
                    <b>Title</b>
                    <input
                      type="text"
                      placeholder="title"
                      value={data.title}
                      onChange={(e) => {
                        setData((o) => {
                            //console.log({...o})
                          return { ...o, title: e.target.value };
                        });
                      }}
                    ></input>
                  </span>
                  <br></br>

                  <span>
                    <b>completed</b>
                    <select
                      className="form-control form-control-sm"
                      value={data.completed}
                    onChange={(e)=>{
                        setData((o)=>{
                            return {...o, completed: e.target.value}
                        })
                    }}>
                      <option>Select</option>
                      <option>True</option>
                      <option>false</option>
                    </select>
                  </span>
                  <center>
                    <Button variant="outline-primary" onClick={()=>post(data.id)}>
                      Edit
                    </Button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/*<table>
        {data.map((d)=>
            <tr>
            
            <td>{d.title}</td>
            <td>{d.completed.toString()}</td>
            </tr>
            )}
        </table>*/}
    </div>
  );
}

export default Practiceinfo;
