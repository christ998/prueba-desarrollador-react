import { useContext } from "react";
import CardTask from "../../components/Card/CardTask";
import { ContextGlobal } from "../../TaskContext";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";

function SubTask() {
  const { id } = useParams(); // De que tarea viene
  const [tasks, , handleTaskClick] = useContext(ContextGlobal);
  const keys = Object.keys(tasks[id]);

  return (
    <Container>
      {keys.map((subTask, index) => (
        <CardTask key={index} id={subTask} handleTaskClick={handleTaskClick} />
      ))}
    </Container>
  );
}

export default SubTask;
