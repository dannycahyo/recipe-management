import React from "react";
import Headers from "../components/Headers";
import { Footer } from "../components/Footer/Footer";
import {
  Box,
  Button,
  Heading,
  Text,
  Grid,
  GridItem,
  ButtonGroup,
  Image,
  Link,
  Flex,
} from "@chakra-ui/react";
import SVGImage from "../assets/undraw_cooking_lyxy.svg";

export default function LandingPage() {
  return (
    <div>
      <Headers />
      <Grid gap={24} p="12" justifyContent="center" alignItems="center" m="12">
        <GridItem colStart={[1, 1, 1, 1, 1]} colEnd={[5, 5, 5, 2, 3]}>
          <Box>
            <Heading size="md" color="pink.300">
              Hire Talents
            </Heading>
            <Heading size="3xl" mt="8" color="pink.500">
              Get World Class Talents For Your Project
            </Heading>
            <Text mb="5" fontSize="lg" mt="4" w="75%">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <ButtonGroup spacing="4">
              <Button colorScheme="pink" size="lg">
                Get Started
              </Button>
              <Button colorScheme="pink" size="lg">
                Watch Demo
              </Button>
            </ButtonGroup>
            <Flex>
              <Text mt="8" size="md" mr="2">
                Already have an account store?
              </Text>
              <Text size="md" textDecoration="underline" mt="8">
                <Link href="/login">Log in</Link>
              </Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem colStart={[1, 1, 1, 2, 3]} colEnd={[5, 5, 5, 5, 5]}>
          <Image src={SVGImage} alt="Banner" />
        </GridItem>
      </Grid>
      <Footer />
    </div>
  );
}
