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

      const taskTitleArray = taskId.split(".");
      const mainTask = taskTitleArray[0];

      if (taskTitleArray.length === 1) {
        setTasks((prevState) => ({
          ...prevState,
          [mainTask]: {
            ...prevState[mainTask],
            isCompleted: !findValueByKey(tasks, taskId).isCompleted,
          },
        }));
      } else {
        // const subTask = taskTitleArray.slice(1).join(".");
        setTasks((prevState) => ({
          ...prevState,
          [mainTask]: {
            ...prevState[mainTask],
            [taskId]: {
              ...prevState[mainTask][taskId],
              isCompleted: !findValueByKey(tasks, taskId).isCompleted,
            },
          },
        }));
      }
      navigate("/");
    }
  };

  return <Button onClick={handleDoTask}>Finalizar tarea {taskId}</Button>;
}

export default DoTask;
