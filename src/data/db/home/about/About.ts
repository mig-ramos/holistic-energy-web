export default class About {
    #id: string
    #title: string
    #subTitle: string
    #description: string
    #photo: string

    constructor(title: string, subTitle: string, description: string, photo: string, id: string = '') {
        this.#title = title
        this.#subTitle = subTitle
        this.#description = description
        this.#photo = photo
        this.#id = id
    }

    static vazio() {
        return new About('', '', '', '')
    }

    get id() {
        return this.#id
    }

    get title() {
        return this.#title
    }

    get subTitle() {
        return this.#subTitle
    }

    get description() {
        return this.#description
    }

    get photo() {
        return this.#photo
    }
}