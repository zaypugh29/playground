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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield axios_1.default.get("https://swapi.dev/api/people");
                return response.data.results;
            }
            catch (error) {
                console.log("oh no :/");
            }
        });
        const films = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const films = yield axios_1.default.get("https://swapi.dev/api/films");
                return films.data.results;
            }
            catch (error) {
                console.log("Come again? ");
            }
        });
        const peopleArr = yield request();
        const filmArr = yield films();
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
        console.log("In order", filmArr);
    });
}
main();
// The point of the 'await' keyword is so that you do not have to attach a .then to functions
// that return promises.
// These axios requests should be their own functions. Return the data, and then work with it
