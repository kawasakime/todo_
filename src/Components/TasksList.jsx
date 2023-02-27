import { Box, Flex, Text } from "@chakra-ui/react";
import TaskItem from "./TaskItem";

const TasksList = ({ tasks, changeCompleteStatus, removeTask, editTask }) => (
  <Box>
    <Flex m={"20px 0"} fontSize={"20px"}>
      Количество задач:{" "}
      <Text color={"yellow"} ml={"10px"}>
        {tasks.length}
      </Text>
    </Flex>
    {tasks.length === 0 ? (
      <Flex height={"200px"} alignItems={"center"} justifyContent={"center"}>
        Пусто...
      </Flex>
    ) : (
      <Flex flexDirection={"column"} gap={"10px"}>
        {tasks.map((item, i) => (
          <TaskItem
            editTask={editTask}
            removeTask={removeTask}
            changeCompleteStatus={changeCompleteStatus}
            key={i}
            item={item}
          />
        ))}
      </Flex>
    )}
  </Box>
);

export default TasksList;
