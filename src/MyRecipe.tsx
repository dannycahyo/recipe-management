import React, { useState } from "react";
import { Button, Modal, List, Card } from "antd";
import { recipeProps } from "./App";

type MyRecipeProps = {
  recipes: recipeProps[];
};

function MyRecipe({ recipes }: MyRecipeProps) {
  const [
    isOpenRecipeModalVisible,
    setIsOpenRecipeModalVisible,
  ] = useState<boolean>(false);
  const handleOpenRecipeModal = () => {
    setIsOpenRecipeModalVisible(true);
  };
  const handleOpenRecipeModalOk = () => {
    setIsOpenRecipeModalVisible(false);
  };
  const handleOpenRecipeModalCancel = () => {
    setIsOpenRecipeModalVisible(false);
  };

  return (
    <div>
      <List
        grid={{ gutter: 16, column: 3 }}
        dataSource={recipes}
        renderItem={(item) => (
          <List.Item>
            <Card
              style={{
                width: "50%",
                textAlign: "center",
                justifyContent: "space-between",
              }}
              cover={<img alt="recipe" src={item.image} />}
            >
              {item.title}
            </Card>
            <Button type="primary" onClick={() => handleOpenRecipeModal()}>
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
        <List
          itemLayout="vertical"
          size="large"
          dataSource={recipes}
          renderItem={(item) => (
            <List.Item
              key={item.title}
              extra={<img width={272} alt="logo" src={item.image} />}
            >
              <List.Item.Meta
                title={<a href={item.href}>{item.title}</a>}
                description={item.ingredients}
              />
              {item.instruction}
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
}

export default MyRecipe;
