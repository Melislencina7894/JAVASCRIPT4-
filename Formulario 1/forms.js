let form = document.querySelector('#form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let name_surname = document.querySelector('#name_surname');
    let dni = document.querySelector('[name="dni"]');
    let selectProv = document.querySelector('[name="selectProvincias"]');
    let selectGen = document.querySelector('input[name=gender]:checked');
    let selectTramite = document.querySelectorAll('input[name=tramite]:checked');
    let salida = [];
    selectTramite.forEach((checkbox) => {
        salida.push(checkbox.value);    
    });

    
    if(/^[a-zA-Z]*$/.test(name_surname.value)){
        console.log("Nombre valido"); 
    }
    else{ console.log("Nombre invalido");}

    if(/^[0-9]{5,12}$/.test(dni.value)){
        console.log("dni valido");
    }else{
        console.log("dni invalido");
    }

    if(selectProv.value != 0){
        console.log("Provincia seleccionada");
    }else{
        console.log("Provincia no seleccionada");
    }
});