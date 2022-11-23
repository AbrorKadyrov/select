import React, { Component } from "react";
import Hooks from "../components/Hooks";
import { Container } from "./style";

export default class Root extends Component {
  render() {
    return (
      <>
        <h1>Comparison</h1>
        <Container>
          {/* <Classes /> */}
          <Hooks />
          {/* {data.map((val) => val && <Card />)} */}
        </Container>
      </>
    );
  }
}
