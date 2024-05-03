export default class BookTherapy {
    #id: string
    #title: string
    #subTitle: string
    #buttonTitle: string
    #photo: string
    #description: string
    #mostrar: string

    constructor(title: string, subTitle: string, buttonTitle: string, photo: string, description: string, mostrar: string, id: string = '') {
        this.#title = title
        this.#subTitle = subTitle
        this.#buttonTitle = buttonTitle
        this.#photo = photo
        this.#description = description
        this.#mostrar = mostrar
        this.#id = id
    }

    static vazio() {
        return new BookTherapy('', '', '', '', '', '')
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

    get buttonTitle() {
        return this.#buttonTitle
    }

    get photo() {
        return this.#photo
    }

    get description() {
        return this.#description
    }

    get mostrar() {
        return this.#mostrar
    }
}