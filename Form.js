function validarUsuario(){
       var residencial=document.getElementsByName("residencial").values
       var industrial=document.getElementsByName("industrial").values
       if (validarUsuario=residencial=industrial){
              return true;
       }else{
              return false;
       }
       
}

function validarzona() {

    var zona=document.getElementsByName("1").values
    var zona=document.getElementsByName("2").values
    var zona=document.getElementsByName("3").values
    var zona=document.getElementsByName("4").values
    

    if (zona==""){
           alert("la zona que eligio es incorrecta ")
           document.fvalida.zona.focus()
           return 0;
       }else{
           if (zona!=zona){
                  alert("La eleccion no es correcta")
                  document.fvalida.zona.focus()
                  return 0;
           }
       }
}     
function CantdekWk() {
       CantdekWk = document.getElementById("CantdeKWk").value
       if(CantdekWk!=0) {
              alert("Ingrese KWk valido")
       }else{
              if (CantdekWk > 0){
                     return calculo;
              }
       }       

}

function calculo(){
       //Total en $ = Costo de servicio + (Cantidad de kWh * Costo según zona de domicilio) * (1 + IVA según Tipo de Usuario)
var tipodeusuario = document.getElementById("Tipodeusuario").value  
var zona = document.getElementById("zona").value
var tipodeusuario=residencial(0.21)
var tipodeusuario=industrial(0.27)

calculo= tipodeusuario + CantdekWk*zona*(1+ tipodeusuario)
return  calculo;

}
