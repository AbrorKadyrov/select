import React, { useContext } from "react";
import { StudentContext } from "../../context";
import { Container, Item } from "./style";

export const Navbar = () => {
  const [data] = useContext(StudentContext);
  console.log(data);
  return (
    <Container>
      <Item>home</Item>
      <Item>About</Item>
      <Item>Contact</Item>
      <Item>Student {data.length} </Item>
    </Container>
  );
};
