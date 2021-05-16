import React, { useState } from "react";
import UserHeader from "../components/UserHeader";
import { Footer } from "../components/Footer/Footer";
import { HiPencilAlt } from "react-icons/hi";
import { Card } from "../containers/DetailRecipe/Card";
import { CardContent } from "../containers/DetailRecipe/CardContent";
import { CardHeader } from "../containers/DetailRecipe/CardHeader";
import { Property } from "../containers/DetailRecipe/Property";
import {
  Box,
  SimpleGrid,
  Grid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Image,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  InputRightAddon,
  InputGroup,
  Textarea,
  Center,
  Heading,
  GridItem,
  Badge,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import useRecipeQuery from "../useRecipeQuery";
import { Recipe } from "../useRecipeQuery";
import SvgImg from "../assets/undraw_empty_xct9.svg";

export default function MyRecipe() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const { recipes, updateRecipe, deleteRecipe } = useRecipeQuery();

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const [recipeValue, setRecipeValue] = useState<string>("");
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [ingredientsValue, setIngredientsValue] = useState<string>("");
  const [instructionValue, setInstructionValue] = useState<string>("");
  const [imageValue, setImageValue] = useState<string>("");

  const [searchRecipeValue, setSearchRecipeValue] = useState<string>("");

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

  const handleOpenRecipeModal = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    onOpen();
  };

  const handleOpenRecipeEditModal = () => {
    setIsModalVisible(true);
    if (selectedRecipe) {
      setRecipeValue(selectedRecipe.title);
      setCategoryValue(selectedRecipe.category);
      setImageValue(selectedRecipe.image);
      setIngredientsValue(selectedRecipe.ingredients);
      setInstructionValue(selectedRecipe.instruction);
    }
  };

  const handleFinishEditRecipe = () => {
    const editedRecipe = {
      title: recipeValue,
      category: categoryValue,
      image: imageValue,
      ingredients: ingredientsValue,
      instruction: instructionValue,
      _id: selectedRecipe?._id ?? "",
    };
    updateRecipe(editedRecipe);
    setSelectedRecipe(editedRecipe);
  };

  const handleDeleteRecipe = (_id: string) => {
    deleteRecipe({
      title: recipeValue,
      category: categoryValue,
      image: imageValue,
      ingredients: ingredientsValue,
      instruction: instructionValue,
      _id,
    });
  };

  const handleSearchRecipeValue = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchRecipeValue(event.target.value);
  };

  const filteredRecipes = recipes?.filter((recipe) => {
    return recipe.title
      .toLocaleLowerCase()
      .includes(searchRecipeValue.toLocaleLowerCase());
  });

  return (
    <Box>
      <UserHeader />
      <Box minH="3xl">
        <Grid
          justifyContent="center"
          alignItems="center"
          templateColumns="repeat(4, 1fr)"
        >
          <GridItem colStart={2} colEnd={4} mt="10">
            <InputGroup>
              <Input
                value={searchRecipeValue}
                placeholder="Find Your Recipe !"
                onChange={handleSearchRecipeValue}
              />
              <InputRightAddon children={<SearchIcon />} />
            </InputGroup>
          </GridItem>
        </Grid>
        <Grid justifyContent="center" alignItems="center">
          {filteredRecipes?.length === 0 ? (
            <Grid justifyContent="center" alignItems="center">
              <GridItem colStart={2} colEnd={5} p="12">
                <Heading
                  size="xl"
                  textColor="pink.300"
                  textAlign="center"
                  mb="12"
                >
                  Cannot Find Recipe
                </Heading>
                <Image alt="Not Found" src={SvgImg} h="370" w="475" />
              </GridItem>
            </Grid>
          ) : (
            <SimpleGrid
              columns={[1, 2, 3, 4]}
              spacing="40px"
              paddingX="20"
              paddingY="16"
            >
              {filteredRecipes?.map((recipe) => (
                <Box
                  maxW="lg"
                  borderWidth="2px"
                  boxShadow="md"
                  borderRadius="lg"
                >
                  <Image src={recipe.image} alt="Recipe Image" />
                  <Badge
                    borderRadius="full"
                    px="2"
                    py="1"
                    mt="2"
                    ml="3"
                    colorScheme="pink"
                  >
                    {recipe.category}
                  </Badge>
                  <Heading textAlign="center" size="md" color="pink.600">
                    {recipe.title}
                  </Heading>
                  <Center>
                    <Button
                      colorScheme="pink"
                      mt="2"
                      mb="2"
                      onClick={() => {
                        handleOpenRecipeModal(recipe);
                      }}
                    >
                      Open Recipe
                    </Button>
                  </Center>
                </Box>
              ))}
            </SimpleGrid>
          )}
        </Grid>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent bg="pink.600">
          {selectedRecipe && (
            <>
              <ModalHeader color="whitesmoke">Recipe App</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box as="section" bg="pink.200" py="12" px={{ md: "8" }}>
                  <Card maxW="4xl" mx="auto" bg="pink.100">
                    <CardHeader
                      title="Recipe Info"
                      action={
                        <Button
                          variant="outline"
                          minW="20"
                          leftIcon={<HiPencilAlt />}
                          onClick={handleOpenRecipeEditModal}
                        >
                          Edit
                        </Button>
                      }
                    />
                    <CardContent>
                      <Box py="12" px="12" alignItems="center">
                        <Image src={selectedRecipe.image} alt="Recipe Image" />
                      </Box>
                      <Property
                        label="Recipe Name"
                        value={selectedRecipe.title}
                      />
                      <Property
                        label="Category"
                        value={selectedRecipe.category}
                      />
                      <Property
                        label="Ingredients"
                        value={selectedRecipe.ingredients}
                      />
                      <Property
                        label="Instruction"
                        value={selectedRecipe.instruction}
                      />
                    </CardContent>
                  </Card>
                </Box>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="pink"
                  onClick={() => {
                    handleDeleteRecipe(selectedRecipe._id);
                    onClose();
                  }}
                  mr="5"
                >
                  Delete
                </Button>
                <Button colorScheme="pink" onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        onClose={() => setIsModalVisible(false)}
        isOpen={isModalVisible}
        size="3xl"
      >
        <ModalOverlay />
        <ModalContent bg="pink.100">
          <ModalHeader>Edit Current Recipe</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Recipe</FormLabel>
              <Input value={recipeValue} onChange={handleRecipeValueChange} />
              <FormHelperText>Loremm Ipsum Dolor Jamet</FormHelperText>
              <FormLabel mt="2">Category</FormLabel>
              <Input
                value={categoryValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setCategoryValue(event.target.value)
                }
              />
              <FormHelperText>Loremm Ipsum Dolor Jamet</FormHelperText>
              <FormLabel mt="2">Image</FormLabel>
              <Input value={imageValue} onChange={handleImageValueChange} />
              <FormHelperText>Loremm Ipsum Dolor Jamet</FormHelperText>
              <FormLabel mt="2">Ingredients</FormLabel>
              <Textarea
                value={ingredientsValue}
                onChange={handleIngredientsValueChange}
                size="lg"
              />
              <FormHelperText>Loremm Ipsum Dolor Jamet</FormHelperText>
              <FormLabel mt="2">Instruction</FormLabel>
              <Textarea
                value={instructionValue}
                onChange={handleInstructionValueChange}
                size="lg"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              mr="5"
              colorScheme="pink"
              onClick={() => {
                handleFinishEditRecipe();
                setIsModalVisible(false);
              }}
            >
              Submit
            </Button>
            <Button colorScheme="pink" onClick={() => setIsModalVisible(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Footer />
    </Box>
  );
}
