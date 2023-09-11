const calcularDistancia = () => {
    let dist = document.getElementById("distancia").value;

    if (dist < 1000) {
        console.log("pie");
        document.getElementById("metros").textContent = "Pie";
    } else if (dist < 10000) {
        document.getElementById("metros").textContent = "Bicicleta";
        console.log("bicicleta");
    } else if (dist < 30000) {
        document.getElementById("metros").textContent = "Colectivo";
        console.log("colectivo");
    } else if (dist < 100000) {
        document.getElementById("metros").textContent = "Auto";
        console.log("auto");
    } else {
        document.getElementById("metros").textContent = "Avion";
        console.log("avion");
    }
}

let n = 0;
let arrayNumeros = [0];

const almacenarNumeros = () => {
    let numb = document.getElementById("numeros").value;
    arrayNumeros[n] = numb;
    n++;
    arrayNumeros.sort(function(a,b){
        return(b-a);
    });
    document.getElementById("numerosOrdenados").textContent = arrayNumeros;
    console.log(n);
    console.log(numb);
    console.log(arrayNumeros);
}
