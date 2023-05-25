import { Button, Card, CardBody, CardHeader } from "reactstrap";
import { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../../TaskContext";
import { findValueByKey, hasSubIndices } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

function CardTask({ id, disabled, handleTaskClick }) {
  const [tasks] = useContext(ContextGlobal);
  const [isCompleted, setIsCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsCompleted(findValueByKey(tasks, id));
  }, [tasks]);

  const handleClick = () => {
    if (isCompleted === true) {
      alert("Tarea hecha");
    }
    const result = handleTaskClick(id);
    if (result) {
      if (hasSubIndices(tasks, id)) {
        navigate(`/${id}`);
      } else if (findValueByKey(tasks, id).isCompleted === false) {
        navigate("/dotask", { state: { taskId: id } });
      } else {
        navigate("/");
      }
    }
  };
  return (
    <Card
      color="light"
      className="text-center"
      style={{
        width: "18rem",
      }}
    >
      <CardHeader>Tarea {id}</CardHeader>
      <CardBody>
        <Button
          size="lg"
          color="primary"
          disabled={disabled}
          onClick={handleClick}
        >
          Hacer tarea #{id}
        </Button>
      </CardBody>
    </Card>
  );
}

export default CardTask;
