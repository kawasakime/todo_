import { Button, Flex } from "@chakra-ui/react";
import { BUTTONS } from "../data/static";

const Filter = ({ changeFilter, currentFilter }) => (
  <Flex mt={"10px"} gap={"10px"}>
    {BUTTONS.map((item, i) => (
      <Button
        key={i}
        onClick={() => changeFilter(item.filter)}
        colorScheme={currentFilter === item.filter ? "yellow" : "gray"}
        flex={1}
      >
        {item.title}
      </Button>
    ))}
  </Flex>
);
export default Filter;
