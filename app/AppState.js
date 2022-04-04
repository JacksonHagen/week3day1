import { Racer } from "./Models/Racer.js";

let racer1 = new Racer('Gilbert McDillflesh', '🙉', 0)
let racer2 = new Racer('Parendes Lumpkin', '🐟', 1)
let racer3 = new Racer('Phaundy Sharluphin', '🍣', 2)

export const AppState = {
    racers: [racer1, racer2, racer3]
}