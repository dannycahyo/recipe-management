import React, { useState } from "react";
import MyRecipe from "./MyRecipe";
import { Button, Layout, Modal, Form, Input as AntdInput, Input } from "antd";
import { FormLayout } from "antd/lib/form/Form";
import { StarOutlined } from "@ant-design/icons";

export type recipeProps = {
  title: string;
  ingredients: string;
  instruction: string;
  image: string;
  href: string;
};

function App() {
  const [recipes, setRecipe] = useState<recipeProps[]>([
    {
      title: "Oseng Otok Tempe",
      ingredients:
        "1 ikat kacang panjang (potong korek api), 1 papan tempe besar (potong dadu), 4 siung bawang merah,3 siung bawang putih, 5 cabai rawit merah, 10 cabai rawit hijau,Garam secukupnya, Gula pasir secukupnya, Kaldu bubuk secukupnya, Kecap manis secukupnya, Saori saus tiram secukupnya",
      instruction:
        "1. Cuci bersih kacang panjang yang sudah dipotong korek api. Sisihkan 2. Goreng tempe yang sudah dipotong hingga keemasan. Tiriskan 3. Tumis bumbu halus hingga harum, tambahkan, garam, gula, kecap, saori, dan kaldu bubuk 4. Masukkan kacang panjang, aduk hingga tercampur rata dan tambahkan sedikit air 5. Masukkan tempe, oseng-oseng sebentar. Koreksi rasa 6. Angkat dan sajikan.",
      href: "https://ant.design",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363122-resep-masakan-praktis-ala-rumahan.jpg",
    },
    {
      title: "Telur Geprek",
      ingredients:
        "1 butir telur dan garam secukupnya, 2 sdm tepung bumbu sajiku, Air secukupnya,7 sdm tepung bumbu sajiku,2-3 sdm tepung maizena, 15 cabai rawit merah, 5 cabai rawit hijau, 3 butir bawang merah, 1 siung bawang putih, Garam secukupnya, Minyak goreng panas",
      instruction:
        "1. Dadar telur seperti biasa, potong sesuai selera, sisihkan 2. Siapkan adonan kering dan adonan basah. (Adonan basah kekentalan sedang) 3. Masukkan telur ke adonan basah, lalu ke adonan kering. Goreng hingga kecoklatan. 4. Sambal bawang: Uleg kasar semua bumbu sambal bawang beri sedikit garam lalu siram dengan minyak panas 5. Penyajian: Geprek/penyet telur diatas cobek, siap disajikan.",
      href: "https://ant.design",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363124-resep-masakan-praktis-ala-rumahan.jpg",
    },
    {
      title: "Takoyaki Mi",
      ingredients:
        "1/2 bungkus mi, 3 butir telur, kocok lepas, 2 sdm tepung terigu, 4 sdm susu cair, 1/2 bagian wortel, rebus sebentar, iris halus, 1 buah smoked beef, iris halus, 1 batang daun bawang, iris halus, Garam, Lada, sedikit kaldu bubuk",
      instruction:
        "1. Rebus matang mi, tiriskan dan sisihkan 2. Larutkan tepung terigu dengan susu cair, aduk sampai tidak bergerindil 3. Masukkan telur, smocked beef, daun bawang, garam, lada, kaldu, telur, dan mie, aduk rata 4. Tuang kedalam cetakan takoyaki, masak sampai matang dengan api kecil dan pan ditutup",
      href: "https://ant.design",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363125-resep-masakan-praktis-ala-rumahan.jpg",
    },
  ]);

  const { Header, Content, Footer } = Layout;

  const { TextArea } = Input;

  const [
    isAddRecipeModalVisible,
    setIsAddRecipeModalVisible,
  ] = useState<boolean>(false);

  const [formLayout, setFormLayout] = useState<FormLayout>("horizontal");

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
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "whitesmoke",
          }}
        >
          <h1>
            {" "}
            <StarOutlined />
            Recipe GG
          </h1>
          <Button
            style={{ marginTop: 10, marginBottom: 10 }}
            type="primary"
            onClick={() => handleAddRecipeModal(formLayout)}
          >
            Add Recipe
          </Button>
          <Modal
            title="New Recipe"
            visible={isAddRecipeModalVisible}
            onCancel={handleAddRecipeModalCancel}
            onOk={handleAddRecipeModalOK}
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
          <MyRecipe recipes={recipes} />
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
