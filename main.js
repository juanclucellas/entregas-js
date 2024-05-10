alert ("lista del super")
let compra = new Array();
let pendientes= new Array();
compra = [
    {
    articulo:'Naranjas',estado: false
    }, 
    {
    articulo:'Manzanas', estado:true
    }, 
    {
    articulo:'Peras', estado:false
    }, 
    {
    articulo:'Bnanas', estado: true
    }
];
compra.forEach(function(val){
    if (val.estado) 
    pendientes.push(val.articulo)
});
console.log(pendientes);

// intente que si el usuario cargaba los datos de la lista del super, estaban comprados y si volvia a cargarlos, se false, haciendo de cuenta que ese articulo no estaba dentro de la lista y debia comprarlo.