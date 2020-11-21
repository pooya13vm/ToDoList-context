import React, { Fragment, useContext } from "react";
import SimpleContext from "./../context/simpleContext";

const Header = () => {
  const context = useContext(SimpleContext);
  const {
    newJob,
    addTo,
    addNewItem,
    mustDo,
    hasDone,
    BtnToggler,
    showListHandler,
  } = context;
  return (
    <Fragment>
      <div className="title">
        <h1>To Do List</h1>
      </div>

      <div className="container">
        <form className="inputField">
          <input
            className="new-input"
            type="text"
            value={newJob}
            onChange={addTo}
            required
          />
          <label className="iner-text">Enter a new activity</label>
          <input type="checkbox" id="check" onChange={addNewItem} />
          <label for="check" className="bottom"></label>
        </form>
        <div className="planning-info">
          <p>
            Not Done Yet :{" "}
            <samp className="badge badge-info badge-pill">{`${mustDo.length}`}</samp>
          </p>
          <p>
            Has Been Done :{" "}
            <span className="badge badge-danger badge-pill">{`${hasDone.length}`}</span>
          </p>
          <button className="btn" onClick={BtnToggler}>
            {showListHandler ? "HIDE LIST" : "SHOW LIST"}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
