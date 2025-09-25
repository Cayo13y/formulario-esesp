// mask do cpf
const cpfinput = document.getElementById('cpf');

cpfinput.addEventListener('input', function () {
    let value = cpfinput.value;

    value = value.replace(/\D/g, "");

    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpfinput.value = value;
});


//mask do telefone
const contatoInput = document.getElementById('contato');

contatoInput.addEventListener('input', function () {
    let value = contatoInput.value;

    value = value.replace(/\D/g, "");

    if (value.length > 11) {
        value = value.slice(0, 11); 
    }

    if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        value = value.replace(/^(\d{0,2})/, "($1");
    }

    contatoInput.value = value;
});
