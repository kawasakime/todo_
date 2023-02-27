import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import TasksList from "../Components/TasksList";

const HomePage = () => {
  //
  const [tasks, setTasks] = React.useState([]);
  const [currentFilter, setCurrentFilter] = React.useState("all");

  const createTask = (text, importance) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: new Date(),
        text: text,
        importance: importance,
        completed: false,
      },
    ]);
  };

  const editTask = (id, text, importance) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text, importance } : task
      )
    );
  };

  const changeCompleteStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  const filteredTasks = () =>
    tasks.filter((item) => {
      if (currentFilter === "all") return item;

      return currentFilter === "active" ? !item.completed : item.completed;
    });

  const changeFilter = (filter) => setCurrentFilter(filter);

  return (
    <Box p={'0 20px'} maxW={"1040px"} w={"100%"} m={"0 auto"}>
      <Header createTask={createTask} />
      {tasks.length > 0 && (
        <Filter currentFilter={currentFilter} changeFilter={changeFilter} />
      )}
      <TasksList
        editTask={editTask}
        removeTask={removeTask}
        changeCompleteStatus={changeCompleteStatus}
        currentFilter={currentFilter}
        tasks={filteredTasks()}
      />
    </Box>
  );
};

export default HomePage;
