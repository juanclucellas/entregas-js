console.log("hola, mundi"); 

//let peso = Number(prompt("Escriba su peso en Kg"));
//let altura = Number(prompt("Escriba su altura en METROS"));

//function mostrarIMC(resultado){
    //alert("Tu indice de masa corporal es; " + resultado)
      //  if (resultado <18.)5{
        //alert("Estas delgado")
    //}else if(resultado <=25){
      //  alert("Tu peso es normal")   
   // }else if(resultado <= 30){
  //      alert("Tienes sobrepeso")
  //  }else{ (resultado >=31)
  //      alert("Tienes obesidad")
   // };
   // return resultado
//}
let peso = Number(prompt("Escriba su peso en Kg"));
let altura = Number(prompt("Escriba su altura en METROS"));

function IndicadorIMC (peso, altura){
    return peso/(altura*altura);
}

const Resultado = IndicadorIMC(peso,altura);

if (Resultado <18.5){
    alert ("Tu IMC es: " + Resultado.toFixed(2) + ", Estas delgado")
}else if (Resultado <=25){
    alert ("Tu IMC es: " + Resultado.toFixed(2) + ", Tu peso es normal")
}else if (Resultado <=30){
    alert("Tu IMC es: " + Resultado.toFixed(2) + ", Tienes sobre peso")
}else if (Resultado >=31)
    alert ("Tu ICM es: " + Resultado.toFixed(2) + ", Tienes obesidad")
;

console.log(Resultado)
