import React, { useState } from "react";
import {
  Button,
  Modal,
  List,
  Card,
  Typography,
  Form,
  Input,
  Input as AntdInput,
} from "antd";
import { recipeProps } from "./App";
import { FormLayout } from "antd/lib/form/Form";

type MyRecipeProps = {
  recipes: recipeProps[];
  onDelete: (id: string) => void;
  onFinishEdit: (value: recipeProps) => void;
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

  const [formLayout, setFormLayout] = useState<FormLayout>("horizontal");

  const [selectedRecipe, setSelectedRecipe] = useState<recipeProps | null>(
    null
  );
  // const [selectedId, setSelectedId] = useState<string|null>(null)
  // const selectedRecipe2 = recipes.find((recipe) => {
  //   return recipe.id === selectedId
  // })
  // If You Want To Use Other Method
  const { TextArea } = Input;

  const handleOpenRecipeModalOk = () => {
    setIsOpenRecipeModalVisible(false);
    setSelectedRecipe(null);
  };

  const handleOpenRecipeModalCancel = () => {
    setIsOpenRecipeModalVisible(false);
    setSelectedRecipe(null);
  };

  const handleOpenRecipeModal = (recipe: recipeProps) => {
    setIsOpenRecipeModalVisible(true);
    setSelectedRecipe(recipe);
  };

  const handleDeleteRecipe = (id: string) => {
    onDelete(id);
    setIsOpenRecipeModalVisible(false);
    setSelectedRecipe(null);
  };

  const handleFormRecipeModal = (
    layout: FormLayout = "horizontal",
    selectedRecipe: recipeProps
  ) => {
    setFormLayout(layout);
    setIsFormRecipeModalVisible(true);
    setImageValue(selectedRecipe?.image);
    setRecipeValue(selectedRecipe?.title);
    setIngredientsValue(selectedRecipe?.ingredients);
    setInstructionValue(selectedRecipe?.instruction);
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

  const [form] = Form.useForm();

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  return (
    <div>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={recipes}
        renderItem={(recipe) => (
          <List.Item>
            <Card
              style={{
                width: "60%",
                textAlign: "center",
                justifyContent: "space-between",
              }}
              cover={<img height="250" alt="recipe" src={recipe.image} />}
            >
              {recipe.title}
            </Card>
            <Button
              type="primary"
              onClick={() => handleOpenRecipeModal(recipe)}
            >
              OPEN RECIPE
            </Button>
          </List.Item>
        )}
      />

      <Modal
        title="Open Recipe"
        visible={isOpenRecipeModalVisible}
        onCancel={handleOpenRecipeModalCancel}
        onOk={handleOpenRecipeModalOk}
      >
        {selectedRecipe && (
          <>
            <img width={272} alt="logo" src={selectedRecipe.image} />
            <Typography.Title>{selectedRecipe.title}</Typography.Title>
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
            <Button
              type="primary"
              onClick={() => handleFormRecipeModal(formLayout, selectedRecipe)}
            >
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
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
        >
          <Form.Item label="Image">
            <AntdInput value={imageValue} onChange={handleImageValueChange} />
          </Form.Item>
          <Form.Item label="Recipe">
            <AntdInput value={recipeValue} onChange={handleRecipeValueChange} />
          </Form.Item>
          <Form.Item label="Ingredients">
            <TextArea
              value={ingredientsValue}
              onChange={handleIngredientsValueChange}
            />
          </Form.Item>
          <Form.Item label="Instruction">
            <TextArea
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
