import React from "react";
import "./ListUser.scss";
import { useEffect } from "react";
import { useState } from "react";
import DetailUser from "./DetailUser";
function ListUser() {
  <DetailUser />;
  const [users, setUsers] = useState([]);
  const getApiData = async () => {
    const response = await fetch(
      " https://jsonplaceholder.typicode.com/users"
    ).then((response) => response.json());

    setUsers(response);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div className="list-user-container">
      <div className="list-user-content">
        <div className="title">Fetch data API</div>

        {users &&
          users.map((user) => (
            <div className="child" key={user}>
              {user.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListUser;
