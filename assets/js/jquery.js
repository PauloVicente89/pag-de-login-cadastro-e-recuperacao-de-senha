$(document).ready(function(){
    $("#cadastro").click(function(){
        $(".box").hide('3000');
        $("#cadastrar").show('3000');
    });
})

$(document).ready(function(){
    $("#back").click(function(){
        $("#cadastrar").hide('3000');
        $(".box").show('3000');
    });
})

$(document).ready(function(){
    $("#recuperar").click(function(){
        $(".box").hide('3000');
        $("#recuperacao").show('5000');
    });
});

$(document).ready(function(){
    $("#envnov").click(function(){
        alert('O código foi novamente enviado ao seu email');
    });
});

$(document).ready(function(){
    $("#backr").click(function(){
        $("#recuperacao").hide('3000');
        $(".box").show('3000');
    });
});