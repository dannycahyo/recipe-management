import React, { useState } from "react";
import { Recipe } from "./App";
import { Button, Modal, Form, Input as AntdInput, Typography } from "antd";
import { FormLayout } from "antd/lib/form/Form";
import { StarOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";

type AddRecipeProps = {
  onSubmit: (value: Recipe) => void;
};

function AddRecipe({ onSubmit }: AddRecipeProps) {
  const [
    isAddRecipeModalVisible,
    setIsAddRecipeModalVisible,
  ] = useState<boolean>(false);

  const [formLayout, setFormLayout] = useState<FormLayout>("horizontal");

  const [recipeValue, setRecipeValue] = useState<string>("");
  const [ingredientsValue, setIngredientsValue] = useState<string>("");
  const [instructionValue, setInstructionValue] = useState<string>("");
  const [imageValue, setImageValue] = useState<string>("");

  const handleAddRecipeModal = (layout: FormLayout = "horizontal") => {
    setFormLayout(layout);
    setIsAddRecipeModalVisible(true);
  };
  const handleAddRecipeModalOK = () => {
    setIsAddRecipeModalVisible(false);
  };
  const handleAddRecipeModalCancel = () => {
    setIsAddRecipeModalVisible(false);
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
  const handleImageValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setImageValue(event.target.value);
  };

  const handleSubmitForm = () => {
    onSubmit({
      title: recipeValue,
      ingredients: ingredientsValue,
      instruction: instructionValue,
      image: imageValue,
      id: nanoid(),
    });
    setIsAddRecipeModalVisible(false);
  };

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

  const { TextArea } = AntdInput;

  const { Title } = Typography;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title level={2}>
          {" "}
          <StarOutlined />
          Recipe GG
        </Title>
        <Button
          style={{ marginTop: 10, marginBottom: 10 }}
          size="large"
          type="primary"
          onClick={() => handleAddRecipeModal(formLayout)}
        >
          Add Recipe
        </Button>
      </div>
      <Modal
        title="New Recipe"
        visible={isAddRecipeModalVisible}
        onCancel={handleAddRecipeModalCancel}
        onOk={handleAddRecipeModalOK}
      >
        <Form {...formItemLayout} layout={formLayout}>
          <Form.Item label="Recipe">
            <AntdInput
              placeholder="Type The Recipe Name"
              value={recipeValue}
              onChange={handleRecipeValueChange}
            />
          </Form.Item>
          <Form.Item label="Ingredients">
            <TextArea
              rows={4}
              placeholder="What The Ingredients Of The Recipe ?"
              value={ingredientsValue}
              onChange={handleIngredientsValueChange}
            />
          </Form.Item>
          <Form.Item label="Instruction">
            <TextArea
              rows={4}
              placeholder="How About The Step By Step ?"
              value={instructionValue}
              onChange={handleInstructionValueChange}
            />
          </Form.Item>
          <Form.Item label="Image URL">
            <AntdInput
              placeholder="Type The URL Of The Image Please"
              value={imageValue}
              onChange={handleImageValueChange}
            />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" onClick={handleSubmitForm}>
              AddRecipe
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AddRecipe;
