import React from "react";
import { useState } from "react";

function SearchApp() {
  const itemList = () => [
    "Google",
    "Microsoft",
    "Finnovo",
    "Bingo",
    "Facebook",
    "Finnaco",
    "Twitter",
  ];

  const [filteredList, setFilteredList] = new useState(itemList);

  function filterBySearch(e) {
    var query = e.target.value;
    var updatedList = [...itemList];

    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  }

  return (
    <div>
      <div className="Container">
        <div className="d-flex justify-content-center align-items-center">
          <div className="card">
            <div className="card-body">
              <h2>React Search</h2>
              <input
                type="search"
                placeholder="search"
                onChange={filterBySearch}
              ></input>
              <ol>
                {filteredList.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchApp;
