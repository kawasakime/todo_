import { Button, Flex, Input, Select, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { toastErrorFields } from "../utils/toastError";

const Header = ({ createTask }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [selectValue, setSelectValue] = React.useState("");

  const toast = useToast();

  const checkFields = () => {
    if (inputValue === "" || selectValue === "") {
      toastErrorFields(toast);
    } else {
      createTask(inputValue, selectValue);
      setInputValue("");
      setSelectValue("");
    }
  };

  return (
    <React.Fragment>
      <Flex fontSize={"80px"} justifyContent={"center"}>
        <Text color={"#fff"}>To</Text>
        <Text color={"whatsapp.100"}>Do</Text>
      </Flex>

      <Flex mt={"30px"} flexDirection={"row"} gap={"10px"}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите задачу..."
          bg={"#ffffff20"}
          color={"#fff"}
          _placeholder={{ color: "#7ee698" }}
        />
        <Select
          bg={"#ffffff20"}
          variant="filled"
          placeholder="Важность"
          w={"200px"}
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="low">Низкая</option>
          <option value="medium">Средняя</option>
          <option value="hight">Высокая</option>
        </Select>
        <Button onClick={checkFields} w={"150px"} colorScheme={"whatsapp"}>
          Добавить
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default Header;
