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
    let movies: string[] = [];
    await calls.forEach(el => {
        axios.get<movie>(el)
            .then(res => {
                console.log(res.data.title);
                // movies.push(res.data.title);
            })
            .catch(err => {
                console.log(`Something went wrong.`);
            })
    })
    // console.log(movies);
    // console.log(calls)
    // return movies;
}

// function print(arr: string[]) {
//     arr.forEach(el => {
//         console.log(el);
//     })
// }

// function printFilms(calls: string[])
async function main() {
    axios.get<response>("https://swapi.dev/api/people")
        .then(async res => {
            const results = res.data.results;
            for (let i = 0; i < results.length; i++) {
                console.log(results[i].name);
                console.log(results[i].birth_year);
                await printFilms(results[i].films);
                // console.log(printFilms(results[i].films))
            }
            // results.forEach(async el => {
            //     console.log(`This is ${el.name}`);
            //     console.log(`They were born in ${el.birth_year} and they starred in`);
            //     console.log(el.films)
            //     if (el.films.length) {
            //         Wait for each film to be printed
            //         await printFilms(el.films);
            //         el.films.forEach(el => {
            //             axios.get<movie>(el)
            //                 .then(res => {
            //                     console.log(res.data.title)
            //                 })
            //         })


            //     }
            // })

            // printFilms(results[0].films)
        })
        .catch((err) =>
            console.log("Error, something went wrong.")
        )
}

main();
