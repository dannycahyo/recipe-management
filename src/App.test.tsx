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

it("Should add recipe and enter my recipes", () => {
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

  userEvent.click(screen.getByRole("button", { name: "Cancel", hidden: true }));
  userEvent.click(screen.getByRole("button", { name: "OK", hidden: true }));

  userEvent.click(screen.getAllByRole("button", { name: "OPEN RECIPE" })[3]);

  userEvent.click(screen.getByRole("button", { name: "Delete" }));
  userEvent.click(screen.getByRole("button", { name: "Edit", hidden: true }));

  userEvent.click(screen.getByRole("button", { name: "Finish" }));

  userEvent.click(
    screen.getAllByRole("button", { name: "Cancel", hidden: true })[2]
  );
  userEvent.click(
    screen.getAllByRole("button", { name: "OK", hidden: true })[2]
  );

  userEvent.click(
    screen.getAllByRole("button", { name: "Cancel", hidden: true })[2]
  );
  userEvent.click(
    screen.getAllByRole("button", { name: "OK", hidden: true })[2]
  );

  screen.debug(undefined, kMaxLength);
});
