import type { Feeling } from "../domain/feelings";
import type { Recommendation } from "../domain/recommendations";

type MovieResponse = {
  title: string;
  description: string;
  genre: string;
  poster: string;
};

type RecommendationResponse = {
  movie: MovieResponse;
};

export function getRecommendation(feeling: Feeling): Recommendation {
  return {
    movie: {
      title: "The Shawshank Redemption",
      description: "Two imprisoned",
      genre: "Drama",
      poster: "https://m.media-amazon.com/images/I/51XQb6n4GqL._AC_.jpg",
    },
  };
}
