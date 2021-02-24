import { useTaskContext } from "./taskProvider";
import { TASKACTION } from "./reducer";
// import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const TaskList = () => {
  const [item, dispatch] = useTaskContext();

  const removeHandler = (e, index, d) => {
    e.preventDefault();
    dispatch({
      type: TASKACTION.REMOVE_TASK,
      payload: index
    });
  };

  return (
    <>
      {item.task &&
        item.task.length > 0 &&
        item.task.map((d, index) => (
          <>
            <span style={{ padding: "5px", margin: "5px", background: "aqua" }}>
              <ul key={index + d}>
                <li>
                  {d}
                  <button
                    style={{ marginLeft: "1rem" }}
                    onClick={(e) => removeHandler(e, index, d)}
                  >
                    Remove
                  </button>
                </li>
              </ul>
            </span>
          </>
        ))}
    </>
  );
};

export default TaskList;
