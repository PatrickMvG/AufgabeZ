const schere = document.querySelector(".schere-btn")
const stein = document.querySelector(".stein-btn")
const papier = document.querySelector(".papier-btn")
const gokuPunkte = document.querySelector(".goku-punkte")
const vegetaPunkte = document.querySelector(".vegeta-punkte")
const reset = document.querySelector(".reset-btn")
const gokutxt = document.querySelector(".gokutxt")
const result = document.querySelector(".result")
const vegetatxt = document.querySelector(".vegetatxt")


let g = 0
let v = 0

reset.addEventListener("click", (event) =>{
    event.stopPropagation()
    vegetaPunkte.textContent = v = 0
    gokuPunkte.textContent = g = 0
    gokutxt.textContent = ".............."
    result.textContent = "← ....... →"
    vegetatxt.textContent = ".............."
    vegetaPunkte.style.backgroundColor = ""
    gokuPunkte.style.backgroundColor = ""

})

schere.addEventListener("click", (event) =>{
    event.stopPropagation()
    punkteZaehlenSchere(zufall())
    backgroundPunkte(v, g)
})

stein.addEventListener("click", (event) =>{
    event.stopPropagation()
    punkteZaehlenStein(zufall())
    backgroundPunkte(v, g)
})

papier.addEventListener("click", (event) =>{
    event.stopPropagation()
    punkteZaehlenPapier(zufall())
    backgroundPunkte(v, g)
})

function zufall() {
    let zufall = Math.floor(Math.random() * 3);
    return zufall
}

function backgroundPunkte(v, g){
    if(g > v){
        return gokuPunkte.style.backgroundColor = "rgba(158, 252, 168, 0.578)",
        vegetaPunkte.style.backgroundColor = "rgba(251, 116, 116, 0.578)"
    }else if(g === v){
        return gokuPunkte.style.backgroundColor = "transparent",
        vegetaPunkte.style.backgroundColor = "transparent"
    }else{
        return gokuPunkte.style.backgroundColor = "rgba(251, 116, 116, 0.578)",
        vegetaPunkte.style.backgroundColor = "rgba(158, 252, 168, 0.578)"
    }
}


function punkteZaehlenSchere(zahl){
    if (zahl == 0) {
        randomGokuAntwortEven(), randomVegetaAntwortEven(),punktFuerEven()
    }else if(zahl == 1){
        return vegetaPunkte.textContent = ++v, punktFuerVegeta(), randomGokuAntwortLoose(), randomVegetaAntwortWin()
    }else{
        return gokuPunkte.textContent = ++g,punktFuerGoku(), randomGokuAntwortWin(), randomVegetaAntwortLoose()
    }
}
function punkteZaehlenStein(zahl){
    if (zahl == 0) {
        return gokuPunkte.textContent = ++g, punktFuerGoku(), randomGokuAntwortWin(), randomVegetaAntwortLoose()
    }else if(zahl == 1){
        randomGokuAntwortEven(), randomVegetaAntwortEven(),punktFuerEven()
    }else{
        return vegetaPunkte.textContent = ++v, punktFuerVegeta(), randomGokuAntwortLoose(), randomVegetaAntwortWin()
    }
}
function punkteZaehlenPapier(zahl){
    if (zahl == 0) {
        return vegetaPunkte.textContent = ++v, punktFuerVegeta(), randomGokuAntwortLoose(), randomVegetaAntwortWin()
    }else if(zahl == 1){
        return gokuPunkte.textContent = ++g, punktFuerGoku(), randomGokuAntwortWin(), randomVegetaAntwortLoose()
    }else{
        randomGokuAntwortEven(), randomVegetaAntwortEven(),punktFuerEven()
    } 
}


function randomGokuAntwortWin(){
    let zufall = Math.floor(Math.random() * 2);
    if(zufall == 0){
        return gokutxt.textContent = "Das war easy."
    }else{
        return gokutxt.textContent = "Du Lappen!"
    }
}
function randomGokuAntwortEven(){
    return gokutxt.textContent = "Gut gespielt"
}

function randomGokuAntwortLoose(){
    let zufall = Math.floor(Math.random() * 2);
    if(zufall == 0){
        return gokutxt.textContent = "Du schummelst"
    }else{
        return gokutxt.textContent = "Das kann nicht sein."
    }
}


function randomVegetaAntwortWin(){
    let zufall = Math.floor(Math.random() * 2);
    if(zufall == 0){
        return vegetatxt.textContent = "Das war easy."
    }else{
        return vegetatxt.textContent = "Du Lappen!"
    }
}
function randomVegetaAntwortEven(){
    return vegetatxt.textContent = "Gut gespielt"
}

function randomVegetaAntwortLoose(){
    let zufall = Math.floor(Math.random() * 2);
    if(zufall == 0){
        return vegetatxt.textContent = "Du schummelst"
    }else{
        return vegetatxt.textContent = "Das kann nicht sein."
    }
}

function punktFuerGoku(){
    return result.textContent = "← Goku"
}
function punktFuerEven(){
    return result.textContent = "Unentschieden"
}
function punktFuerVegeta(){
    return result.textContent = "Vegete →"
}