



function validation(){
let salaire = document.getElementById("salaire").value;
isNaN(salaire);
console.log(salaire)
let verif_salaire = /^[1-9][0-9]{3,6}$/;






while(!verif_salaire.test(salaire)){
    
    if (salaire == salaire) {
        document.getElementById("salaire").style.color = "green";
    }else{
    document.getElementById("salaire").style.color = "red";
}

    salaire = prompt('Veuillez entrer un salaire valide entre 4 et 6 chiffres')
    document.getElementById("salaire").value = salaire;
    document.getElementById("salaire").style.color = "green";
}


let impots1 = document.getElementById("impots");
if(impots1.checked == true) {

    salaire = salaire - (salaire*18/100);
  
}

let assu1 = document.getElementById("assurance");
if(assu1.checked == true) {

    salaire = salaire - (salaire*7/100);
   
}

let pens1 = document.getElementById("pension");
if(pens1.checked == true) {

    salaire = salaire - (salaire*5/100);
   
}

let bonus1 = document.getElementById("bonus");
if(bonus1.checked == true) {

    salaire = parseInt(salaire) + 100;
    console.log (salaire);
}

let alloc1 = document.getElementById("allocation");
if(alloc1.checked == true) {

    salaire = parseInt(salaire) + 150;
   
}


let fem = document.getElementById("femme");
if(fem.checked == true) {

    salaire =  parseInt(salaire) + (salaire*2/100);
   
}


let trois = document.getElementById("trois");
if(trois.checked == true) {

    salaire = parseInt(salaire) + (salaire*1/100);
   
}

let quatre = document.getElementById("quatre");
if(quatre.checked == true) {

    salaire = parseInt(salaire) + (salaire*2/100);
   
}

if (salaire ===  document.getElementById("salaire").value) {
    

document.getElementById("affichage").innerHTML = "Votre salaire net s'éleve à " + parseFloat(salaire).toFixed(2) + " euros "+
"choissez au moins 1 option";
document.getElementById("affichage").style.color = "red";
console.log (salaire);

//console.log (impots1);
//console.log (assu1);
}else{
    document.getElementById("affichage").innerHTML = "Votre salaire net s'éleve à " + parseFloat(salaire).toFixed(2) + " euros";
    document.getElementById("affichage").style.color = "green";


}

}

// VERIFICATION ( utiliser le regex ) ok
// pas de 0  au debut de 4 à 6 digits  ok 
// afficher ok
// calculer ok
// mise en forme ok
// faire grille ok 
// gérer les erreurs (couleurs ) + parrametères requis
