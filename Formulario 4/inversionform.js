function insertTable(form_data){ //acá le paso el parametro q es un objeto creado del FormData.
    let table = document.getElementById('table'); 

    let posicionIndex = table.insertRow(-1); //posicion de la nueva fila. 
    let insertCell = posicionIndex.insertCell(0); //acá digo donde va la columna nueva. 
    insertCell.textContent = 1; //acá usamos textContent para ponerle a la primera columna el valor 1. Y acá el valor de esa columna. 
    insertCell = posicionIndex.insertCell(1); // osea en la fila q estoy voy a la columna 1. osea va a ver primero en q fila estoy actualmente. y de ahí el insertCell(1). osea ultima fila columna 2 estoy diciendo acá.
    insertCell.textContent = ((10*form_data.get('inputCap'))/100); //modificamos el valor de la segunda columna. el 10 por ciento del capital q ingresan.

    posicionIndex = table.insertRow(-1); 
    insertCell = posicionIndex.insertCell(0);
    insertCell.textContent = 2;
    insertCell = posicionIndex.insertCell(1);
    insertCell.textContent = ((12*form_data.get('inputCap'))/100);
    
    posicionIndex = table.insertRow(-1);
    insertCell = posicionIndex.insertCell(0);
    insertCell.textContent = 3;
    insertCell = posicionIndex.insertCell(1);
    insertCell.textContent = ((12*form_data.get('inputCap'))/100);
    
    posicionIndex = table.insertRow(-1);
    insertCell = posicionIndex.insertCell(0);
    insertCell.textContent = 4;
    insertCell = posicionIndex.insertCell(1);
    insertCell.textContent = ((14*form_data.get('inputCap'))/100);
    
    posicionIndex = table.insertRow(-1);
    insertCell = posicionIndex.insertCell(0);
    insertCell.textContent = 5;
    insertCell = posicionIndex.insertCell(1);
    insertCell.textContent = ((14*form_data.get('inputCap'))/100);
    
    posicionIndex = table.insertRow(-1);
    insertCell = posicionIndex.insertCell(0);
    insertCell.textContent = 6;
    insertCell = posicionIndex.insertCell(1);
    insertCell.textContent = ((16*form_data.get('inputCap'))/100);    
}

function total(form_data){
    let acumulador = 0;
    for(let cuotas = 1; cuotas <= 6; cuotas++){ 
        if(cuotas === 1) acumulador += ((10*form_data.get('inputCap'))/100); 
        if(cuotas === 2 || cuotas === 3) acumulador += ((12*form_data.get('inputCap'))/100); 
        if(cuotas === 4 || cuotas === 5) acumulador += ((14*form_data.get('inputCap'))/100);
        if(cuotas === 6) acumulador += ((16*form_data.get('inputCap'))/100);
    } 

    if(form_data.get('inputCap') > 2000000){
        acumulador += (7*form_data.get('inputCap')/100);
     
        document.getElementById('total').innerHTML = `Incremento de 7 por ciento activado por que el capital supera los 2 M. El total de ganancia es =${acumulador}.
        La ganancia con el capital invertido el total es = ${acumulador + parseInt(form_data.get('inputCap'))}`; 
    }else{
        document.getElementById('total').innerHTML = `Incremento de 7 por ciento no activado. La ganancia total es = ${acumulador + parseInt(form_data.get('inputCap'))}`;
    }
}
    
    const form = document.querySelector('#form'); //acá tomamos el form entero.
    form.addEventListener('submit', function(event) {  
        event.preventDefault();
        // acá las llamo desde una función flecha a ambas funciones
        let formData = new FormData(form); //Acá lo metemos dentro del constructor del objeto FormData
        insertTable(formData); 
        total(formData); 
    })
    
    
    
    /*
    for(let cuotas = 1; cuotas <= 6; cuotas++){
        switch (cuotas) {
            case 1:
                acumulador = acumulador + ((10*form_data.get('inputCap'))/100);
                    break;
            case 2 && 3:
                    acumulador = acumulador + ((12*form_data.get('inputCap'))/100);
                    break;
            case 4 && 5:
                    acumulador = acumulador + ((14*form_data.get('inputCap'))/100);
                    break;
            case 6:
                    acumulador = acumulador + ((16*form_data.get('inputCap'))/100);
                    break;
            default:
                break;
        }    
    }
*/

/*
    for(let cuotas = 1; cuotas <= 6; cuotas++){
            if(form_data.get('inputCap') > 2000000) acumulador = acumulador + ((7*form_data.get('inputCap'))/100);
            if(cuotas === 1)
                 acumulador = acumulador + ((10*form_data.get('inputCap'))/100);
            if(cuotas === 2 || cuotas === 3) 
                acumulador = acumulador + ((12*form_data.get('inputCap'))/100);
            if(cuotas === 4 || cuotas === 5)
                acumulador = acumulador + ((14*form_data.get('inputCap'))/100);
            if(cuotas === 6)    
                acumulador = acumulador + ((16*form_data.get('inputCap'))/100);
            }    
*/