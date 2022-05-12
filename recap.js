let strfrm1 = lireCookie("frm1");
let strfrm2 = lireCookie("frm2");
let frm1 = JSON.parse(strfrm1);
let frm2 = JSON.parse(strfrm2);

let str = "";
str += "<fieldset>";
for (let key in frm1) {
    if (Object.hasOwnProperty.call(frm1, key)) {
       str += "<strong>" + key + "</strong> : " + frm1[key] + "<br>";
    }
}
str += "</fieldset>";
str += "<fieldset>";
for (let key in frm2) {
    if (Object.hasOwnProperty.call(frm2, key)) {
        if(key === "passetemps"){
            let ssStr = "[ ";
            for (const sskey in frm2[key]) {
                if (Object.hasOwnProperty.call(frm2[key], sskey)) {
                    ssStr += (frm2[key][sskey])? "("+sskey+") ": "";                
                }                
            }
            ssStr += " ]";
            str += "<strong>" + key + "</strong> : " + ssStr + "<br>"; 
        } else if(key === "langages"){
            let ssStr = "[ ";
            for (const sskey in frm2[key]) {
                if (Object.hasOwnProperty.call(frm2[key], sskey)) {
                    ssStr += (frm2[key][sskey] != 0 ) ? "( "+sskey+" = "+frm2[key][sskey] +" ) ": "";                
                }                
            }
            ssStr += " ]";
            str += "<strong>" + key + "</strong> : " + ssStr + "<br>";         
        } else {
            str += "<strong>" + key + "</strong> : " + frm2[key] + "<br>";
        }
        
    }
}
str += "</fieldset>";


function modifData(){
    window.history.back();
}
function sendMyJSON(){
    window.location.href = "inscription.html";
}