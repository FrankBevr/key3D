import { useExampleStore } from "./../../store/store";
import { useState } from "react";
import "./ViewStore.css";

const ViewStore = () => {
  const data = useExampleStore((store) => store.data);
  const addData = useExampleStore((store) => store.addData);
  const updateData = useExampleStore((store) => store.updateData);
  const deleteData = useExampleStore((store) => store.deleteData);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [food, setFood] = useState("");
  const [id, setId] = useState("");
  const [deleteId, setDeleteId] = useState("");

  const handleSubmit = () => {
    addData(name, Number(age), food);
    setName("");
    setAge("");
    setFood("");
  };

  const handleUpdate = () => {
    updateData(Number(id), name, Number(age), food);
    setId("");
    setName("");
    setAge("");
    setFood("");
  };

  const handleDelete = () => {
    deleteData(Number(deleteId));
    setDeleteId("");
  };
  return (
    <>
      <div className="wrapper">
        <h1>ViewStore</h1>
        {data.map((item, index) => (
          <div key={index}>
            <p>Thats my id: {item.id}</p>
            <p>Thats my name: {item.name}</p>
            <p>Thats my age: {item.age}</p>
            <p>Thats my favorite food: {item.food}</p>
            <hr></hr>
          </div>
        ))}
      </div>
      <div className="wrapper">
        <h2>Add Data to Store (hardcoded)</h2>
        <p>Add </p>
        <code>&#123; name: Herbert, age: 30, food: "chicken" &#125;</code>
        <p>to store</p>
        <button
          onClick={() => {
            addData("Herbert", 30, "chicken");
          }}
        >
          Submit
        </button>
      </div>
      <div className="wrapper">
        <h2>Add Data to Store (via input)</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Favorite Food"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div className="wrapper">
        <h2>Update Data to Store</h2>
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="ID"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Favorite Food"
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
      <div className="wrapper">
        <h2>Delete Data to Store</h2>
        <input
          type="number"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)}
          placeholder="ID to delete"
        />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default ViewStore;
