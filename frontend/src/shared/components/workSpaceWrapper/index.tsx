import { Box, Stack } from "@mantine/core";
import { PropsWithChildren } from "react";
import classes from "./index.module.css";

const WorkSpaceWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Box className={classes.main}>
      <Stack className={classes.workspace} justify="space-between">
        {children}
      </Stack>
    </Box>
  );
};

export default WorkSpaceWrapper;
