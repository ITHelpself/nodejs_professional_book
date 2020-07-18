module.exports = class greetingService{
    constructor(greeting = "hello"){
        this.greeting = greeting;
    }
    createGreeting(name){
        return  `${this.greeting},${name}`;    
    }
}