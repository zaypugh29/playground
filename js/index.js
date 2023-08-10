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
        yield calls.forEach(el => {
            axios_1.default.get(el)
                .then(res => {
                console.log(res.data.title);
                return res.data.title;
            })
                .catch(err => {
                console.log(`Something went wrong.`);
            });
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = yield axios_1.default.get("https://swapi.dev/api/people")
            .then(res => {
            const results = res.data.results;
            // console.log("1", results[0].films)
            printFilms(results[0].films);
            // printFilms(results[0].films)
            return results[0].films;
        })
            .catch((err) => {
            console.log("Error, something went wrong.");
        });
        // console.log("2", request);
    });
}
main();
