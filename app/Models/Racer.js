
export class Racer {
    constructor(name, picture, number) {
        this.name = name
        this.picture = picture
        this.number = number
        this.distance = 0
    }

    move() {
        this.distance += Math.floor(Math.random()*3)
    }

    get Template() {
        return /*html*/`
        <div class="row my-3">
            <div class="col-12 bg-dark py-3" id="${this.number}">
                <div title="${this.name}" class="fs-1" style="padding-left: ${this.distance}%;">${this.picture}</div>
            </div>
        </div>
        `
    }
}