
const monparagraphe = document.querySelector(".choucroute")
const monbouton = document.querySelector(".monbouton")
const champstexte = document.querySelector(".champsdetexte")



monbouton.addEventListener('click',()=>{
    let tableau = champstexte.value.split(" ")
    if (tableau.includes('quiche')) {alert("ERROR on n'aime pas les quiches")}    else { monparagraphe.innerHTML +=  ("<p>" + champstexte.value + "</p>")
        champstexte.value=""}


})

