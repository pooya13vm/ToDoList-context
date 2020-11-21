import React from "react";
import "../styles/listStyle.css";

const Activity = ({ name, deleter, changed, editItem, valueHolder }) => {
  return (
    <div className="list">
      <div className="item">
        <div className="doing">{`${name}`}</div>
        <input
          className="edit-box"
          type="text"
          onChange={changed}
          value={valueHolder ? null : valueHolder}
        />
        <button className="edit" title="Edit" onClick={editItem}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="tik" title="Has done" onClick={deleter}>
          <i className="fas fa-check"></i>
        </button>
      </div>
    </div>
  );
};

export default Activity;
