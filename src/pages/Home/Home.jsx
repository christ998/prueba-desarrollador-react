import CardTask from "../../components/Card/CardTask";
import { Container, Row } from "reactstrap";
import { useContext, useEffect } from "react";
import { ContextGlobal } from "../../TaskContext";

function Home() {
  const [tasks, setTasks, handleTaskClick] = useContext(ContextGlobal);

  useEffect(() => {
    localStorage.setItem("tasksEnabled", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container>
      <Row>
        {Object.keys(tasks).map((task, index) => (
          <CardTask id={task} key={index} handleTaskClick={handleTaskClick} />
        ))}
      </Row>
    </Container>
  );
}

export default Home;
