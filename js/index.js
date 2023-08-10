"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function printFilms(calls) {
    calls.forEach(el => {
        axios_1.default.get(el)
            .then(res => {
            console.log(res.data.title);
        })
            .catch(err => {
            console.log(`Something went wrong.`);
        });
    });
}
function main() {
    axios_1.default.get("https://swapi.dev/api/people")
        .then(res => {
        const results = res.data.results;
        printFilms(results[0].films);
    })
        .catch((err) => console.log("Error, something went wrong."));
}
main();
