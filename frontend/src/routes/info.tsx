import { createFileRoute } from "@tanstack/react-router";
import WorkSpaceWrapper from "../shared/components/workSpaceWrapper";
import { DeveloperInfo } from "../widgets/developerInfo";

export const Route = createFileRoute("/info")({
  component: InfoPage,
});

function InfoPage() {
  return (
    <WorkSpaceWrapper>
      <DeveloperInfo />
    </WorkSpaceWrapper>
  );
}
