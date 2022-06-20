    import axios from "axios";

    /** base url to make requests to the movie database */
    // instance is not a important name
    const instance = axios.create({
        baseURL: "https://api.themoviedb.org/3",
    });

    // instance.get('/foo-bar');

    // https://api.themoviedb.org/3/foo-bar

    export default instance;