import React from "react";
import { Link } from "react-router-dom";
import { Heading, useColorModeValue } from "@chakra-ui/react";
import { BiFoodMenu } from "react-icons/bi";

export const Logo = () => {
  return (
    <Link to="/">
      <Heading
        ml="2"
        fontSize="25px"
        display="flex"
        alignItems="center"
        color={useColorModeValue("white", "pink.300")}
      >
        <BiFoodMenu style={{ marginRight: "2" }} />
        <span>Recipe App</span>
      </Heading>
    </Link>
  );
};
