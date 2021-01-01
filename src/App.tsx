import React, { useState } from "react";
import {
  Button,
  Layout,
  Modal,
  Form,
  Input as AntdInput,
  Input,
  List,
  Card,
} from "antd";
import { FormLayout } from "antd/lib/form/Form";
import { StarOutlined } from "@ant-design/icons";

type dataProps = {
  title: string;
  ingredients: string;
  instruction: string;
  image: string;
};

function App() {
  const [recipes, setRecipe] = useState<dataProps[]>([
    {
      title: "Oseng Otok Tempe",
      ingredients: "",
      instruction: "",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363122-resep-masakan-praktis-ala-rumahan.jpg",
    },
    {
      title: "Telur Geprek",
      ingredients: "",
      instruction: "",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363124-resep-masakan-praktis-ala-rumahan.jpg",
    },
    {
      title: "Takoyaki Mi",
      ingredients: "",
      instruction: "",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363125-resep-masakan-praktis-ala-rumahan.jpg",
    },
  ]);

  const { Header, Content, Footer } = Layout;

  const { TextArea } = Input;

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [formLayout, setFormLayout] = useState<FormLayout>("horizontal");

  const handleShowModal = (layout: FormLayout = "horizontal") => {
    setFormLayout(layout);
    setIsModalVisible(true);
  };
  const handleOkModal = () => {
    setIsModalVisible(false);
  };
  const handleCancelModal = () => {
    setIsModalVisible(false);
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
      <Layout>
        <Header style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>
            {" "}
            <StarOutlined />
            Recipe GG
          </h1>
          <Button type="primary" onClick={() => handleShowModal(formLayout)}>
            Add Recipe
          </Button>
          <Modal
            title="New Recipe"
            visible={isModalVisible}
            onCancel={handleCancelModal}
            onOk={handleOkModal}
          >
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{ layout: formLayout }}
            >
              <Form.Item label="Recipe">
                <AntdInput placeholder="Type The Recipe Name" />
              </Form.Item>
              <Form.Item label="Ingredients">
                <TextArea
                  rows={4}
                  placeholder="What The Ingredients Of The Recipe ?"
                />
              </Form.Item>
              <Form.Item label="Instruction">
                <TextArea rows={4} placeholder="How About The Step By Step ?" />
              </Form.Item>
              <Form.Item label="Image URL">
                <AntdInput placeholder="Type The URL Of The Image Please" />
              </Form.Item>
              <Form.Item {...buttonItemLayout}>
                <Button type="primary">Add Recipe</Button>
              </Form.Item>
            </Form>
          </Modal>
        </Header>
        <Content>
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
                <Button type="primary">OPEN RECIPE</Button>
              </List.Item>
            )}
          />
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
