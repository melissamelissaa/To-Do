import "./App.css";
import { useState } from "react";

const ListOfTodos = (props) => {
  // console.log(props);
  return (
    <ul>
      {props.arrayOfToDos.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
function App() {
  const [lists, setLists] = useState(["nini", "isa", "esa"]);
  const [input, setInput] = useState("");
  const clickHandler = () => {
    setLists([...lists, [input]]);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter To Do..."
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={clickHandler}>Add To Do</button>

      <ListOfTodos arrayOfToDos={lists} />
    </div>
  );
}

export default App;
