import React, { useContext } from "react";
import { StudentContext } from "../../context";
import { Container, Item } from "./style";

export const Navbar = () => {
  const [data] = useContext(StudentContext);

  return (
    <Container>
      <Item>home</Item>
      <Item>About</Item>
      <Item>Contact</Item>
      <Item>Student {data.student.length} </Item>
    </Container>
  );
};
