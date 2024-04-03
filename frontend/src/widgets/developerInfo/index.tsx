import { Avatar, Group, Text } from "@mantine/core";
import { IconBrandTelegram } from "@tabler/icons-react";
import classes from "./index.module.css";

export function DeveloperInfo() {
  return (
    <Group wrap="nowrap" ml="auto" mr="auto">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
        size={94}
        radius="md"
      />
      <div>
        <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
          Full Stack Developer
        </Text>

        <Text fz="lg" fw={500} className={classes.name}>
          Дмитрий Шустов
        </Text>

        <Group wrap="nowrap" gap={10} mt={3}>
          <IconBrandTelegram
            stroke={1.5}
            size="1rem"
            className={classes.icon}
          />
          <a
            href="https://t.me/dimisho"
            className={classes.contact_link}
            target="_blank"
          >
            <Text fz="xs" c="dimmed">
              https://t.me/dimisho
            </Text>
          </a>
        </Group>

        {/* <Group wrap="nowrap" gap={10} mt={5}>
          <IconPhoneCall stroke={1.5} size="1rem" className={classes.icon} />
          <a
            href="tel:+7 (777) 777 77 77"
            className={classes.contact_link}
            target="_blank"
          >
            <Text fz="xs" c="dimmed">
              +7 (777) 777 77 77
            </Text>
          </a>
        </Group> */}
      </div>
    </Group>
  );
}
