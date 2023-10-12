var tomb = ["Első elem", "Második elem", "Harmadik elem"];
document.getElementById("elsoGomb").addEventListener("click", function() {
    document.getElementById("eredmeny").textContent = tomb[0];
});

document.getElementById("masodikGomb").addEventListener("click", function() {
    document.getElementById("eredmeny").textContent = tomb[1];
});

document.getElementById("harmadikGomb").addEventListener("click", function() {
    document.getElementById("eredmeny").textContent = tomb[2];
});
document.getElementById("osszegGomb").addEventListener("click", function() {
    document.getElementById("eredmeny").textContent = tomb.join(', ');
});
document.getElementById("hozzaadGomb").addEventListener("click", function() {
    var szovegInput = document.getElementById("szovegInput").value;
    if (szovegInput) {
        tomb.push(szovegInput);
        document.getElementById("szovegInput").value = ""; 
    }
});
document.getElementById("tombHosszaGomb").addEventListener("click", function() {
    document.getElementById("eredmeny").textContent = "A tömb: " + tomb.length + " elemet tartalmaz";
});
document.getElementById("torlesGomb").addEventListener("click", function() {
    var torlesInput = document.getElementById("torlesInput").value;
    var index = parseInt(torlesInput);
    if (index >= 0 && index < tomb.length) {
        tomb.splice(index, 1);
        document.getElementById("torlesInput").value = ""; 
    }
});