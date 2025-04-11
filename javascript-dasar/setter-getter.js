const person = {
    firstName: "kosong",
    lastName: "kosong",

    get getFullNama() {
        return `${this.firstName} ${this.lastName}`;
    },

    set setFullNama(val) {
        const array = val.split(" ");
        this.firstName = array[0]
        this.lastName = array[1]
    },

    sayHaiii: function () {
        console.log(`Nama : ${this.firstName} ${this.lastName}`);
    }
};


person.setFullNama= "Elvira maharani"

console.log(person.getFullNama)

person.sayHaiii();