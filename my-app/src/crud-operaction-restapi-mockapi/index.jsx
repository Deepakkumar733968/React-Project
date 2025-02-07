import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const CrudOperation = () => {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);
  const [closeButtonData, setCloseButtonData] = useState(false);
  const [userData, setUserData] = useState({ name: "", age: "", city: "" });

  //get
  const handleGetAllUsers = async () => {
    await axios
      .get("https://661530c32fc47b4cf27e3ded.mockapi.io/data/user")
      .then((res) => {
        setUsers(res.data);
        setFilterUsers(res.data);
      });
  };

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  //search input box
  const searchTextAll = (e) => {
    const searchText = e.target.value.toLowerCase();
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchText) ||
        user.city.toLowerCase().includes(searchText)
    );
    setFilterUsers(filteredUsers);
  };

  //delete
  const handleDelete = async (id) => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (isConfirm) {
      await axios
        .delete(`https://661530c32fc47b4cf27e3ded.mockapi.io/data/user/${id}`)
        .then(() => {
          const updatedUsers = users.filter((user) => user.id !== id);
          setUsers(updatedUsers);
          setFilterUsers(updatedUsers);
        });
    }
  };

  const closeModelButton = () => {
    setCloseButtonData(false);
    handleGetAllUsers();
  };

  const closeButton = () => {
    setUserData({ name: "", age: "", city: "" });
    setCloseButtonData(true);
  };

  const handleInputData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (user) => {
    setUserData({ ...user });
    setCloseButtonData(true);
  };

  // post and push
  const addUserButton = async (e) => {
    e.preventDefault();
    if (userData.id) {
      await axios
        .put(
          `https://661530c32fc47b4cf27e3ded.mockapi.io/data/user/${userData.id}`,
          userData
        )
        .then(() => {
          setUserData({ name: "", age: "", city: "" });
          setCloseButtonData(false);
          handleGetAllUsers();
        });
    } else {
      await axios
        .post("https://661530c32fc47b4cf27e3ded.mockapi.io/data/user", userData)
        .then(() => {
          setUserData({ name: "", age: "", city: "" });
          setCloseButtonData(false);
          handleGetAllUsers();
        });
    }
  };

  return (
    <>
      <section className="container-main">
        <h3>CRUD-OPERATION</h3>
        <section className="input-search">
          <input
            type="search"
            placeholder="Search Text Here"
            onChange={searchTextAll}
          />
          <button className="btn green" onClick={closeButton}>
            Add Record
          </button>
        </section>
        <table className="table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {filterUsers &&
              filterUsers.map((user, index) => {
                return (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.city}</td>
                    <td>
                      <button
                        className="btn green"
                        onClick={() => handleUpdate(user)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn red"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {closeButtonData && (
          <section className="model">
            <section className="model-content">
              <span className="close-button" onClick={closeModelButton}>
                &times;
              </span>
              <h1>{userData.id ? "Update Record" : "Add Record"}</h1>
              <section className="input-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={userData.name}
                  name="name"
                  onChange={handleInputData}
                />
              </section>
              <section className="input-group">
                <label>Age</label>
                <input
                  type="number"
                  value={userData.age}
                  name="age"
                  onChange={handleInputData}
                />
              </section>
              <section className="input-group">
                <label>City</label>
                <input
                  type="text"
                  value={userData.city}
                  name="city"
                  onChange={handleInputData}
                />
              </section>
              <button className="btn green" onClick={addUserButton}>
                {userData.id ? "Update User" : "Add User"}
              </button>
            </section>
          </section>
        )}
      </section>
    </>
  );
};

export default CrudOperation;
