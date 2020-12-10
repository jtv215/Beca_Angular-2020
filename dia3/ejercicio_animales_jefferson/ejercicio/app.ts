class Contenido {
    private html: any;

    constructor() {
        this.html = document.getElementById("contenido");
        this.html.innerHTML = "";
    }

    //TODO Permitir imprimir printable
    print(s: string): void {
        this.html.innerHTML += s;
    }
    println(s: any): void {
        this.print(s);
        this.print("<br/>\n");
    }

    clear() {
        this.html.innerHTML = "";
    }
}

interface Printable {
    toString(): string;
}
class Dog implements Printable {
    age: number
    breed: string

    constructor(age: number, breed: string) {
        this.age = age
        this.breed = breed
    }

    getRelativeAge(): number {
        return this.age * 7
    }

    toString(): string {
        return "Dog: " + this.breed + " " + this.getRelativeAge();
    }
}
//TODO Añadir clase Cat, que implemente printable y que imprima el nombre del gato y la edad * 8
// y toString que imprima "Cat" en vez de dog

class Cat implements Printable {
    nombre: string
    edad: number

    constructor(edad: number, nombre: string,) {
        this.nombre = nombre
        this.edad = edad
    }

    getRelativeAge(): number {
        return this.edad * 8
    }

    toString(): string {
        return "Cat: " + this.nombre + " " + this.getRelativeAge();
    }
}

/*****Main principal *****/

let contenido = new Contenido();

function clearContenido() {
    contenido.clear();
}

//Añadir dog.
function addDog() {
    const inputAge = <HTMLInputElement>document.getElementById("inputAge");
    const inputBreed = <HTMLInputElement>document.getElementById("inputBreed");

    let aux = new Dog(parseInt(inputAge.value), inputBreed.value);
    console.log(aux);
    contenido.println(aux);
}

//Añadir cat
function addCat() {
    const edad = <HTMLInputElement>document.getElementById("inputAge");
    const nombre = <HTMLInputElement>document.getElementById("inputBreed");

    let aux = new Cat(parseInt(edad.value), nombre.value,);
    contenido.println(aux);
}

let spot1 = new Dog(3, 'Labrador');
let spot2 = new Dog(2, 'Coker');
let spot3 = new Cat(1, 'michu');

//Imprime la lista.
contenido.println(spot1);
contenido.println(spot2);
contenido.println(spot3);