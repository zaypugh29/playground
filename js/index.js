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
function starred(calls) {
    const movies = [];
    calls.forEach(el => {
        axios_1.default.get(el)
            .then(res => {
            // console.log(res.data.title)
            movies.push(res.data.title);
        });
    });
    return movies;
}
function print(arr) {
    arr.forEach(el => {
        console.log(el);
    });
}
function main() {
    axios_1.default.get("https://swapi.dev/api/people")
        .then((res) => __awaiter(this, void 0, void 0, function* () {
        const results = res.data.results;
        results.forEach(el => {
            console.log(`This is ${el.name}`);
            console.log(`They were born in ${el.birth_year} and they starred in `);
            console.log(el.films);
            // if(el.films.length) {
            //     el.films.forEach(el => {
            //         axios.get<movie>(el)
            //             .then( res => {
            //                 console.log(res.data.title)
            //             })
            //     })
            // }
        });
    }))
        .catch((err) => console.log("Error, something went wrong."));
}
main();
