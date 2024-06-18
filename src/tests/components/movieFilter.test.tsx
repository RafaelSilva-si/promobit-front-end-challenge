import { fireEvent, render, screen } from "@testing-library/react";
import { MovieFilter } from "../../components";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom")
const mockUseNavigate = jest.mocked(useNavigate);

describe("MovieFilter", () => {

    afterEach(() => {
        jest.clearAllMocks();
    })
    
    it("should render correctly", () => {
        mockUseNavigate.mockReturnValue(jest.fn());

        render(<MovieFilter genres={[]} genresSelecteds={[]}/>);

        const title = screen.getByRole("heading");
        expect(title).toHaveTextContent("Milhões de filmes, séries e pessoas para descobrir. Explore já.");
    });

    it("should render genreLList correctly", () => {
        mockUseNavigate.mockReturnValue(jest.fn());

        render(<MovieFilter genres={[{ id: 1, name: "test" }, { id: 2, name: "test2" }, { id: 3, name: "test3" }]} genresSelecteds={[]}/>);

        const selectButton = screen.getAllByRole("button");
        expect(selectButton).toHaveLength(3);
    });

    it("should render selectButton correctly with selected", () => {
        mockUseNavigate.mockReturnValue(jest.fn());

        const { rerender } = render(
            <MovieFilter genres={[{ id: 1, name: "test" }, { id: 2, name: "test2" }, { id: 3, name: "test3" }]} genresSelecteds={[]} />
        );
    
        const selectButton = screen.getAllByRole("button");
        fireEvent.click(selectButton[0]);
       
        rerender(
            <MovieFilter genres={[{ id: 1, name: "test" }, { id: 2, name: "test2" }, { id: 3, name: "test3" }]} genresSelecteds={[1]} />
        );

        expect(selectButton[0]).toHaveClass("selected");
    })
})