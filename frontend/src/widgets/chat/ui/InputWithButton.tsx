import {
  ActionIcon,
  Textarea,
  TextareaProps,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconArrowUp, IconBrain } from "@tabler/icons-react";
import { useState } from "react";

interface InputWithButtonProps extends TextareaProps {
  onEnter: (message: string) => void;
}
export function InputWithButton({ onEnter, ...props }: InputWithButtonProps) {
  const theme = useMantineTheme();
  const [message, setMessage] = useState("");

  const onSubmit = () => {
    onEnter(message);
    setMessage("");
  };

  return (
    <Textarea
      radius="md"
      size="md"
      placeholder="Введите запрос"
      rightSectionWidth={42}
      leftSection={<IconBrain style={{ width: rem(24), height: rem(24) }} />}
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
          onClick={onSubmit}
          disabled={!message.trim()}
        >
          <IconArrowUp
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
      }
      leftSectionProps={{
        style: {
          bottom: "5px",
          top: "unset",
          height: "32px",
        },
      }}
      rightSectionProps={{
        style: {
          bottom: "5px",
          top: "unset",
          height: "32px",
        },
      }}
      autosize
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      onKeyUp={(e) => {
        if (message.trim() && e.key == "Enter" && !e.shiftKey) onSubmit();
      }}
      {...props}
    />
  );
}
