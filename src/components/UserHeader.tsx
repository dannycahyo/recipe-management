import React from "react";
import { AddRecipe } from "../containers/AddRecipe";
import { Flex, Box, Heading } from "@chakra-ui/react";
import { Logo } from "../components/Footer/Logo";

export default function UserHeader() {
  return (
    <Flex justifyContent="space-between" bgColor="pink.700">
      <Box p="4">
        <Logo />
      </Box>
      <Flex alignItems="center">
        <Heading
          size="md"
          mr="4"
          textColor="white"
          _hover={{
            textDecoration: "underline",
          }}
        >
          My Recipe
        </Heading>
        <AddRecipe />
      </Flex>
    </Flex>
  );
}
