//
$(document).ready(function(){
    $('.title__container-btn').click(function(){
        $('.form').slideToggle();
    })

    $('.cancel').click(function(){
        $('.form').slideToggle();
    })

    
})

function esconderLinha(idDaLinha){
    $('#'+ idDaLinha).toggle();
}

function esconderLinha2(idDaLinha){
    $('#linhaEsconder2').toggle();
}