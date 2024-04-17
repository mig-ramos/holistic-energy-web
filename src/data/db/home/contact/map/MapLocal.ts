export default class MapLocal {
    #id: string
    #title: string
    #photo: string
    #apiKey: string
    #lat: string
    #lng: string
    #info: string
    #mapId: string

    constructor(title: string, photo: string, apiKey: string, lat: string, lng: string, info: string, mapId: string, id: string = '') {
        this.#title = title
        this.#photo = photo
        this.#apiKey = apiKey
        this.#lat = lat
        this.#lng = lng
        this.#info = info
        this.#mapId = mapId
        this.#id = id
    }

    static vazio() {
        return new MapLocal('', '', '', '', '', '', '')
    }

    get id() {
        return this.#id
    }

    get title() {
        return this.#title
    }

    get photo() {
        return this.#photo
    }

    get apiKey() {
        return this.#apiKey
    }

    get lat() {
        return this.#lat
    }

    get lng() {
        return this.#lng
    }

    get info() {
        return this.#info
    }

    get mapId() {
        return this.#mapId
    }
}