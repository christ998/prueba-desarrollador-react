import { Button } from "reactstrap";
import { useContext } from "react";
import { ContextGlobal } from "../../TaskContext";
import { useLocation, useNavigate } from "react-router-dom";
import { findValueByKey } from "../../utils/utils";

function DoTask() {
  const [tasks, setTasks, handleTaskClick] = useContext(ContextGlobal);
  const location = useLocation();
  const taskId = location.state && location.state.taskId;
  const navigate = useNavigate();

  const handleDoTask = () => {
    if (handleTaskClick(taskId)) {
      if (taskId.includes(".")) {
        const [taskId, subTask] = taskId.split(".");
        setTasks((prevState) => ({
          ...prevState,
          [taskId]: {
            ...prevState[taskId],
            [subTask]: {
              ...prevState[taskId][subTask],
              isCompleted: !findValueByKey(tasks, taskId).isCompleted,
            },
          },
        }));
      } else {
        setTasks((prevState) => ({
          ...prevState,
          [taskId]: {
            ...prevState[taskId],
            isCompleted: !findValueByKey(tasks, taskId).isCompleted,
          },
        }));
      }
      navigate("/");
    }
  };

  return <Button onClick={handleDoTask}>Finalizar tarea {taskId}</Button>;
}

export default DoTask;
