import { RaceController } from "./Controllers/RaceController.js"

class App {
    raceController = new RaceController()
}

window.app = new App()