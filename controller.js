'use restrict'; //modo restrito

//limpar formulario
const limparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}
//verifica se CEP é valido
const eNumero = (numero) => /^[0,9]+$/.test(numero);