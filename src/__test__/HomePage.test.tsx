import { render, screen } from "@testing-library/react";
import HomePage from "../pages/HomePage";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
describe("App 컴포넌트 테스트", () => {
  const queryClient = new QueryClient();

  test("제목이 제대로 렌더링 되는지 확인", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    );
    const heading = await screen.findByText(/Welcome to Task!/i);
    expect(heading).toBeInTheDocument();
  });
});
