import React, { Component, useState } from "react";
import Body from "../components/Hooks";
import { Navbar } from "../components/Navbar";
import { list } from "../mock/student";
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
