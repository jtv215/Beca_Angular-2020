//Funciones
function sumar(p1, p2) {

    if (p1.length == 0) {
        p1 = 0;
        console.log('p1: ' + p1);
    }
    if (p2.length == 0) {
        p2 = 0;
        console.log('p2:' + p2);
    }
    var result = parseInt(p1) + parseInt(p2);
    console.log('La suma es:' + result);
    document.getElementById("e").value = result;
}

function concatenar(p1, p2) {
    var result = p1 + p2;
    console.log("Contanear:" + result);
    document.getElementById("e").value = result;
} 