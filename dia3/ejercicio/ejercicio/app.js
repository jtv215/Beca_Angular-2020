var Contenido = /** @class */ (function () {
    function Contenido() {
        this.html = document.getElementById("contenido");
        this.html.innerHTML = "";
    }
    //TODO Permitir imprimir printable
    Contenido.prototype.print = function (s) {
        //this.html.innerHTML += str;
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
var contenido = new Contenido();
function clearContenido() {
    contenido.clear();
}
function addDog() {
    var inputAge = document.getElementById("inputAge");
    var inputBreed = document.getElementById("inputBreed");
    //contenido.println(new Dog(parseInt(inputAge.value), inputBreed.value));
}
// TODO funcion addCat
var spot1 = new Dog(2, 'Labrador');
var spot2 = new Dog(5, 'Coker');
var spot3 = new Dog(5, 'Coker2');
//contenido.println(spot1);
//contenido.println(spot2);
//let spot3 :Printable;
/* spot3 = spot1;
spot3 = spot2; */
