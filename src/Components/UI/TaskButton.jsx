import { Button } from "@chakra-ui/react";

const TaskButton = (props) => {
  return (
    <Button borderRadius={"50%"} w={"50px"} h={"50px"} {...props}>
      {props.children}
    </Button>
  );
};

export default TaskButton;
