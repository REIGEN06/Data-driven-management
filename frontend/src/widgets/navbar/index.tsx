import { IconMessages } from "@tabler/icons-react";
import { Link, useRouterState } from "@tanstack/react-router";
import classes from "./index.module.css";

const data = [
  { link: "/", label: "Чат", icon: IconMessages },
  // {
  //   link: "/info",
  //   label: "Информация о команде",
  //   icon: IconInfoSquareRounded,
  // },
];

export function Navbar({ toggle }: { toggle: () => void }) {
  const router = useRouterState();

  return (
    <div className={classes.navbarMain}>
      {data.map((item) => {
        return (
          <Link
            key={item.label}
            className={classes.link}
            data-active={item.link === router.location.pathname || undefined}
            to={item.link}
            onClick={toggle}
          >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
