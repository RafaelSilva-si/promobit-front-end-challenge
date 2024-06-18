import { render, screen } from "@testing-library/react";
import { MovieFilter } from "../../components";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom")
const mockUseNavigate = jest.mocked(useNavigate);

describe("MovieFilter", () => {
    mockUseNavigate.mockReturnValue(jest.fn());

    it("should render correctly", () => {
        render(<MovieFilter genres={[]} genresSelecteds={[]}/>);

        const title = screen.getByRole("heading");
        expect(title).toHaveTextContent("Milhões de filmes, séries e pessoas para descobrir. Explore já.");
    });
})