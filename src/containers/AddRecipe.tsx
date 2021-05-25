import React, { useState } from "react";
import useRecipeQuery from "../useRecipeQuery";
import {
  Box,
  FormControl,
  Input,
  Textarea,
  FormHelperText,
  FormLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";

export const AddRecipe = () => {
  const { addRecipe } = useRecipeQuery();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [recipeValue, setRecipeValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [imageValue, setImageValue] = useState<string>("");
  const [ingredientsValue, setIngredientsValue] = useState<string>("");
  const [instructionValue, setInstructionValue] = useState<string>("");

  const handleShowModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const handleRecipeValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecipeValue(event.target.value);
  };

  const handleImageValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImageValue(event.target.value);
  };

  const handleIngredientsValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIngredientsValue(event.target.value);
  };

  const handleInstructionValueChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInstructionValue(event.target.value);
  };

  const handleSubmitForm = () => {
    addRecipe({
      title: recipeValue,
      category: categoryValue,
      image: imageValue,
      ingredients: ingredientsValue,
      instruction: instructionValue,
    });
    setIsModalVisible(false);
  };

  return (
    <Box>
      <Button onClick={handleShowModal} colorScheme="pink" mr="2">
        Add Recipe
      </Button>
      <Modal isOpen={isModalVisible} onClose={handleCloseModal} size="2xl">
        <ModalOverlay />
        <ModalContent bg="pink.200">
          <ModalHeader>Add Your Recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Recipe Name</FormLabel>
              <Input value={recipeValue} onChange={handleRecipeValueChange} />
              <FormHelperText>Input the name of your new recipe</FormHelperText>
              <FormLabel mt="2">Category</FormLabel>
              <Input
                value={categoryValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setCategoryValue(event.target.value)
                }
              />
              <FormHelperText>Input the category of your recipe</FormHelperText>
              <FormLabel mt="2">Image</FormLabel>
              <Input value={imageValue} onChange={handleImageValueChange} />
              <FormHelperText>
                Input the URL link of your recipe's image
              </FormHelperText>
              <FormLabel mt="2">Ingredients</FormLabel>
              <Textarea
                value={ingredientsValue}
                onChange={handleIngredientsValueChange}
                size="lg"
              />
              <FormHelperText>
                Input the ingredients of your recipe
              </FormHelperText>
              <FormLabel mt="2">Instruction</FormLabel>
              <Textarea
                value={instructionValue}
                onChange={handleInstructionValueChange}
                size="lg"
              />
              <FormHelperText>
                Input the instruction of your recipe
              </FormHelperText>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button mr="4" colorScheme="pink" onClick={handleSubmitForm}>
              Submit
            </Button>
            <Button onClick={handleCloseModal} colorScheme="pink">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
