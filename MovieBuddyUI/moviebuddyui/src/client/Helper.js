import { Axios } from "axios";
import { getMovies } from "./AxiosClient";

export const getMyArray = async () =>{
    const myMovieArray = {};

    getMovies()
        .then(movies => {
            console.log(movies);
            myMovieArray = movies;
        })
        .catch(error => {
            console.error("Error getting movies: ", error);
        });

    console.log("Here" + myMovieArray);

    // myMovieArray.forEach(movie => {
    //     console.log(movie.title);
    // });
}