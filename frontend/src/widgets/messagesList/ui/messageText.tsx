import { Loader, Text } from "@mantine/core";
import { Message } from "../../../shared/types/message";

export const MessageText = ({
  message,
  classes,
}: {
  message: Message;
  classes: CSSModuleClasses;
}) => {
  switch (message.status) {
    case "awaited":
      return <Loader color="blue" type="dots" ml={40} />;
    case "success":
      return <Text className={classes.message_text}>{message.text}</Text>;
    default:
      return (
        <Text ml={40} className={classes.message_error}>
          Ошибка сервера
        </Text>
      );
  }
};
