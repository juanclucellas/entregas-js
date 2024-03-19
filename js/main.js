console.log("hola, mundi"); 

let peso = Number(prompt("Escriba su peso en Kg"));
let altura = Number(prompt("Escriba su altura en METROS"));
let resultado = peso/altura 
let resultado1 = resultado/altura

if (resultado1 <18.5){
    alert("Estas bajo de peso")   
}else if(resultado1 <=25){
    alert("Peso normal")   
}else if(resultado1 <= 30){
    alert("Tienes sobrepeso")
}else{ (resultado1 >=31)
    alert("Obeso")
};

console.log(resultado1)

