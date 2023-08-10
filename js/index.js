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
        const request = yield axios_1.default.get("https://swapi.dev/api/people")
            .then(res => {
            return res.data.results;
        })
            .catch((err) => {
            console.log("Error, something went wrong.");
        });
        // console.log(request);
        const films = yield axios_1.default.get("https://swapi.dev/api/films")
            .then(resp => {
            return resp.data.results;
        });
        let movies = [];
        for (const film of films) {
            if (film.episode_id) {
                const title = film.episode_id;
                movies.push(title);
            }
        }
    });
}
main();
