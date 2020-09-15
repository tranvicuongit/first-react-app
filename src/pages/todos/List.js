import React, { Component } from "react";
import { Link } from "react-router-dom";
class List extends Component {
  render() {
    const todos = [
      {
        id: 1,
        name: "To do 1",
      },
    ];
    console.log(todos);
    return (
      <div className="col">
        <h1>List</h1>
        <ul className="list-group">
          {todos.map((item, index) => (
            <Link key={index} to={"detail/" + item.id}>
              <li className="list-group-item">{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
