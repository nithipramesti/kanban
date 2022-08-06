import axios from "axios";
import { useState } from "react";

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
  const [tasks, setTasks] = useState([]);

  const BoardLink = () => {
    return boards.map((boardName, i) => (
      <div className="nav-side__board-link" key={i}>
        <p>
          <span>O</span> {boardName}
        </p>
      </div>
    ));
  };

  return (
    <div className="app">
      <div className="nav-side">
        <div className="logo">kanbas</div>
        <p className="text__muted">{`ALL BOARDS (${boards.length})`}</p>
        <div className="nav-side__board-links">
          <BoardLink />
        </div>
      </div>
      <main>
        <header className="nav-top">
          <h1 className="nav-top__board-title">{activeBoard}</h1>
          <div className="nav-top__right-side">
            <button className="btn__primary">Add New Task</button>
            <button className="btn__dots">:</button>
          </div>
        </header>
      </main>
    </div>
  );
}

export default App;
