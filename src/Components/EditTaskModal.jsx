import React from "react";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useToast,
} from "@chakra-ui/react";
import { IMPORTANCE_OPTIONS } from "../data/static";
import { toastErrorFields } from "../utils/toastError";

const EditTaskModal = ({ isOpen, closeModal, values, onSave }) => {
  const [inputValue, setInputValue] = React.useState(values.input);
  const [selectValue, setSelectValue] = React.useState(values.select);

  const toast = useToast();

  const save = () => {
    if (inputValue === "" || selectValue === "") {
      toastErrorFields(toast, "Ошибка редактирования задачи");
    } else {
      onSave(inputValue, selectValue);
      closeModal();
    }
  };

  return (
    <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Редактирование задачи</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex flexDirection={"column"} gap={"10px"}>
            <Input
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <Select
              bg={"#ffffff20"}
              variant="filled"
              placeholder="Важность"
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              {IMPORTANCE_OPTIONS.map((option) => (
                <option value={option.value}>{option.title}</option>
              ))}
            </Select>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button onClick={save} colorScheme="whatsapp" mr={3}>
            Сохранить
          </Button>
          <Button onClick={closeModal}>Отмена</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditTaskModal;
