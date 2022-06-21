let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let usuario = document.querySelector('#usuario');
    let password = document.querySelector('#password');

    if (usuario.value == '' || usuario.value.includes('@') == false){
        alert('El nombre de usuario es obligatorio y el arroba');
    } else if (password.value == ''){
        alert('La clave es obligatoria');
    }else {
        form.submit();
    }

})


