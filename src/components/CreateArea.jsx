import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
function CreateArea(props) {
  const [isEnlarged, setEnlarged] = useState(false);
  function handleClick() {
    setEnlarged(true);
  }
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function setInputText(event) {
    const { name, value } = event.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        {isEnlarged && (
          <input
            onChange={setInputText}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        )}

        <textarea
          onChange={setInputText}
          onClick={handleClick}
          name="content"
          placeholder={"Write a note..."}
          rows={isEnlarged && "3"}
          value={input.content}
        />
        <button
          onClick={(event) => {
            props.update(input);
            event.preventDefault();
            setInput({ title: "", content: "" });
          }}
        >
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
