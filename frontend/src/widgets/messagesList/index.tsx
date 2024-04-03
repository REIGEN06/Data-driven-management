import { Badge, Group, Stack, Text, Title } from "@mantine/core";
import classNames from "classnames";
import { useEffect, useRef } from "react";
import { Message } from "../../shared/types/message";
import classes from "./index.module.css";
import { MessageText } from "./ui/messageText";

interface MessagesListProps {
  messages: Message[];
}

const MessagesList = ({ messages }: MessagesListProps) => {
  const scrollableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollableRef.current) return;
    scrollableRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  if (!messages.length)
    return (
      <>
        <Group justify="center">
          <Badge variant="filled" size="lg">
            DDM ChatBot
          </Badge>
        </Group>
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Чем могу помочь?
        </Title>
      </>
    );

  return (
    <Stack className={classes.messages_stack} ref={scrollableRef}>
      {messages.map((message, index) => {
        const sender = message.sender === "user" ? "You" : "ChatBot";
        return (
          <Stack
            key={`${index}_${message.sender}`}
            className={classes.message}
            gap={8}
          >
            <Group gap={16}>
              <Title
                className={classNames({
                  [`${classes.message_sender}`]: true,
                  [`${classes.message_from_chatbot}`]:
                    message.sender !== "user",
                })}
              >
                {sender}
              </Title>
              {message.sender !== "user" ? (
                <Text size="xs">Уровень токсичности: {message.toxicLevel}</Text>
              ) : null}
            </Group>
            <MessageText message={message} classes={classes} />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default MessagesList;
