export default class Therapy {
    #id: string
    #name: string
    #description: string
    #photo: string

    constructor(name: string, description: string, photo: string, id: string = '') {
        this.#name = name
        this.#description = description
        this.#photo = photo
        this.#id = id
    }

    static vazio() {
        return new Therapy('', '', '')
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get description() {
        return this.#description
    }

    get photo() {
        return this.#photo
    }
}