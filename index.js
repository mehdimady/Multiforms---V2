// objets pour stocker les datas des formulaires
let frm1 = {
    "nom" : "", "prenom" : "", "lieu_naissance" : "", "date_naissance" : "", "radiosSexe" : "",
    "radiosMarital" : "", "addr1" : "", "addr2" : "", "ville" : "", "pays" : "", "cpostal" : "",
    "tel" : "", "email" : ""
}
let frm2 = {
    "formation" : "", "diplome" : "", "datediplome" : "",    
    "passetemps" : {"dessin":"", "sport":"", "voyages":"", "lecture":"", "musique":"" },
    "langages": {"html":"", "css":"", "js":"", "sql":"", "php":"" }
}

// init

let btnNext = document.getElementById('btnNext');
let btnPrev = document.getElementById('btnPrev');
let btnSubmit = document.getElementById('btnSubmit');

let allforms = document.getElementsByClassName("myform-page");

let myform_page=0;
afficheForm(myform_page);

function afficheForm(numForm){  // numForm est soit 0 soit 1
    allforms[numForm].style.display="block";
    allforms[(numForm+1) % 2].style.display="none"; 
}
addEventtoLangages();

btnNext.addEventListener("click",function (event){
    let xVal = document.forms[0].checkValidity();
    event.preventDefault();
    if( xVal ){
        myform_page++;
        afficheForm(myform_page);
    } else {        
        alert("Merci de valider tous les champs !");
        document.forms[0].reportValidity();
    }

});
btnPrev.addEventListener("click",function(event){
    let xVal = document.forms[1].checkValidity();
    event.preventDefault();
    if ( xVal && validPasseTemps() ){        
        myform_page--;
        afficheForm(myform_page);
    } else {        
        alert("Merci de valider tous les champs !");
        document.forms[1].reportValidity();
    }
});

function saveDataInObject(){
    let myFrm;
    myFrm = document.forms[0];
    frm1["nom"] = myFrm["nom"].value;
    frm1["prenom"] = myFrm["prenom"].value;
    frm1["lieu_naissance"] = myFrm["lieu_naissance"].value;
    frm1["date_naissance"] = myFrm["date_naissance"].value;
    frm1["radiosSexe"] = myFrm["radiosSexe"].value;
    frm1["radiosMarital"] = myFrm["radiosMarital"].value;
    frm1["addr1"] = myFrm["addr1"].value;
    frm1["addr2"] = myFrm["addr2"].value;
    frm1["ville"] = myFrm["ville"].value;
    frm1["pays"] = myFrm["pays"].value;
    frm1["cpostal"] = myFrm["cpostal"].value;
    frm1["tel"] = myFrm["tel"].value;
    frm1["email"] = myFrm["email"].value; 
    
    myFrm = document.forms[1];
    frm2["formation"] = myFrm["formation"].value;
    frm2["diplome"] = myFrm["diplome"].value;
    frm2["datediplome"] = myFrm["datediplome"].value;
    frm2["passetemps"]["dessin"] = myFrm["Dessin"].checked;
    frm2["passetemps"]["sport"] = myFrm["Sport"].checked;
    frm2["passetemps"]["voyages"] = myFrm["Voyages"].checked;
    frm2["passetemps"]["lecture"] = myFrm["Lecture"].checked;
    frm2["passetemps"]["musique"] = myFrm["Musique"].checked;
    frm2["langages"]["html"]=myFrm["html-slider"].value;
    frm2["langages"]["css"]=myFrm["css-slider"].value;
    frm2["langages"]["js"]=myFrm["js-slider"].value;
    frm2["langages"]["sql"]=myFrm["sql-slider"].value;
    frm2["langages"]["php"]=myFrm["php-slider"].value;
}

btnSubmit.addEventListener("click",function(event){

    let xVal = document.forms[1].checkValidity();
    event.preventDefault();
    if ( xVal && validPasseTemps() ){
        saveDataInObject();
        creerCookie("frm1", JSON.stringify(frm1), 1);
        creerCookie("frm2", JSON.stringify(frm2), 1);
        window.location.href="./recap.html"
    }
});

function validPasseTemps(){

    let myFrm = document.forms[1]
    let sel = 0;
    
    if ( myFrm["Dessin"].checked ) sel ++;
    if ( myFrm["Sport"].checked ) sel ++;
    if ( myFrm["Voyages"].checked ) sel ++;
    if ( myFrm["Lecture"].checked ) sel ++;
    if ( myFrm["Musique"].checked ) sel ++;
    
    if ( sel > 3) {
        alert("Vous devez choisir au maximum 3 passes temps !!");
        return false;
    } else 
        return true;
}


function addEventtoLangages(){
    for(let i=0; i<5; i++){
        let chk = document.getElementById("checkboxes-2"+i);
        let sldr = document.getElementById("slider-2"+i);
        let valueSldr = document.querySelector(".slider-value2"+i);
        valueSldr.innerHTML = sldr.value;
        chk.addEventListener("click", function(){
            if (this.checked === false){
                sldr.value=0;
            } else if (this.checked === true && sldr.value == 0){
                sldr.value = 1;
            }
            valueSldr.innerHTML = sldr.value;
        })
        sldr.addEventListener("click",function(){
            if ( this.value > 0 ) {
                chk.checked = true;
            } else {
                chk.checked = false;
            }
            valueSldr.innerHTML = sldr.value;
        });
    }
}