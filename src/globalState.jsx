import React, { useState } from "react";
import SimpleContext from "./context/simpleContext";
import { toast } from "react-toastify";

const GlobalState = (props) => {
  const [mustDo, setMustDo] = useState([]);
  const [hasDone, setHasDone] = useState([]);
  const [newJob, setNewJob] = useState("");
  const [valueHolder, setValueHolder] = useState("");
  const [showListHandler, setShowListHandler] = useState(true);

  const BtnToggler = () => {
    setShowListHandler(!showListHandler);
  };
  const mover = (id) => {
    const mustDoCopy = [...mustDo];
    const hasDoneCopy = [...hasDone];
    const deletedItem = mustDoCopy.filter((p) => p.id !== id);
    const move = mustDoCopy.filter((p) => p.id === id);
    hasDoneCopy.push(move[0]);
    setMustDo(deletedItem);
    setHasDone(hasDoneCopy);
    toast.success("YOU DID IT", { position: "top-right" });
  };
  const remover = (id) => {
    const hasDoneCopy = [...hasDone];
    const filteredState = hasDoneCopy.filter((p) => p.id !== id);
    setHasDone(filteredState);
    toast.success("Successfully Deleted", { position: "top-right" });
  };
  const editor = (event) => {
    setValueHolder(event.target.value);
  };
  const addTo = (event) => {
    setNewJob(event.target.value);
  };
  const editItem = (id) => {
    if (valueHolder != "") {
      const indexNum = mustDo.findIndex((p) => p.id === id);
      const per = mustDo[indexNum];
      per.name = valueHolder;
      mustDo[indexNum] = per;
      setMustDo(mustDo);
      setValueHolder("");
      toast.success("Successfully edited", { position: "top-right" });
    } else {
      toast.error("For editing write something in the input box", {
        position: "top-right",
      });
    }
  };
  const addNewItem = () => {
    const mustDoCopy = [...mustDo];
    if (newJob != "") {
      const item = {
        id: Math.floor(Math.random() * 500),
        name: newJob,
      };
      mustDoCopy.push(item);
      setMustDo(mustDoCopy);
      setNewJob("");
    }
  };
  return (
    <SimpleContext.Provider
      value={{
        mustDo: mustDo,
        hasDone: hasDone,
        valueHolder: valueHolder,
        mover: mover,
        editor: editor,
        editItem: editItem,
        remover: remover,
        newJob: newJob,
        addTo: addTo,
        addNewItem: addNewItem,
        BtnToggler: BtnToggler,
        showListHandler: showListHandler,
      }}
    >
      {props.children}
    </SimpleContext.Provider>
  );
};

export default GlobalState;
