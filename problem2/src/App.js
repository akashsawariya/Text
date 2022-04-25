import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [dataList, setDataLst] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`https://swapi.dev/api/people`, {
      Headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((Data) => setDataLst(Data.results))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const handleAdd = async () => {
    fetch("https://swapi.dev/api/people", {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(text),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleDelete = async (id) => {
    fetch(`https://swapi.dev/api/people${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="App">
      <div className="input">
        <input
          type="text"
          placeholder="Add Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add Record</button>
      </div>
      {dataList.map((item, i) => (
        <List
          key={item.name}
          item={item}
          index={i + 1}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
