import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/User/AllUsers"
        );
        setUsers(response.data);
        console.log(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <Link to="/register">
          <button
            style={{ background: "white", margin: "10px", color: "black" }}
          >
            Sing In{" "}
          </button>
        </Link>
        <Link to="/login">
          <button
            style={{ background: "white", margin: "10px", color: "black" }}
          >
            Login In
          </button>
        </Link>
      </div>
      <h1>Registered Users</h1>
      <div
        style={{
          color: "black",
          position: "relative",
          display: "flex",
          border: "2px black solid",
          background: "white",
        }}
      >
        {users.map((user) => (
          <h2 style={{ margin: "20px" }} key={user._id}>
            {user.username}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default UserList;
