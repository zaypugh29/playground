import axios from 'axios'

interface funfacts {
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: string[],
    species: string[],
    vehicles: string[],
    starships: string[],
    created: string,
    edited: string,
    url: string
}

interface attributes {
    title: string,
    episode_id: number
}

interface response {
    results: funfacts[],
}

interface movieResponse {
    results: attributes[]
}

interface movie {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string
}

async function main() {
    const request = await axios.get<response>("https://swapi.dev/api/people")
        .then(res => {
            return res.data.results;
        })
        .catch((err) => {
            console.log("Error, something went wrong.")
        })
    // console.log(request);

    const films = await axios.get<movieResponse>("https://swapi.dev/api/films")
        .then( resp => {
            return resp.data.results;
        })
    
    let movies = [];
    for (const film of films) {
        if (film.episode_id) {
            const title =  film.episode_id;
            movies.push(title);
        }
    }


}

main();
