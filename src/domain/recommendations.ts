export type Movie = {
  title: string;
  description: string;
  genre: string;
  poster: string;
};

export type Recommendation = {
  movie: Movie;
};
