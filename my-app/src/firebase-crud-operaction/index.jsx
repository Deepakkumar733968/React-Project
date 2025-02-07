import { useEffect, useState } from "react";
import { database } from "../firebase/index";
import "./style.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
const FireBaseCrud = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const value = collection(database, "demo");
  const [val, setVal] = useState([]);
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const dbVal = await getDocs(value);
      setVal(dbVal.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  });
  const handleCreate = async () => {
    await addDoc(value, { name1: firstName, name2: lastName });
    setFirstName("");
    setLastName("");
  };

  const handleDelete = async (id) => {
    const deleteVal = doc(database, "demo", id);
    await deleteDoc(deleteVal);
  };

  const handleEdit = async (id, name1, name2) => {
    setFirstName(name1);
    setLastName(name2);
    setId(id);
    setShow(true);
  };

  const handleUpdate = async () => {
    const updateData = doc(database, "demo", id);
    await updateDoc(updateData, { name1: firstName, name2: lastName });
    setShow(false);
    setFirstName("");
    setLastName("");
  };

  return (
    <section className="container">
      <h1>React-Firebase-CRUD</h1>
      <input
        value={firstName}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      {!show ? (
        <button className="green" onClick={handleCreate}>
          Create
        </button>
      ) : (
        <button className="green" onClick={handleUpdate}>
          Update
        </button>
      )}
      {val.map((values) => (
        <div className="align-content">
          <h1>{values.name1}</h1>
          <h1>{values.name2}</h1>
          <button className="red" onClick={() => handleDelete(values.id)}>
            Delete
          </button>
          <button
            className="green"
            onClick={() => handleEdit(values.id, values.name1, values.name2)}
          >
            Edit
          </button>
        </div>
      ))}
    </section>
  );
};

export default FireBaseCrud;
