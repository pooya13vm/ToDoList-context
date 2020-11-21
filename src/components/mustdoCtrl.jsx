import React, { useContext, Fragment } from "react";
import Activity from "./mustdoList";
import SimpleContext from "./../context/simpleContext";

const MustDo = () => {
  const context = useContext(SimpleContext);
  const {
    mustDo,
    valueHolder,
    mover,
    editor,
    editItem,
    showListHandler,
  } = context;
  return (
    <Fragment>
      {showListHandler ? (
        <div>
          {mustDo.length != 0 ? (
            <h3 id="list-title" style={{ color: "#d291bc" }}>
              Not Completed :
            </h3>
          ) : null}
          {mustDo.map((act) => (
            <Activity
              key={act.id}
              name={act.name}
              valueHolder={valueHolder}
              deleter={() => mover(act.id)}
              changed={(event) => editor(event)}
              editItem={() => editItem(act.id)}
            ></Activity>
          ))}
        </div>
      ) : null}
    </Fragment>
  );
};

export default MustDo;
