export default class Slide {
    #id: string
    #name?: string
    #slogan: string

    constructor(name: string, slogan: string, id: string = '') {
        this.#name = name
        this.#slogan = slogan
        this.#id = id
    }

    static vazio() {
        return new Slide('', '')
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get slogan() {
        return this.#slogan
    }
}