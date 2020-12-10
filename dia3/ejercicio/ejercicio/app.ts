class Contenido {
    private html: any;

    constructor (){
        this.html = document.getElementById("contenido");
        this.html.innerHTML = "";
    }

    //TODO Permitir imprimir printable
    print(s: string): void {
        
        //this.html.innerHTML += str;
    }
    println(s: string): void {
        this.print(s);
        this.print("<br/>\n");
    }
    
    clear(){
        this.html.innerHTML = "";
    }
}
/********Clase  DOG***********/
interface Printable {
    toString():string;
}
class Dog implements Printable
{
    age: number
    breed: string

    constructor(age: number, breed: string)
    {
        this.age = age
        this.breed = breed
    }

    getRelativeAge(): number
    {
        return this.age * 7
    }

    toString(): string {
        return "Dog: " + this.breed + " " + this.getRelativeAge();
    }
}





//TODO Añadir clase Cat, que implemente printable y que imprima el nombre del gato y la edad * 8
// y toString que imprima "Cat" en vez de dog


let contenido = new Contenido();

function clearContenido() {
    contenido.clear();
}

function addDog() {
    const inputAge = <HTMLInputElement> document.getElementById("inputAge");
    const inputBreed = <HTMLInputElement> document.getElementById("inputBreed");
    
    //contenido.println(new Dog(parseInt(inputAge.value), inputBreed.value));
}
// TODO funcion addCat


let spot1 = new Dog(2, 'Labrador');
let spot2 = new Dog(5, 'Coker');
let spot3 = new Dog(5, 'Coker2');

//contenido.println(spot1);
//contenido.println(spot2);

 //let spot3 :Printable;
 /* spot3 = spot1;
spot3 = spot2; */




