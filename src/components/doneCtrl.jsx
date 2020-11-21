import React, { useContext, Fragment } from "react";
import Job from "./doneList";
import SimpleContext from "./../context/simpleContext";

const DoneJobs = () => {
  const context = useContext(SimpleContext);
  const { hasDone, remover, showListHandler } = context;
  return (
    <Fragment>
      {showListHandler ? (
        <div>
          {hasDone.length != 0 ? (
            <h3 id="list-title" style={{ color: "#aacfcf" }}>
              Completed :
            </h3>
          ) : null}
          {hasDone.map((jobs) => (
            <Job
              key={jobs.id}
              name={jobs.name}
              delet={() => remover(jobs.id)}
            ></Job>
          ))}
        </div>
      ) : null}
    </Fragment>
  );
};
export default DoneJobs;
