import { createContext, useState } from "react";

export const ContextGlobal = createContext(null);

export default function TaskContext({ children }) {
  const [tasks, setTasks] = useState(() => {
    const storedState = localStorage.getItem("tasksEnabled");
    return storedState
      ? JSON.parse(storedState)
      : {
          1: { isCompleted: false },
          2: { isCompleted: false },
          3: {
            3.1: { isCompleted: false },
            3.2: { isCompleted: false },
          },
          4: {
            4.1: { isCompleted: false },
            4.2: { isCompleted: false },
            4.3: { isCompleted: false },
          },
          5: {
            5.1: { isCompleted: false },
            5.2: { isCompleted: false },
          },
          6: {
            isCompleted: false,
          },
        };
  });

  const handleTaskClick = (taskId) => {
    if (taskId != 1 && !tasks["1"].isCompleted) {
      alert("Debes finalizar la tarea 1 primero.");
      return;
    }
    if (taskId === "3.2" && !tasks[3]["3.1"].isCompleted) {
      alert("Debes finalizar la tarea 3.1 primero.");
      return;
    }

    if (taskId === "4.1" && !tasks["3.2"].isCompleted) {
      alert("Debes finalizar la tarea 3.2 primero.");
      return;
    }
    if (taskId === "4.2" && !tasks[4]["4.1"].isCompleted) {
      alert("Debes finalizar la tarea 3.2 primero.");
      return;
    }
    if (taskId === "4.3" && !tasks[4]["4.2"].isCompleted) {
      alert("Debes finalizar la tarea 3.2 primero.");
      return;
    }
    return true;
  };

  return (
    <ContextGlobal.Provider value={[tasks, setTasks, handleTaskClick]}>
      {children}
    </ContextGlobal.Provider>
  );
}
