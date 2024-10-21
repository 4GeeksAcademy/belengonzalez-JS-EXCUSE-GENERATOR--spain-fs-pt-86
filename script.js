let who = ['El gato de Lisa', 'El perro de Jimin', 'Mi abuela', 'El cartero'];
let action = ['rompió', 'se comió', 'perdió', 'olvidó entregar'];
let what = ['mi álbum de BTS', 'mi camiseta de EXO', 'mi póster de BLACKPINK', 'mi álbum de Twice'];
let when = ['durante el ensayo.', 'mientras estaba en un concierto.', 'justo antes de la presentación.', 'cuando estaba dormido.'];

function generateExcuse() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];
    let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
    document.getElementById('excuse').innerHTML = excuse;
}

window.onload = generateExcuse;