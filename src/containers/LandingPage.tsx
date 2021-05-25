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
  AspectRatio,
  Image,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import SVGImage from "../assets/undraw_cooking_lyxy.svg";

export default function LandingPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Headers />
      <Grid gap={24} p="12" justifyContent="center" alignItems="center" m="12">
        <GridItem colStart={[1, 1, 1, 1, 1]} colEnd={[5, 5, 5, 2, 3]}>
          <Box>
            <Heading size="md" color="pink.300">
              Manage Recipes
            </Heading>
            <Heading size="3xl" mt="8" color="pink.500">
              Organizes Your Recipes, Get Ready To Cook
            </Heading>
            <Text mb="5" fontSize="lg" mt="4" w="75%">
              The way the Recipe App helps us is the ability to organize our
              recipes. Thus, we can see the list of our recipes and find the
              particular ones . Besides, we can also manipulate it based on the
              category of each one of them.
            </Text>
            <Button colorScheme="pink" size="lg" onClick={onOpen}>
              Watch Demo
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size="2xl">
              <ModalOverlay />
              <ModalContent bgColor="pink.300">
                <ModalHeader>Recipe App Tutorial</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <AspectRatio maxW="560px" ratio={1}>
                    <iframe
                      title="Recipe Demo"
                      src="https://www.youtube.com/embed/NGAjcJFlP_U"
                      allowFullScreen
                    />
                  </AspectRatio>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="pink" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
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
