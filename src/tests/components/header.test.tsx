import { render, screen } from "@testing-library/react";
import { Header } from "../../components";

describe("Header", () => {
    it("should render correctly", () => {
        render(<Header />);

        const logo = screen.getAllByRole("img");
        expect(logo).toHaveLength(1);
    });
})