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

interface response {
    results: funfacts[]
}

interface movie {
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string
}

function printFilms(calls: string[]) {
    calls.forEach(el => {
        axios.get<movie>(el)
            .then(res => {
                console.log(res.data.title);
            })
            .catch(err => {
                console.log(`Something went wrong.`);
            })
    })

}

function main() {
    axios.get<response>("https://swapi.dev/api/people")
        .then(res => {
            const results = res.data.results;
            printFilms(results[0].films)
        })
        .catch((err) =>
            console.log("Error, something went wrong.")
        )
}

main();
