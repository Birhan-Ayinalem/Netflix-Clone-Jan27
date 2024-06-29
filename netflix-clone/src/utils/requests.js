
const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/discover/movie/top_rated?api_key=${API_KEY}&language-en-US`,
    fetchActionMovies: `/discover/movie?aip_key=${API_KEY}&with_geners=28`,
    fetchComedyMovies: `/discover/movie?aip_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies: `/discover/movie?aip_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies: `/discover/movie?aip_key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries: `/discover/movie?aip_key=${API_KEY}&with_geners=99`,
    fetchTvShows: `tv/popular?api_key=${API_KEY}&language-en-US&page=1`
}

export default requests