import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { taskToggled, taskDeleted, setFilter } from "./taskSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.Completed;
    if (filter === "active") return task.Completed;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter("all"))}>All</button>
        <button onClick={() => dispatch(setFilter("active"))}>Active</button>
        <button onClick={() => dispatch(setFilter("completed"))}>
          Completed
        </button>
      </div>

      {filteredTasks.map((task) => (
        <div key={task.id} style={{ marginTop: "10px" }}>
          <label>
            <input
              type="checkbox"
              checked={task.Completed}
              onChange={() => dispatch(taskToggled(task.id))}
            />
            <span
              style={{
                marginLeft: "10px",
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.text} ({task.category})
            </span>
          </label>
          <button
            onClick={() => dispatch(taskDeleted(task.id))}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
