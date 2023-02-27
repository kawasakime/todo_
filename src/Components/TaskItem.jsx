import React from "react";
import {
  CheckIcon,
  DeleteIcon,
  EditIcon,
  RepeatClockIcon,
} from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import EditTaskModal from "./EditTaskModal";
import TaskButton from "./UI/TaskButton";
import { IMPORTANCE_OPTIONS } from "../data/static";

const TaskItem = ({ item, changeCompleteStatus, removeTask, editTask }) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Flex
        p={"15px 20px"}
        borderRadius={"20px"}
        justifyContent={"space-between"}
        bg={"#ffffff20"}
        minH={"100px"}
        alignItems={"center"}
        border={`1px solid ${
          !item.completed &&
          IMPORTANCE_OPTIONS.find((option) => option.value === item.importance)
            .color
        }`}
      >
        <Text
          fontSize={"20px"}
          maxW={"50%"}
          textDecor={item.completed && "line-through #598fc2"}
          color={item.completed && "#ffffff40"}
        >
          {item.text}
        </Text>

        <Flex gap={"10px"}>
          <TaskButton
            onClick={() => changeCompleteStatus(item.id)}
            _hover={{ bg: item.completed ? "#d47a2c" : "#6ad42c" }}
          >
            {item.completed ? <RepeatClockIcon /> : <CheckIcon />}
          </TaskButton>
          <TaskButton
            onClick={() => {
              setModalIsOpen(true);
            }}
            _hover={{ bg: "#2cb2d4" }}
          >
            <EditIcon />
          </TaskButton>
          <TaskButton
            onClick={() => removeTask(item.id)}
            _hover={{ bg: "#d43a2c" }}
          >
            <DeleteIcon />
          </TaskButton>
        </Flex>
      </Flex>
      <EditTaskModal
        values={{
          input: item.text,
          select: item.importance,
        }}
        isOpen={modalIsOpen}
        onSave={(text, importance) => editTask(item.id, text, importance)}
        closeModal={() => setModalIsOpen(false)}
      />
    </React.Fragment>
  );
};

export default TaskItem;
