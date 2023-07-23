import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function setItemsOnClick(input) {
    setItems((prev) => [...prev, input]);
  }

  function deleteItems(id) {
    setItems((prev) => {
      return prev.filter((Item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea update={setItemsOnClick} />
      {items.map((item, index) => (
        <Note
          Title={item.title}
          Content={item.content}
          key={index}
          id={index}
          onChecked={deleteItems}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
