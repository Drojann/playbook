class Pokemon{
    constructor(name){
        this.name = name
    }
    sayHello() {
        console.log(`Mi Pokemon es ${this.name}`)
    }

    sayMessage(message) {
        console.log(` Mi pokemon ${this.name} dice: ${message}`)
    }
}

module.exports = Pokemon