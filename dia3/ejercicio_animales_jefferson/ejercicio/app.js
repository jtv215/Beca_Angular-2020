var Contenido = /** @class */ (function () {
    function Contenido() {
        this.html = document.getElementById("contenido");
        this.html.innerHTML = "";
    }
    //TODO Permitir imprimir printable
    Contenido.prototype.print = function (s) {
        this.html.innerHTML += s;
    };
    Contenido.prototype.println = function (s) {
        this.print(s);
        this.print("<br/>\n");
    };
    Contenido.prototype.clear = function () {
        this.html.innerHTML = "";
    };
    return Contenido;
}());
var Dog = /** @class */ (function () {
    function Dog(age, breed) {
        this.age = age;
        this.breed = breed;
    }
    Dog.prototype.getRelativeAge = function () {
        return this.age * 7;
    };
    Dog.prototype.toString = function () {
        return "Dog: " + this.breed + " " + this.getRelativeAge();
    };
    return Dog;
}());
//TODO Añadir clase Cat, que implemente printable y que imprima el nombre del gato y la edad * 8
// y toString que imprima "Cat" en vez de dog
var Cat = /** @class */ (function () {
    function Cat(edad, nombre) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Cat.prototype.getRelativeAge = function () {
        return this.edad * 8;
    };
    Cat.prototype.toString = function () {
        return "Cat: " + this.nombre + " " + this.getRelativeAge();
    };
    return Cat;
}());
/*****Main principal *****/
var contenido = new Contenido();
function clearContenido() {
    contenido.clear();
}
//Añadir dog.
function addDog() {
    var inputAge = document.getElementById("inputAge");
    var inputBreed = document.getElementById("inputBreed");
    var aux = new Dog(parseInt(inputAge.value), inputBreed.value);
    console.log(aux);
    contenido.println(aux);
}
//Añadir cat
function addCat() {
    var edad = document.getElementById("inputAge");
    var nombre = document.getElementById("inputBreed");
    var aux = new Cat(parseInt(edad.value), nombre.value);
    contenido.println(aux);
}
var spot1 = new Dog(3, 'Labrador');
var spot2 = new Dog(2, 'Coker');
var spot3 = new Cat(1, 'michu');
//Imprime la lista.
contenido.println(spot1);
contenido.println(spot2);
contenido.println(spot3);
