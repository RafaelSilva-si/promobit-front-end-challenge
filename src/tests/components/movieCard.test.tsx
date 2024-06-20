import { fireEvent, render, screen } from "@testing-library/react";
import { MovieCard } from "../../components/shared/movieCard";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const mocks = {
  movie: require("../mocks/movie.json"),
}

describe("MovieCard", () => {
    it("should render correctly", () => {
        render(
            <MemoryRouter>
              <MovieCard movie={mocks.movie} />
            </MemoryRouter>
          );

        const title = screen.getAllByRole("heading", {level: 2});
        const releaseDate = screen.getAllByRole("heading", {level: 3});

        expect(title[0]).toHaveTextContent("Movie 1");
        expect(releaseDate[0]).toHaveTextContent("2021-01-01");
    })

    it("Should navigate to movie-details when click", () => {
        const history = createMemoryHistory();

        render(
            <Router location={history.location} navigator={history}>
              <MovieCard movie={mocks.movie} />
            </Router>
        );

        const link = screen.getAllByRole("link");
        fireEvent.click(link[0]);

        expect(history.location.pathname).toBe(`/movie-details/${mocks.movie.id}`);
    })
})