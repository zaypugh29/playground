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

async function printFilms(calls: string[]) {
    await calls.forEach(el => {
        axios.get<movie>(el)
            .then(res => {
                console.log(res.data.title);
                return res.data.title;
            })
            .catch(err => {
                console.log(`Something went wrong.`);
            })
    })

}

async function main() {
    const request = await axios.get<response>("https://swapi.dev/api/people")
        .then(res => {
            const results = res.data.results;
            // console.log("1", results[0].films)
            printFilms(results[0].films)
            // printFilms(results[0].films)
            return results[0].films;
        })
        .catch((err) => {
            console.log("Error, something went wrong.")
        })

    // console.log("2", request);
}

main();
