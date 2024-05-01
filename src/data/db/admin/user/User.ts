export default class User {
    #id: string
    #name: string
    #email: string
    #password: string
    #role: string    

    constructor(name: string, email: string, password: string, role: string, id: string = '') {
        this.#name = name
        this.#email = email
        this.#password = password
        this.#role = role       
        this.#id = id
    }

    static vazio() {
        return new User('', '', '', '')
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get email() {
        return this.#email
    }

    get password() {
        return this.#password
    }
    
    get role() {
        return this.#role
    }

}