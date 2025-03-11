import { useState } from "react";
import "./style.css";
import { useEffect } from "react";
import { EditText } from "react-edit-text";
export const CrudJsonPlaceHolder = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <section>
      <table>
        <thead className="main-table-header table-modifier">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <EditText value={user.email} />
              </td>
              <td>
                <EditText value={user.website} />
              </td>
              <td>
                <button className="edit-button">Update</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <tfoot>
        <tr>
          <td>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </td>
        </tr>
      </tfoot>
    </section>
  );
};
