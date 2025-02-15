console.log(this) // windows

function testThis() {
    console.log(this) // windows
}

const person = {
    nama: 'kosong',
    sayHaii: function(nama){
        console.log(`Haiii ${this.nama}`)
    }
};

person.sayHaii('Elvira');

