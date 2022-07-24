function copiar1() {
    var copiado = window.document.getElementById("dirg");
    navigator.clipboard.writeText(copiado.value);

    if (navigator.clipboard.writeText(copiado.value)) {
        document.querySelector(".btn1").style.backgroundColor = '#02ce02'
        document.querySelector(".btn1").textContent = "Copiado!";
    }
    setInterval(function () {
        document.querySelector(".btn1").style.backgroundColor = '#DDC24D'
        document.querySelector(".btn1").textContent = "Copiar";
    }, 2000);
}
function copiar2() {
    var copiado = window.document.getElementById("dir");
    navigator.clipboard.writeText(copiado.value);

    if (navigator.clipboard.writeText(copiado.value)) {
        document.querySelector(".btn2").style.backgroundColor = '#02ce02'
        document.querySelector(".btn2").textContent = "Copiado!";
    }
    setInterval(function () {
        document.querySelector(".btn2").style.backgroundColor = '#DDC24D'
        document.querySelector(".btn2").textContent = "Copiar";
    }, 2000);
}
function copiar3() {
    var copiado = window.document.getElementById("delg");
    navigator.clipboard.writeText(copiado.value);

    if (navigator.clipboard.writeText(copiado.value)) {
        document.querySelector(".btn3").style.backgroundColor = '#02ce02'
        document.querySelector(".btn3").textContent = "Copiado!";
    }
    setInterval(function () {
        document.querySelector(".btn3").style.backgroundColor = '#DDC24D'
        document.querySelector(".btn3").textContent = "Copiar";
    }, 2000);
}