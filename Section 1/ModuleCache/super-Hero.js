class SuperHero {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }


    setName(name) {
        this.name = name;
    }
}


// module.exports = new SuperHero("Batman");
//here we import the SuperHero instance thats why we are creating an instance we are not using the class we are using the instance if we want to make an seperate instant we want to export the class insted of sharing the instance of class .. Eg:--

module.exports = SuperHero;