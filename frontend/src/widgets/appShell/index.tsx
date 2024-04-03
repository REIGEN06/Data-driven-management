import { AppShell, Burger, Code, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrain } from "@tabler/icons-react";
import { Outlet } from "@tanstack/react-router";
import { Navbar } from "../navbar";
import classes from "./index.module.css";

export const RootAppShell = () => {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      header={{ height: 40 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group className={classes.header} justify="flex-start" gap={16}>
          <Group gap={4}>
            <IconBrain size={28} />
            <Title size="md">DDM</Title>
          </Group>
          <Code fw={700}>prototype</Code>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            ml={"auto"}
          />
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Navbar toggle={toggle} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};
