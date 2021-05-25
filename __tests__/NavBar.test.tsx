import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getPage, initTestHelpers } from "next-page-tester";
import userEvent from "@testing-library/user-event";

initTestHelpers();

// Link componentでのページ遷移テスト
describe("Navigation by Link", () => {
  it("should route to selected page in navbar", async () => {
    const { page } = await getPage({
      route: "/index",
    });
    render(page);

    // blog pageへの遷移をテスト
    userEvent.click(screen.getByTestId("blog-nav"));
    // 非同期の時はfindByText
    expect(await screen.findByText("blog page")).toBeInTheDocument();
    // screen.debug();

    // comment pageへの遷移をテスト
    userEvent.click(screen.getByTestId("comment-nav"));
    expect(await screen.findByText("comment page")).toBeInTheDocument();

    // context pageへの遷移をテスト
    userEvent.click(screen.getByTestId("context-nav"));
    expect(await screen.findByText("context page")).toBeInTheDocument();

    // task pageへの遷移をテスト
    userEvent.click(screen.getByTestId("task-nav"));
    expect(await screen.findByText("todos page")).toBeInTheDocument();

    // home pageへの遷移をテスト
    userEvent.click(screen.getByTestId("home-nav"));
    expect(await screen.findByText("Welcome to Nextjs")).toBeInTheDocument();
  });
});
