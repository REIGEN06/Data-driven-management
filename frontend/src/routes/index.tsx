import { createFileRoute } from "@tanstack/react-router";
import Chat from "../widgets/chat";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return <Chat />;
}
