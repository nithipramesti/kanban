import axios from "axios";
import { useEffect, useState } from "react";
import {
  GlobalStyle,
  StyledNavTop,
  StyledTaskCard,
  StyledTaskFull,
  StyledTaskDetail,
} from "./styles";

function App() {
  const getData = () => {
    axios
      .get("/get-filter")
      .then((res) => console.log(res.data))
      .catch((er) => console.error(er));
  };

  const [activeBoard, setActiveBoard] = useState("Platform Launch");
  const [boards, setBoards] = useState([
    "Platform Launch",
    "Marketing Plan",
    "Roadmap",
  ]);
  const [statusCol, setStatusCol] = useState(["Todo", "Doing", "Done"]);
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState(null);

  const BoardLink = () => {
    return boards.map((boardName, i) => (
      <div className="nav-side__board-link" key={i}>
        <p>
          <span>O</span> {boardName}
        </p>
      </div>
    ));
  };

  const StatusColumn = () => {
    return statusCol.map((status, i) => {
      // console.log(tasks[0].board);
      let taskPerStatus = tasks.filter((task) => task.status === status);

      return (
        <div className="status-column" key={i}>
          <h3 className="status-title">{`${status} (${taskPerStatus.length})`}</h3>
          <TaskCards statusTasks={taskPerStatus} />
        </div>
      );
    });
  };

  const taskDetailClick = (e) => {
    setActiveTask(e);
  };

  const TaskCards = ({ statusTasks }) => {
    return statusTasks.map((task, i) => {
      console.log(task.title);

      const completedSubtasks = task.subtasks.filter(
        (el) => el.isCompleted === true
      );

      return (
        <StyledTaskCard key={i} onClick={() => setActiveTask(task)}>
          <h3 className="task-card__title">{task.title}</h3>
          <p className="task-card__subtask-counter body-m">{`${completedSubtasks.length} of ${task.subtasks.length} subtasks`}</p>
        </StyledTaskCard>
      );
    });
  };

  const TaskFull = ({ taskData }) => {
    return (
      <StyledTaskFull>
        <h1>{taskData.title}</h1>
        <p>{taskData.description}</p>
        {[
          <p>{taskData.subtasks[0].title}</p>,
          <p>{taskData.subtasks[1].title}</p>,
          <p>{taskData.subtasks.length}</p>,
        ]}
        {/* {taskData.subtasks.length
          ? taskData.subtasks.map((subtask) => <p>{subtask.title}</p>)
          : "no subtask"} */}
      </StyledTaskFull>
    );
  };

  useEffect(() => {
    console.log("use effect!");
    axios
      .get("get-filter")
      .then((res) => {
        console.log(res);
        setTasks(res.data);
        // setActiveTask(res.data[0]);
      })
      .catch((er) => console.error(er));

    // const fetchData = async () => {
    //   try {
    //     const { data } = await axios.get("/get-tasks", {
    //       board: activeBoard,
    //     });
    //     console.log(data);
    //     setTasks(data);
    //   } catch (e) {
    //     console.error(e);
    //   }
    // };

    // fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="app">
        <div className="nav-side">
          <div className="logo">kanban</div>
          <p className="text__muted">{`ALL BOARDS (${boards.length})`}</p>
          <div className="nav-side__board-links">
            <BoardLink />
          </div>
        </div>
        <main>
          <StyledNavTop className="nav-top">
            <h1 className="nav-top__board-title">{activeBoard}</h1>
            <div className="nav-top__right-side">
              <button className="btn__primary">Add New Task</button>
              <button className="btn__dots">:</button>
            </div>
          </StyledNavTop>
          <div className="task-container">
            {tasks.length ? <StatusColumn /> : "Loading..."}
          </div>
        </main>
        {/* {activeTask && <TaskFull taskData={activeTask} />} */}
        {activeTask !== null && (
          <StyledTaskDetail>
            <h2>{activeTask.title}</h2>
            <p>{activeTask.description}</p>
            <p className="task-detail__subtask-counter">{`Subtask (${activeTask.subtasks.length})`}</p>
            {activeTask.subtasks.map((subtask, i) => {
              return (
                <p className="task-detail__subtask">
                  {subtask.title} <span>{subtask.isCompleted && "Y"}</span>
                </p>
              );
            })}
            <button onClick={() => setActiveTask(null)}>X</button>
          </StyledTaskDetail>
        )}
      </div>
    </>
  );
}

export default App;
