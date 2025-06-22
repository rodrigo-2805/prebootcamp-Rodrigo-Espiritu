 let edad;
 
 while (true) {
   edad = prompt("Ingresa tu edad:");
 
   edad = parseInt(edad, 10);
 
   if (!isNaN(edad)) {
     break; 
   }
 
   alert("Eso no es un número válido. Inténtalo de nuevo.");
 }

 if (edad >= 18) {
   alert("Eres mayor de edad. Si tienes edad para conducir. Bienvenido.");
 } else {
   alert("Eres menor de edad, no cuentas con permiso de conducir.");
 }