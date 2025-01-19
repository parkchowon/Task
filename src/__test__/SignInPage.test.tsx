import { fireEvent, render, screen } from "@testing-library/react";
import AuthLayout from "../components/Layouts/AuthLayout";
import { MemoryRouter } from "react-router-dom";

test("Task 버튼을 누르면 페이지가 이동한다.", async () => {
  render(
    <MemoryRouter>
      <AuthLayout />
    </MemoryRouter>
  );

  const moveToMain = await screen.getByRole("button", { name: /Task/i });
  fireEvent.click(moveToMain);

  expect(window.location.pathname).toBe("/");
});
