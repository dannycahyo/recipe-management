import React from "react";
import App from "./App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { kMaxLength } from "buffer";

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };
  };

it("Should add recipe and enter my recipes", async () => {
  render(<App />);

  userEvent.click(screen.getByRole("button", { name: "Add Recipe" }));

  userEvent.type(
    screen.getByRole("textbox", { name: "Recipe" }),
    "Oseng Kangkung"
  );
  userEvent.type(
    screen.getByRole("textbox", { name: "Ingredients" }),
    "Kangkung, Bawang Putih & Merah"
  );
  userEvent.type(
    screen.getByRole("textbox", { name: "Instruction" }),
    "Potong, Goreng, Jadi"
  );
  userEvent.type(
    screen.getByRole("textbox", { name: "Image URL" }),
    "https://img-z.okeinfo.net/okz/500/library/images/2020/03/05/ep1rs6f4feaeptjim8lr_20055.jpg"
  );

  userEvent.click(screen.getAllByRole("button", { name: "Add Recipe" })[1]);

  userEvent.click(screen.getByRole("button", { name: "Add Recipe" }));
  userEvent.click(screen.getByRole("button", { name: "OK" }));

  userEvent.click(screen.getByRole("button", { name: "Add Recipe" }));
  userEvent.click(screen.getByRole("button", { name: "Cancel" }));

  userEvent.click(screen.getAllByRole("button", { name: "OPEN RECIPE" })[0]);

  userEvent.click(screen.getByRole("button", { name: "Delete" }));

  userEvent.click(screen.getAllByRole("button", { name: "OPEN RECIPE" })[0]);

  userEvent.click(screen.getByRole("button", { name: "Edit" }));

  userEvent.type(
    screen.getByRole("textbox", { name: "Image" }),
    "https://cdn-brilio-net.akamaized.net/news/2020/12/01/196481/1363126-resep-masakan-praktis-ala-rumahan.jpg"
  );
  userEvent.type(
    screen.getByRole("textbox", { name: "Recipe" }),
    "Cah Tauge & Tahu"
  );
  userEvent.type(
    screen.getByRole("textbox", { name: "Ingredients" }),
    "Cabbih Buccok"
  );
  userEvent.type(
    screen.getByRole("textbox", { name: "Instruction" }),
    "Bismillah testingnya bisa"
  );
  userEvent.click(screen.getByRole("button", { name: "Finish" }));

  userEvent.click(screen.getByRole("button", { name: "Edit" }));
  userEvent.click(screen.getAllByRole("button", { name: "Cancel" })[0]);

  userEvent.click(screen.getAllByRole("button", { name: "OPEN RECIPE" })[0]);
  userEvent.click(screen.getAllByRole("button", { name: "Edit" })[0]);
  userEvent.click(screen.getAllByRole("button", { name: "OK" })[0]);

  userEvent.click(screen.getByRole("button", { name: "Cancel" }));

  userEvent.click(screen.getAllByRole("button", { name: "OPEN RECIPE" })[0]);
  userEvent.click(screen.getByRole("button", { name: "OK" }));

  const input = screen.getByPlaceholderText("Are You Looking For Recipe ?");
  const value = "takoyaki";

  await userEvent.type(input, value);
  expect(input).toHaveValue(value);

  screen.debug(undefined, kMaxLength);
});
