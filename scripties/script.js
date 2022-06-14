function esconder(){
    var lista = document.querySelector('#navbar-items ul');
    lista.setAttribute('hidden','true');
}


function mostrar(){
    var lista = document.querySelector('#navbar-items ul');
    lista.removeAttribute('hidden');
}