import axios from 'axios'

interface funfacts {
    name?: string,
    height?: number,
    mass?: number,
    hair_color?: string,
    skin_color?: string,
    eye_color?: string,
    birth_year?: string,
    gender?: string,
    homeworld?: string,
    films?: string[],
    species?: string[],
    vehicles?: string[],
    starships?: string[],
    created?: string,
    edited?: string,
    url?: string
}



interface response {
    results?: funfacts[],
    count?: number,
    next?: string,
    previous?: boolean
}

interface movieResponse {
    results?: movie[]
    count?: number,
    next?: string,
    previous?: boolean
}

interface movie {
    title?: string,
    episode_id?: number,
    opening_crawl?: string,
    director?: string,
    producer?: string,
    release_date?: string,
    character?: string[],
    planets?: string[],
    vehicles?: string[],
    species?: string,
    created?: string,
    edited?: string,
    url?: string
}

async function main() {

    const request = async () => {
        try {
            const response = await axios.get<response>("https://swapi.dev/api/people");
            return response.data.results;
        } catch (error) {
            console.log("oh no :/");
        }
    }

    const films = async () => {
        try {
            const films = await axios.get<movieResponse>("https://swapi.dev/api/films");
            return films.data.results;
        } catch (error) {
            console.log("Come again? ");
        }
    }

    const peopleArr = await request();
    const filmArr = await films();


    // if (peopleArr){
    //     for (let person of peopleArr) {
    //         console.log(person.name)
    //     }
    // }

    // if (filmArr) {
    //     for (let film of filmArr){
    //         console.log(film.title);
    //     }
    // }

    const newFilmArray = filmArr?.map( (x) => x.episode_id);
    console.log(newFilmArray?.sort());




}

main();

// The point of the 'await' keyword is so that you do not have to attach a .then to functions
// that return promises.

// These axios requests should be their own functions. Return the data, and then work with it
