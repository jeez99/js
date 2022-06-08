console.log("holas");

console.log("longitud de los lados del cuadrado " + ladoC + "cm");
console.log("perimetro del cuadrado " + perimetroC + "cm");
console.log("area del cuadrado " + areaC + "cm");

function perimetroC() {
    const input = document.getElementById("ladoC");
    const value = input.value;
    alert(value * 4);
}

function areaC() {
    const input = document.getElementById("ladoC");
    const value = input.value;
    alert(value * value);
}

function perimetroT() {
    const input1 = document.getElementById("lado1");
    const lado1 = (input1.value) * 1;
    const input2 = document.getElementById("lado2");
    const lado2 = (input2.value) * 1;
    const input3 = document.getElementById("lado3");
    const lado3 = (input3.value) * 1;
    alert(lado1 + lado2 + lado3);
}

function areaT() {
    const input1 = document.getElementById("lado1");
    const lado1 = (input1.value) * 1;
    const input2 = document.getElementById("lado2");
    const lado2 = (input2.value) * 1;
    const input3 = document.getElementById("lado3");
    const lado3 = (input3.value) * 1;
    const base = lado2 / 2;
    const altura = Math.sqrt((lado3 * lado3) - (base * base));
    alert((lado2 * altura) / 2);
}

function perimetroCir() {
    const input = document.getElementById("radioCir");
    const value = input.value;
    alert(value * (Math.PI) * 2);
}

function areaCir() {
    const input = document.getElementById("radioCir");
    const value = input.value;
    alert(value * value * (Math.PI));
}