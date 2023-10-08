"use strict";
// async function main() {
  



//     const request = async () => {
//         try {
//             const response = await axios.get<response>("https://swapi.dev/api/people");
//             return response.data.results;
//         } catch (error) {
//             console.log("oh no :/");
//         }
//     }
//     const films = async () => {
//         try {
//             const films = await axios.get<movieResponse>("https://swapi.dev/api/films");
//             return films.data.results;
//         } catch (error) {
//             console.log("Come again? ");
//         }
//     }
//     const peopleArr = await request();
//     const filmArr = await films();
//     // if (peopleArr){
//     //     for (let person of peopleArr) {
//     //         console.log(person.name)
//     //     }
//     // }
//     // if (filmArr) {
//     //     for (let film of filmArr){
//     //         console.log(film.title);
//     //     }
//     // }
//     const newFilmArray = filmArr?.map((x) => x.episode_id);
//     console.log(newFilmArray?.sort());
// }
// main();
// The point of the 'await' keyword is so that you do not have to attach a .then to functions
// that return promises.
// These axios requests should be their own functions. Return the data, and then work with it
