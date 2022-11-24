import Body from "../components/Hooks";
import { Navbar } from "../components/Navbar";

import { Container } from "./style";

export const Root = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Body />
      </Container>
    </>
  );
};
