import { useQuery, useMutation, useQueryClient } from "react-query";

export type Recipe = {
  _id: string;
  title: string;
  category: string;
  ingredients: string;
  image: string;
  instruction: string;
};

export type NewRecipe = Omit<Recipe, "_id">;

const requestGetRecipe = async () => {
  const res = await fetch(`${process.env.REACT_APP_RECIPE_URL}`);
  return res.json();
};

const requestAddRecipe = async (newRecipe: NewRecipe) => {
  const res = await fetch(`${process.env.REACT_APP_RECIPE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRecipe),
  });
  const recipes = await res.json();
  return recipes;
};

const requestUpdateRecipe = async (editedRecipe: Recipe) => {
  const res = await fetch(
    `${process.env.REACT_APP_RECIPE_URL}/` + editedRecipe._id,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editedRecipe),
    }
  );
  const recipes = res.json();
  return recipes;
};

const requestDeleteRecipe = async (deledteBook: Recipe) => {
  const res = await fetch(
    `${process.env.REACT_APP_RECIPE_URL}/` + deledteBook._id,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );
  const recipes = res.json();
  return recipes;
};

export default function useRecipeQuery() {
  const queryClient = useQueryClient();

  const { data: recipes } = useQuery<Recipe[]>("recipes", requestGetRecipe);

  const { mutate: addRecipe } = useMutation<Recipe, Error, NewRecipe>(
    requestAddRecipe,
    {
      onSuccess: (newRecipe) => {
        queryClient.setQueryData<Recipe[]>("recipes", (currentRecipe) => [
          ...(currentRecipe ? currentRecipe : []),
          newRecipe,
        ]);
      },
    }
  );

  const { mutate: updateRecipe } = useMutation<Recipe, Error, Recipe>(
    requestUpdateRecipe,
    {
      onMutate: (editedRecipe) => {
        queryClient.setQueryData<Recipe[]>("recipes", (currentRecipe) => {
          return (
            currentRecipe?.map((recipe) =>
              recipe._id === editedRecipe._id ? editedRecipe : recipe
            ) ?? []
          );
        });
      },
    }
  );

  const { mutate: deleteRecipe } = useMutation<Recipe, Error, Recipe>(
    requestDeleteRecipe,
    {
      onSuccess: (deletedRecipe) => {
        queryClient.setQueryData<Recipe[]>("recipes", (currentRecipe) => {
          return (
            currentRecipe?.filter(
              (recipe) => recipe._id !== deletedRecipe._id
            ) ?? []
          );
        });
      },
    }
  );

  return {
    recipes,
    addRecipe,
    updateRecipe,
    deleteRecipe,
  };
}
