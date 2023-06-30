//
const main = document.getElementById('main');
let linhas = '';
main.addEventListener('submit', function(e){
    e.preventDefault();

    //pegar os elementos do formulário pelo id
    const razaoSocial = document.getElementById('razaoSocial');
    const nome = document.getElementById('nomeFantasia');
    const cnpj = document.getElementById('cnpj');
    //select start
    const codigoEmpresa = document.getElementById('codigoEmpresa');
    const sistemaOperacional = document.getElementById('sistemaOperacional');
    const plantao = document.getElementById('plantao');
    const sped = document.getElementById('sped');
    //select end
    const endereco = document.getElementById('endereco');
    const responsavel = document.getElementById('responsavel');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('uf');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');
    const ip = document.getElementById('ipRemoto');

    console.log(codigoEmpresa)

    //inserir os elementos do form na table
    let valor = '<tr>';
    valor += `<td><button onClick="esconderLinha('linhaEsconder')"><i class="bi bi-chevron-compact-down"></i></button></td>`;
    valor += `<th>${razaoSocial.value}</th>`;
    valor += `<th>${cnpj.value}</th>`;
    valor += `<th>${codigoEmpresa.value}</th>`;
    valor += `<th>${telefone.value}</th>`;
    valor += `<th>${email.value}</th>`;
    valor += `<th>${plantao.value}</th>`;
    valor += '</tr>';
    
    linhas += valor;

    const agenda = document.querySelector('tbody');
    agenda.innerHTML = linhas;

})

//expandir ou retrair elementos da table
function esconderLinha(idDaLinha){
    $('#'+ idDaLinha).toggle();
}

    function esconderLinha2(idDaLinha){
    $('#linhaEsconder2').toggle();
}

//jquery expandir/retrair formulário
$(document).ready(function(){
    $('.title__container-btn').click(function(){
        $('.form').slideToggle();
    })

    $('.cancel').click(function(){
        $('.form').slideToggle();
    })
})



