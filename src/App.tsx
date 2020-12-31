import React from "react";
import { Button, Layout } from "antd";
import "./App.css";

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <div>
      <Layout>
        <Header style={{ display: "flex", justifyContent: "space-around" }}>
          <span>Recipe GG</span>
          <Button type="primary">Add Recipe</Button>
        </Header>
        <Content></Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
