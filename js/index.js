"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function printFilms(calls) {
    return __awaiter(this, void 0, void 0, function* () {
        let movies = [];
        yield calls.forEach(el => {
            axios_1.default.get(el)
                .then(res => {
                console.log(res.data.title);
                // movies.push(res.data.title);
            })
                .catch(err => {
                console.log(`Something went wrong.`);
            });
        });
        // console.log(movies);
        // console.log(calls)
        // return movies;
    });
}
// function print(arr: string[]) {
//     arr.forEach(el => {
//         console.log(el);
//     })
// }
// function printFilms(calls: string[])
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        axios_1.default.get("https://swapi.dev/api/people")
            .then((res) => __awaiter(this, void 0, void 0, function* () {
            const results = res.data.results;
            for (let i = 0; i < results.length; i++) {
                console.log(results[i].name);
                console.log(results[i].birth_year);
                yield printFilms(results[i].films);
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
        }))
            .catch((err) => console.log("Error, something went wrong."));
    });
}
main();
