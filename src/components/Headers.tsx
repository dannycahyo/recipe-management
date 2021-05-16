import React from "react";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { Logo } from "../components/Footer/Logo";
import { Link } from "react-router-dom";

export default function UserHeader() {
  return (
    <Flex justifyContent="space-between" bgColor="pink.700" alignItems="center">
      <Box p="4">
        <Logo />
      </Box>
      <Heading
        size="md"
        mr="12"
        textColor="white"
        _hover={{
          textDecoration: "underline",
        }}
      >
        <Link to="/myrecipes">My Recipe</Link>
      </Heading>
    </Flex>
  );
}
