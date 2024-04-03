import { Button, Container, Group, Text, Title } from "@mantine/core";
import { Link } from "@tanstack/react-router";
import { Illustration } from "../../../assets/Illustration";
import classes from "./index.module.css";

const NotFoundComponent = () => {
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>Здесь не на что смотреть</Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            Страница, которую вы пытаетесь открыть, не существует. Возможно, вы
            неправильно ввели адрес или страница была перемещена на другой URL.
          </Text>
          <Group justify="center">
            <Link to="/">
              <Button size="md">Вернуться на главную страницу</Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
};

export default NotFoundComponent;
