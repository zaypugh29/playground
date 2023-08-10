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
    results?: funfacts[],
    count?: number,
    next?: string,
    previous?: boolean
}

interface movieResponse {
    results: attributes[]
    count?: number,
    next?: string,
    previous?: boolean
}

interface movie {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string
}

async function main() {

    const request = async () => {
        const response = await axios.get<response>("https://swapi.dev/api/people");
        console.log(response.data);
        // return response.data.results;
    }

    request();

    const films = async () => {
        const films = await axios.get<movieResponse>("https://swapi.dev/api/films");
        return films.data.results;
    }

    // const peopleArr = await request();
    // const filmArr = await films();

    // for (let person of peopleArr) {
    //     console.log(person.name)
    // }

    // for (let film of filmArr){
    //     console.log(film.title);
    // }


}

main();

// The point of the 'await' keyword is so that you do not have to attach a .then to functions
// that return promises.

// These axios requests should be their own functions. Return the data, and then work with it
