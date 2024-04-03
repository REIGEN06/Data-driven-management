import { useCallback, useState } from "react";
import { postMessage } from "../../shared/api/message";
import WorkSpaceWrapper from "../../shared/components/workSpaceWrapper";
import { Message } from "../../shared/types/message";
import MessagesList from "../messagesList";
import classes from "./index.module.css";
import { InputWithButton } from "./ui/InputWithButton";

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = useCallback(async (message: string) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: message, status: "success" },
    ]);

    setMessages((prev) => [...prev, { sender: "bot", status: "awaited" }]);

    try {
      const response = await postMessage(message);
      setMessages((prev) => {
        const clonedArray = [...prev];
        clonedArray.splice(-1, 1, {
          sender: "bot",
          status: "success",
          text: response.data.text,
          toxicLevel: response.data.toxicLevel,
        });
        return clonedArray;
      });
    } catch (e) {
      setMessages((prev) => {
        const clonedArray = [...prev];
        clonedArray.splice(-1, 1, { sender: "bot", status: "error" });
        return clonedArray;
      });
    }
  }, []);

  return (
    <WorkSpaceWrapper>
      <MessagesList messages={messages} />
      <InputWithButton className={classes.chat_input} onEnter={sendMessage} />
    </WorkSpaceWrapper>
  );
};
export default Chat;
