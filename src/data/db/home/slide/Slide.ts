export default class Slide{
    #id: string
    #slide: string

    constructor(slide: string, id: string = ''){
        this.#slide = slide
        this.#id = id
    }

    static vazio(){
        return new Slide('', '')
    }

    get id(){
        return this.#id
    }

    get slide(){
        return this.#slide
    }
}