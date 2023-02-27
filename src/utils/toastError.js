export const toastErrorFields = (toast, title = "Ошибка добавления задачи") => {
  toast({
    title: title,
    description: "Запишите задачу и выберите важность задачи",
    status: "error",
    duration: 3000,
    isClosable: true,
  });
};
