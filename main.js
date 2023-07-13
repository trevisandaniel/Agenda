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

    //console.log(codigoEmpresa)

    
    let valor = `<table class="table table-striped table-hover">`;

    //inserir os elementos do form na table
    valor += `<tbody>`;
    valor += `<tr>`;
    valor += `<td><button onClick="esconderLinha('linhaEsconder')"><i class="bi bi-chevron-compact-down"></i></button></td>`;
    valor += `<td>${razaoSocial.value}</td>`;
    valor += `<td>${cnpj.value}</td>`;
    valor += `<td>${codigoEmpresa.value}</td>`;
    valor += `<td>${telefone.value}</td>`;
    valor += `<td>${email.value}</td>`;
    valor += `<td>${plantao.value}</td>`;
    valor += '</tr>';
    //a partir daqui será a header da nested table 
    valor += '<tr id="linhaEsconder" style="display: none">';
    valor += `<td colspan="7">`;
    valor += `<table class="table table-striped">`;
    valor += `<thead>`;
    valor += `<tr>`;
    valor += `<th>Nome Fantasia</th>`;
    valor += `<th>Responsável</th>`;
    valor += `<th>Servidor</th>`;
    valor += `<th>Endereço</th>`;
    valor += `<th>Cidade</th>`;
    valor += `<th>UF</th>`;
    valor += `<th>Sped</th>`;
    valor += `<th>IP Acesso Remoto</th>`;
    valor += `</tr>`;
    valor += `</thead>`;
    // a partir daqui os valore dos campos
    valor += `<tbody>`;
    valor += `<tr>`;
    valor += `<td>${nome.value}</td>`;
    valor += `<td>${responsavel.value}</td>`;
    valor += `<td>${sistemaOperacional.value}</td>`;
    valor += `<td>${endereco.value}</td>`;
    valor += `<td>${cidade.value}</td>`;
    valor += `<td>${uf.value}</td>`;
    valor += `<td>${sped.value}</td>`;
    valor += `<td>${ip.value}</td>`;
    valor += `</tr>`;
    valor += `</tbody>`;
    valor += `</table>`;
    valor += `</td>`;
    valor += `</tr>`;
    //fim da nested table
    valor += `</tbody>`;
    valor += `</table>`;
    valor += `</td>`;
    valor += `</tr>`;
    valor += `</tbody>`;
    valor += `</table>`;
    

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



