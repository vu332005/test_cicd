/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "../../page";

it("App Router: Works with Server Components", () => {
  render(<Page />);

  // Đã sửa: Thêm tuỳ chọn { name: "App Router" } để chỉ định chính xác thẻ heading cần tìm,
  // tránh xung đột với thẻ heading của component Counter.
  expect(
    screen.getByRole("heading", { name: "App Router" })
  ).toHaveTextContent("App Router");
});