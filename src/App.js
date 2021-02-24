import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>TODO APP using Context API </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          verticalAlign: "center",
          flexWrap: "wrap",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <AddTask />
        <TaskList />
      </div>
    </>
  );
}
