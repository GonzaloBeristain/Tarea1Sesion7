let parrafo = document.getElementById("lorem").textContent;

let palabras = ["sed", "vehicula", "vivamus", "nam", "eros", "vestibulum", "quam", "sollicitudin", "finibus", "dictum", "morbi"]
const regex = new RegExp(`\\b(${palabras.join('|')})\\b`, 'gi');
let array = parrafo.match(regex)

console.log(array)

let sed = "sed";
sed = array.filter((i) => {
    return i === sed;
});
let p1 = sed.length;
if (p1 ||= (p1 == 6)){
    console.log(`%csed: ${sed.length}`,'color: #FF5500');
}

let vehicula = "vehicula";
vehicula = array.filter((i) => {
    return i === vehicula;
});
let p2 = vehicula.length;
if (p2 ||= (p2 == 4)){
    console.log(`%cvehicula: ${vehicula.length}`,'color: #FF99B2');
}

let vivamus = "vivamus";
vivamus = array.filter((i) => {
    return i === vivamus;
});
let p3 = vivamus.length;
if (p3 ||= (p3 == 3)){
    console.log(`%cvivamus: ${vivamus.length}`,'color: #FF99F5');
}

let nam = "nam";
nam = array.filter((i) => {
    return i === nam;
});
let p4 = nam.length;
if (p4 ||= (p4 == 3)){
    console.log(`%cnam: ${nam.length}`,'color: #BB99FF');
}

let eros = "eros";
eros = array.filter((i) => {
    return i === eros;
});
let p5 = eros.length;
if (p5 ||= (p5 == 2)){
    console.log(`%ceros: ${eros.length}`,'color: #99C5FE');
}

let vestibulum = "vestibulum";
vestibulum = array.filter((i) => {
    return i === vestibulum;
});
let p6 = vestibulum.length;
if (p6 ||= (p6 == 2)){
    console.log(`%cvestibulum: ${vestibulum.length}`,'color: #00CEFF');
}

let quam = "quam";
quam = array.filter((i) => {
    return i === quam;
});
let p7 = quam.length;
if (p7 ||= (p7 == 2)){
    console.log(`%cquam: ${quam.length}`,'color: #01FFFE');
}

let sollicitudin = "sollicitudin";
sollicitudin = array.filter((i) => {
    return i === sollicitudin;
});
let p8 = sollicitudin.length;
if (p8 ||= (p8 == 2)){
    console.log(`%csollicitudin: ${sollicitudin.length}`,'color: #00FF9F');
}

let finibus = "finibus";
finibus = array.filter((i) => {
    return i === finibus;
});
let p9 = finibus.length;
if (p9 ||= (p9 == 2)){
    console.log(`%cfinibus: ${finibus.length}`,'color: #B6FF01');
}

let dictum = "dictum";
dictum = array.filter((i) => {
    return i === dictum;
});
let p10 = dictum.length;
if (p10 ||= (p10 == 2)){
    console.log(`%cdictum: ${dictum.length}`,'color: #FFFF00');
}

let morbi = "morbi";
morbi = array.filter((i) => {
    return i === morbi;
});
let p11 = morbi.length;
if (p11 ||= (p11 == 2)){
    console.log(`%cmorbi: ${morbi.length}`,'color: #FFB600');
}

parrafo = document.getElementById("lorem").textContent.replaceAll("sed", "<b>UNO</b>").replaceAll("vehicula", "<b>DOS</b>").replaceAll("vivamus", "<b>TRES</b>").replaceAll("nam", "<b>CUATRO</b>").replaceAll("eros", "<b>CINCO</b>").replaceAll("vestibulum", "<b>SEIS</b>").replaceAll("quam", "<b>SIETE</b>").replaceAll("sollicitudin", "<b>OCHO</b>").replaceAll("finibus", "<b>NUEVE</b>").replaceAll("dictum", "<b>DIEZ</b>").replaceAll("morbi", "<b>ONCE</b>")

document.getElementById("lorem").innerHTML = parrafo;