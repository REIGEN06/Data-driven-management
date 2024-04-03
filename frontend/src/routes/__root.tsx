import { createRootRoute } from "@tanstack/react-router";
import NotFoundComponent from "../shared/components/notFoundComponent";
import { RootAppShell } from "../widgets/appShell";

export const Route = createRootRoute({
  component: RootAppShell,
  notFoundComponent: NotFoundComponent,
});
