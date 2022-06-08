function calcularPrecio() {
    const input1 = document.getElementById("precio");
    const input2 = document.getElementById("descuento");
    const out = document.getElementById("out");
    const precio = input1.value;
    const descuento = input2.value;
    const preciofinal = precio * ((100 - descuento * 1) / 100);
    out.innerText = ("El precio de tu producto es de $" + preciofinal);
}