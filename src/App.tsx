import React, { useState } from "react";
import AddRecipe from "./AddRecipe";
import MyRecipe from "./MyRecipe";
import { Layout } from "antd";
import { nanoid } from "nanoid";

export type Recipe = {
  title: string;
  ingredients: string;
  instruction: string;
  image: string;
  id: string;
};

function App() {
  const [recipes, setRecipe] = useState<Recipe[]>([
    {
      title: "Oseng Otok Tempe",
      id: nanoid(),
      ingredients:
        "1 ikat kacang panjang (potong korek api), 1 papan tempe besar (potong dadu), 4 siung bawang merah,3 siung bawang putih, 5 cabai rawit merah, 10 cabai rawit hijau,Garam secukupnya, Gula pasir secukupnya, Kaldu bubuk secukupnya, Kecap manis secukupnya, Saori saus tiram secukupnya",
      instruction:
        "1. Cuci bersih kacang panjang yang sudah dipotong korek api. Sisihkan 2. Goreng tempe yang sudah dipotong hingga keemasan. Tiriskan 3. Tumis bumbu halus hingga harum, tambahkan, garam, gula, kecap, saori, dan kaldu bubuk 4. Masukkan kacang panjang, aduk hingga tercampur rata dan tambahkan sedikit air 5. Masukkan tempe, oseng-oseng sebentar. Koreksi rasa 6. Angkat dan sajikan.",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363122-resep-masakan-praktis-ala-rumahan.jpg",
    },
    {
      title: "Telur Geprek",
      id: nanoid(),
      ingredients:
        "1 butir telur dan garam secukupnya, 2 sdm tepung bumbu sajiku, Air secukupnya,7 sdm tepung bumbu sajiku,2-3 sdm tepung maizena, 15 cabai rawit merah, 5 cabai rawit hijau, 3 butir bawang merah, 1 siung bawang putih, Garam secukupnya, Minyak goreng panas",
      instruction:
        "1. Dadar telur seperti biasa, potong sesuai selera, sisihkan 2. Siapkan adonan kering dan adonan basah. (Adonan basah kekentalan sedang) 3. Masukkan telur ke adonan basah, lalu ke adonan kering. Goreng hingga kecoklatan. 4. Sambal bawang: Uleg kasar semua bumbu sambal bawang beri sedikit garam lalu siram dengan minyak panas 5. Penyajian: Geprek/penyet telur diatas cobek, siap disajikan.",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363124-resep-masakan-praktis-ala-rumahan.jpg",
    },
    {
      title: "Takoyaki Mi",
      id: nanoid(),
      ingredients:
        "1/2 bungkus mi, 3 butir telur, kocok lepas, 2 sdm tepung terigu, 4 sdm susu cair, 1/2 bagian wortel, rebus sebentar, iris halus, 1 buah smoked beef, iris halus, 1 batang daun bawang, iris halus, Garam, Lada, sedikit kaldu bubuk",
      instruction:
        "1. Rebus matang mi, tiriskan dan sisihkan 2. Larutkan tepung terigu dengan susu cair, aduk sampai tidak bergerindil 3. Masukkan telur, smocked beef, daun bawang, garam, lada, kaldu, telur, dan mie, aduk rata 4. Tuang kedalam cetakan takoyaki, masak sampai matang dengan api kecil dan pan ditutup",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363125-resep-masakan-praktis-ala-rumahan.jpg",
    },
    {
      title: "Cah Tauge & Tahu",
      id: nanoid(),
      ingredients:
        "- 1/4 Tauge (cuci bersih) - 3 buah tahu putih (potong dadu) - 5 buah bakso sapi (belah dua) - 5 buah cabai rawit merah - 2 buah cabai merah kerit - 3 buah bawang merah - 2 siung bawang putih ",
      instruction:
        "1. Goreng tahu dan bakso (jangan terlalu kering). Tiriskan 2. Tumis bumbu yang sudah dirajang sampai harum 3. Tambahkan saori, garam, gula dan kaldu bubuk 4. Masukkan tauge tahu dan bakso, aduk sebentar sampai rata. Koreksi rasa (jangan ditambah air) 5. Angkat dan sajikan.",
      image:
        "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363126-resep-masakan-praktis-ala-rumahan.jpg",
    },
  ]);

  const { Header, Content, Footer } = Layout;

  const handleAddRecipe = (newRecipe: Recipe) => {
    setRecipe([...recipes, newRecipe]);
  };

  const handleDeleteRecipe = (id: string) => {
    setRecipe(
      recipes.filter((recipe) => {
        return recipe.id !== id;
      })
    );
  };

  const handleFinishEditRecipe = (editedRecipe: Recipe) => {
    setRecipe(
      recipes.map((recipe) => {
        return recipe.id === editedRecipe.id ? editedRecipe : recipe;
      })
    );
  };

  return (
    <div>
      <Layout>
        <Header
          style={{
            position: "fixed",
            zIndex: 1,
            width: "100%",
            backgroundColor: "whitesmoke",
          }}
        >
          <AddRecipe onSubmit={handleAddRecipe} />
        </Header>
        <Content>
          <MyRecipe
            recipes={recipes}
            onDelete={handleDeleteRecipe}
            onFinishEdit={handleFinishEditRecipe}
          />
        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
