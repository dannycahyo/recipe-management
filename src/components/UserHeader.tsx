import React from "react";
import { AddRecipe } from "../containers/AddRecipe";
import { Flex, Heading, Grid, GridItem } from "@chakra-ui/react";
import { Logo } from "../components/Footer/Logo";

export default function UserHeader() {
  return (
    <Grid gap={4} bgColor="pink.700" justifyContent="space-between" p="4">
      <GridItem colStart={[2, 1, 1]} colEnd={[4, 3, 3]}>
        <Logo />
      </GridItem>
      <GridItem colStart={[2, 4, 4]} colEnd={[4, 5, 5]}>
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
      </GridItem>
    </Grid>
  );
}
