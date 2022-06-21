const form = document.querySelector('#form');
form.addEventListener('submit',(event) =>{ 
    event.preventDefault();
    sumatoriaPersonas();
});
// Te acordas cuando vimos eso del submit??  es el button q está al final del form.
// Ahí uso el parametro event para hacer andar el PreventDefault(); recordas la funcion de esto no?
// Probé primero con varias funciones, pero me dió pereza y hice todo en uno. iba a hacer así pero al final decidí en una.
//Hago todo ahí, quedó el nombre de Personas pero es mejor q sea sumatoriaTodo.
// el select lo selecciono a través del name.
function sumatoriaPersonas(){
    let suma = 0; // esta variable va a empezar acá y va a terminar en el final del todo. esto es el total. 
    let selectVehiculo = document.querySelector('[name="selectVehiculo"]').value; //aclaro q quiero el value. vamos al HTML para q veas.
    let cantMayores = document.querySelector('#cantMayores').value; 
    let cantMenores = document.querySelector('#cantMenores').value;

    if(selectVehiculo != 0){  //Si es distinto, entonces está seleccionado en algo sería. por q 0 es "Seleccionar Vehiculo"
        if(selectVehiculo === "Auto"){ 
            suma = 2;   
        }
        if(selectVehiculo === "Camioneta"){
            suma = 3;
        }
        if(selectVehiculo === "Otro"){
            suma = 4;
        }
    }
    if(cantMayores > 0 || cantMenores > 0){
        suma += (cantMayores*1.50); //+= es igual a decir como suma = suma + (cantMayores*1.50);
    }
    //suma es un acumulador, empieza de arriba y termina abajo, recorre todo el camino para sacar el total. Por eso hago suma = suma + cant....;
    

    let selectPago = document.querySelector('input[name="pagoElegido"]:checked'); // Acá puse :checked. osea voy a tomar solamente los q esten seleccionados. checked es cuando dejaste seleccionado, esto es el radio button.
    
    //no está dentro de un input
    //voy a todos los input q tengan dicho name.
    switch (selectPago.value) {  
        case "visa1":
        case "master2":
                suma += (suma*10/100); //no te olvides q ese suma empezó arriba y termina abajo. es el total q va a mostrar. osea si o si va a recorrer todo. es el acumulador. mira donde está suma.
            break;
        case "visa2":
        case "master3":
                suma += (suma*25/100);
            break;
        case "visa3":
                suma += (suma*35/100);
            break;
        case "master1":
                suma += (suma*5/100);
            break;
    }

    let selectComida = document.querySelector('[name="selectComida"]').value; //otro select. el select siempre uso el name. y .value para las opciones q tiene el select.
    let inputCantComida = document.querySelector('#cantComida').value; 
    let selectComidaOpcional = document.querySelectorAll('input[name="selectComidaOpcional"]:checked'); 
    //acá tiene checkbox, pueden elegir 1 o más comida a la vez, entonces hice un vector q vaya tomando lo q eligió
    let checkedComidaOpc = []; //vector nuevo vacio.
    selectComidaOpcional.forEach((checkbox) =>{  //acá voy a recorrer los q estén checkeados en el check box, y a los q están checkeado voy guardando el value de cada uno en el vector. ya vamos a ver despues en el navegador.
        checkedComidaOpc.push(checkbox.value); //push para ir agregando al vector q creo en la linea 59
    }); //ya lo vemos en consola así se entiende esta parte.

    if(selectComida != 0){
        if(inputCantComida > 0){
            if(selectComida == 1) suma += (1.5*inputCantComida); //elegis una paty ponele, multiplicas por la cantidad de paty q elige comprar, por eso 1.5 * la cantidad. 
            if(selectComida == 2 || selectComida == 3) suma += (2*inputCantComida);
        }
    }     
    
    // Acá fui recorriendo el vector nuevo q hice arribita, voy a ver q comida tiene seleccionadas. Esto lo vemos en consola y de ahi venimos para acá así se entiende.
    if(checkedComidaOpc.length > 0){
        for(let i = 0; i < checkedComidaOpc.length;i++){
            if(checkedComidaOpc[i] === "Gaseosa") suma += 1;
            else suma += 0.5;
        }        
    }

    let textTotal = document.createElement("p"); //esto es para crear un elemento HTML desde acá. Por q en el html no está este p (parrafo).
    document.body.appendChild(textTotal); //acá digo q agregue el p en el body, osea textTotal tiene un elemento p. ese textTotal lo agrego en el body con el append...
    textTotal.innerHTML = `TOTAL A PAGAR = $${suma}`; 

    console.log(checkedComidaOpc);
}


/*Ejercicio Nro. 40: grupo de opciones y Check
Un autocine que presta servicios en nuestra localidad, desea disponer de una aplicación web sencilla, donde se pueda comercializar las entradas de ingreso como así también la comida que se puede solicitar al ingreso del predio.
Esto significa, que un grupo de personas que llegan en “vehículo propio” ingresan al predio abonando lo siguiente.
$ 2 dólares por vehículo (automóvil)
$ 3 dólares por vehículo (camioneta)
$ 4 dólares por vehículo (otros – ni automóvil- ni camioneta).
Y por cada persona del vehículo se abona $ 1,50 dólares, sabiendo que los menores de ocho años no abonan entrada. Una vez ingresados los datos el cliente puede elegir varias opciones de pago, de las cuales están.
1) Pagando de contado es el precio establecido.
2) Pagando con Tarjeta de Crédito Visa posee un 10% de recargo sobre el total. (de 1 a 3 cuotas)
3) Pagando con Tarjeta de Crédito Visa posee un 25% de recargo sobre el total. (de 4 a 6 cuotas)
4) Pagando con Tarjeta de Crédito Visa posee un 35% de recargo sobre el total. (más de 7 cuotas).
5) Pagando con Tarjeta de Crédito Mastercard posee un 5% de recargo. (de 1 a 3 cuotas)
6) Pagando con Tarjeta de Crédito Mastercard posee un 10% de recargo. (de 3 a 6 cuotas)
7) Pagando con Tarjeta de Crédito Mastercard posee un 25% de recargo (más de 7 cuotas).
Con los alimentos que se solicitan (una vez elaborados) se llevan al vehículo los precios son los siguientes.
1) Hamburguesa completa – Paty – 1,50 dólares
2) Lomito completo – 2 dólares
3) Hamburguesa completa – Zapping – 2 dólares
Complementos (alternativos) puede elegir ambos.:
Si agrega al pedido gaseosa (1,00 dólar)
Si agrega combo de papas (0,50 dólar)*/