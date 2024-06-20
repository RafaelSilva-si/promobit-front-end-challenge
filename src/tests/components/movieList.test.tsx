import { render, screen } from "@testing-library/react";
import { MovieList } from "../../components";
import { MemoryRouter } from "react-router-dom";

const mocks = {
  movies: require("../mocks/listMovies.json"),
}

describe("MovieList", () => {
    it("should render correctly", () => {
        render(
            <MemoryRouter>
              <MovieList movies={mocks.movies} />
            </MemoryRouter>
          );

        const linkCards = screen.getAllByRole("listitem");
        expect(linkCards).toHaveLength(1);
    })
})