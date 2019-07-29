import React from "react";
import { shallow } from "enzyme";
import Container from "./Container";

it("renders Container correctly", () => {
  const wrapper = shallow(<Container>Test</Container>);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.contains("Test")).toBe(true);
});
