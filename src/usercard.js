import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Usercard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);

  function handleClick(id) {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setContent(res.data));
  }

  const user = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };
  const getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data)
      .then((data) => setData(data));
  };
  useEffect(() => getData(), []);
  console.log({ data });
  const post = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", user);
  };
  console.log(content);

  return (
    <div>
      <div className="row">
        {data.map((d) => (
          <div class="col-sm-3 py-3">
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-text">{d.title}</div>
              <div className="card-body"></div>
              <Button
                variant="outline-primary"
                onClick={() => {
                  handleClick(d.id);
                  navigate(`/userinfo#${d.id}`);
                }}
              >
                User Info
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Usercard;
