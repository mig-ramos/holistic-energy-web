export default class Company {
    #id: string
    #companyName: string
    #description: string
    #companyAddress: string
    #photo: string
    #officeOur: string
    #zap: string
    #email: string
    #facebook: string
    #youtube: string
    #instagram: string
    #twitter: string


    constructor(
        companyName: string,
        description: string,
        companyAddress: string,
        photo: string,
        officeOur: string,
        zap: string,
        email: string,
        facebook: string,
        youtube: string,
        instagram: string,
        twitter: string,

        id: string = '') {
        this.#companyName = companyName
        this.#description = description
        this.#companyAddress = companyAddress
        this.#photo = photo
        this.#officeOur = officeOur
        this.#zap = zap
        this.#email = email
        this.#facebook = facebook
        this.#youtube = youtube
        this.#instagram = instagram
        this.#twitter = twitter
        this.#id = id
    }

    static vazio() {
        return new Company('', '', '', '', '', '', '', '', '', '', '')
    }

    get id() {
        return this.#id
    }

    get companyName() {
        return this.#companyName
    }

    get description() {
        return this.#description
    }

    get companyAddress() {
        return this.#companyAddress
    }

    get photo() {
        return this.#photo
    }

    get officeOur() {
        return this.#officeOur
    }

    get zap() {
        return this.#zap
    }

    get email() {
        return this.#email
    }

    get facebook() {
        return this.#facebook
    }

    get youtube() {
        return this.#youtube
    }

    get instagram() {
        return this.#instagram
    }

    get twitter() {
        return this.#twitter
    }
}