import { useState } from "react";
import { TASKACTION } from "./reducer";
import { useTaskContext } from "./taskProvider";

const AddTask = () => {
  const [item, setItem] = useState("");
  const [task, dispatch] = useTaskContext();

  const addHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: TASKACTION.ADD_TASK,
      payload: item
    });
    setItem("");
  };

  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addHandler}> Add Task</button>
    </>
  );
};

export default AddTask;
