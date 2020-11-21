import React from "react";
import "../styles/listStyle.css";

const Job = ({ name, delet }) => {
  return (
    <div className="done">
      <div className="item">
        <div className="doing">{`${name}`}</div>
        <button className="delete" title="delete" onClick={delet}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Job;
