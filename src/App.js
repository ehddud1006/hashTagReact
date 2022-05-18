import React, { useState } from "react";
import "./App.css";
import xx from "./xx.png";
function App() {
  const [tags, setTags] = useState([]);
  const [name, setName] = useState("");

  const onChangeTestName = (e) => {
    setName(e.target.value);
  };

  const onKeyKey = (e) => {
    console.log(e.key);
    console.log(e.keyCode);
    if (e.key === "Enter") {
      // setName(e.target.value);
      setName("");
      setTags([...tags, e.target.value]);
    }
  };

  const deleteClick = (index) => {
    console.log(index);
    console.log("click delete");
    setTags([...tags.slice(0, index), ...tags.slice(index + 1)]);
  };
  return (
    <div className="container">
      <div className="tag-container">
        {/* <div className="tag">
          <span>JavaScript</span>
          <img src={xx} className="material-icons" />
        </div>
        <div className="tag">
          <span>JavaScript</span>
          <img src={xx} className="material-icons" />
        </div> */}
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              <span>{tag}</span>
              <img
                onClick={() => deleteClick(index)}
                src={xx}
                className="material-icons"
              />
            </div>
          );
        })}
        <input
          value={name}
          onChange={onChangeTestName}
          onKeyPress={onKeyKey}
        ></input>
      </div>
    </div>
  );
}

export default App;
