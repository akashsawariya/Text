import React from "react";

const List = ({ item, handleDelete, index }) => {
  return (
    <div className="list">
      <h3>{item.name}</h3>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
};

export default List;
