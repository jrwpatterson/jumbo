declare namespace TMDB {
  export interface Movie {
    vote_count: number;
    id: number;
    video: boolean;
    vote_average: number;
    title: string;
    media_type: "tv" | "movie";
    popularity: number;
    poster_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    backdrop_path: string;
    adult: boolean;
    overview: string;
    release_date?: string;
    first_air_date?: string;
    original_name?: string;
    name?: string;
  }

  export interface Results {
    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
  }

  export interface Genre {
    id: number;
    name: string;
  }

  export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }

  export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }

  export interface SpokenLanguage {
    iso_639_1: string;
    name: string;
  }

  export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: Genre[];
    first_air_date: string;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
}
