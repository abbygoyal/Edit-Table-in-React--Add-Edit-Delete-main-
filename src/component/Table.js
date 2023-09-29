import React, { useState } from "react";
import "./table.scss";
export default function Table() {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", number: "12345", email: "john@example.com" },
    { id: 2, name: "Jane Smith", number: "67890", email: "jane@example.com" },
    { id: 3, name: "Bob Johnson", number: "54321", email: "bob@example.com" },
    { id: 4, name: "Alice Brown", number: "98765", email: "alice@example.com" },
    { id: 5, name: "Eve Davis", number: "13579", email: "eve@example.com" },
  ]);

  const [inputData, setInputData] = useState({
    id: "",
    name: "",
    number: "",
    email: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const addData = () => {
    const { name, number, email } = inputData;
    if (name === "" || number === "" || email === "") {
      alert("Enter Name, Number, and Email");
    } else {
      const newItem = { ...inputData, id: data.length + 1 };
      setData([...data, newItem]);
      setInputData({ id: "", name: "", number: "", email: "" });
    }
  };

  const deleteData = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  const editData = (index) => {
    const itemToEdit = data[index];
    setInputData(itemToEdit);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const updateData = () => {
    const newData = [...data];
    newData[currentIndex] = inputData;
    setData(newData);
    setInputData({ id: "", name: "", number: "", email: "" });
    setIsEditing(false);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React</h1>
      <br />
      <p>
        <strong>
          Take value from the user and make a table, Edit and Delete data from
          the table, Object store in Array
        </strong>
      </p>
      <div className="inputt">
        <input
          type="text"
          name="name"
          value={inputData.name}
          autoComplete="off"
          placeholder="Enter Name"
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="number"
          value={inputData.number}
          placeholder="Enter Number"
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={inputData.email}
          placeholder="Enter Email"
          onChange={handleInputChange}
        />
        <button onClick={isEditing ? updateData : addData}>
          {isEditing ? "Update data" : "Add data"}
        </button>
      </div>
      <br />
      <table border="1">
        <tbody>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {data.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => editData(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => deleteData(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
