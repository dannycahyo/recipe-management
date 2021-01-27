import React, { useState } from "react";
import {
  Button,
  Modal,
  List,
  Card,
  Typography,
  Form,
  Input as AntdInput,
} from "antd";
import { Recipe } from "./App";

type MyRecipeProps = {
  recipes: Recipe[];
  onDelete: (id: string) => void;
  onFinishEdit: (value: Recipe) => void;
};

function MyRecipe({ recipes, onDelete, onFinishEdit }: MyRecipeProps) {
  const [
    isOpenRecipeModalVisible,
    setIsOpenRecipeModalVisible,
  ] = useState<boolean>(false);

  const [
    isFormRecipeModalVisible,
    setIsFormRecipeModalVisible,
  ] = useState<boolean>(false);

  const [recipeValue, setRecipeValue] = useState<string>("");
  const [ingredientsValue, setIngredientsValue] = useState<string>("");
  const [instructionValue, setInstructionValue] = useState<string>("");
  const [imageValue, setImageValue] = useState<string>("");

  const [searchValue, setSearchValue] = useState<string>("");

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // const [selectedId, setSelectedId] = useState<string|null>(null)
  // const selectedRecipe2 = recipes.find((recipe) => {
  //   return recipe.id === selectedId
  // })
  // If You Want To Use Other Method
  const handleOpenRecipeModalOk = () => {
    setIsOpenRecipeModalVisible(false);
    setSelectedRecipe(null);
  };

  const handleOpenRecipeModalCancel = () => {
    setIsOpenRecipeModalVisible(false);
    setSelectedRecipe(null);
  };

  const handleOpenRecipeModal = (recipe: Recipe) => {
    setIsOpenRecipeModalVisible(true);
    setSelectedRecipe(recipe);
  };

  const handleDeleteRecipe = (id: string) => {
    onDelete(id);
    setIsOpenRecipeModalVisible(false);
    setSelectedRecipe(null);
  };

  const handleFormRecipeModal = () => {
    setIsFormRecipeModalVisible(true);
    if (selectedRecipe) {
      setImageValue(selectedRecipe.image);
      setRecipeValue(selectedRecipe.title);
      setIngredientsValue(selectedRecipe.ingredients);
      setInstructionValue(selectedRecipe.instruction);
    }
  };

  const handleFormRecipeModalOk = () => {
    setIsFormRecipeModalVisible(false);
  };

  const handleFormRecipeModalCancel = () => {
    setIsFormRecipeModalVisible(false);
  };

  const handleImageValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImageValue(event.target.value);
  };

  const handleRecipeValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRecipeValue(event.target.value);
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

  const handleFinishEdit = () => {
    const editedRecipe = {
      title: recipeValue,
      ingredients: ingredientsValue,
      instruction: instructionValue,
      id: selectedRecipe?.id ?? "",
      image: imageValue,
    };
    onFinishEdit(editedRecipe);
    setSelectedRecipe(editedRecipe);
    setIsFormRecipeModalVisible(false);
  };

  const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.title
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  const { TextArea } = AntdInput;

  const { Title } = Typography;

  const formItemLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 },
  };

  const buttonItemLayout = {
    wrapperCol: { span: 14, offset: 4 },
  };

  return (
    <div>
      <div
        style={{
          marginTop: 70,
          marginBottom: 20,
          marginLeft: 60,
          display: "flex",
        }}
      >
        <Title style={{ marginRight: 20 }} level={3}>
          My Recipe
        </Title>
        <AntdInput
          style={{ width: "50%" }}
          placeholder="Are You Looking For Recipe ?"
          allowClear
          size="large"
          value={searchValue}
          onChange={handleSearchValue}
        />
      </div>
      <div style={{ marginLeft: 60 }}>
        {filteredRecipes.length === 0 ? (
          <h1>Cannot Find Recipe</h1>
        ) : (
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={filteredRecipes}
            renderItem={(recipe) => (
              <List.Item>
                <Card
                  style={{
                    width: 250,
                    textAlign: "center",
                    justifyContent: "space-between",
                  }}
                  cover={
                    <img
                      style={{ width: 250, height: 200 }}
                      alt="recipe"
                      src={recipe.image}
                    />
                  }
                >
                  {recipe.title}
                </Card>
                <Button
                  style={{ width: 250 }}
                  type="primary"
                  onClick={() => handleOpenRecipeModal(recipe)}
                >
                  OPEN RECIPE
                </Button>
              </List.Item>
            )}
          />
        )}
      </div>
      <Modal
        title="Open Recipe"
        visible={isOpenRecipeModalVisible}
        onCancel={handleOpenRecipeModalCancel}
        onOk={handleOpenRecipeModalOk}
      >
        {selectedRecipe && (
          <>
            <img width={272} alt="logo" src={selectedRecipe.image} />
            <Typography.Title level={2}>
              {selectedRecipe.title}
            </Typography.Title>
            <Typography.Paragraph>
              {selectedRecipe.ingredients}
            </Typography.Paragraph>
            <Typography.Paragraph>
              {selectedRecipe.instruction}
            </Typography.Paragraph>
            <Button
              style={{ marginRight: 10 }}
              type="primary"
              danger
              onClick={() => handleDeleteRecipe(selectedRecipe.id)}
            >
              Delete
            </Button>
            <Button type="primary" onClick={handleFormRecipeModal}>
              Edit
            </Button>
          </>
        )}
      </Modal>
      <Modal
        title="Edit Recipe"
        visible={isFormRecipeModalVisible}
        onCancel={handleFormRecipeModalCancel}
        onOk={handleFormRecipeModalOk}
      >
        <Form {...formItemLayout} layout={"horizontal"}>
          <Form.Item label="Image" htmlFor="image">
            <AntdInput
              id="image"
              value={imageValue}
              onChange={handleImageValueChange}
            />
          </Form.Item>
          <Form.Item label="Recipe" htmlFor="recipe">
            <AntdInput
              aria-label="Recipe"
              id="recipe"
              value={recipeValue}
              onChange={handleRecipeValueChange}
            />
          </Form.Item>
          <Form.Item label="Ingredients" htmlFor="ingredients">
            <TextArea
              aria-label="Ingredients"
              id="ingredients"
              value={ingredientsValue}
              onChange={handleIngredientsValueChange}
            />
          </Form.Item>
          <Form.Item label="Instruction" htmlFor="instruction">
            <TextArea
              aria-label="Instruction"
              id="instruction"
              value={instructionValue}
              onChange={handleInstructionValueChange}
            />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" onClick={handleFinishEdit}>
              Finish
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default MyRecipe;
