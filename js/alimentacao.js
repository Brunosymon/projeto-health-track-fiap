$(document).ready(function () {
    console.log("document is ready");
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
});
window.onload = function () {
    console.log("window is loaded");
};

/*funções da tabela*/

$(function () {
    $("td").dblclick(function () {
        var conteudoOriginal = $(this).text();
         
        $(this).addClass("celulaEmEdicao");
        $(this).html("<input type='text' value='" + conteudoOriginal + "' />");
        $(this).children().first().focus();
 
        $(this).children().first().keypress(function (e) {
            if (e.which == 13) {
                var novoConteudo = $(this).val();
                $(this).parent().text(novoConteudo);
                $(this).parent().removeClass("celulaEmEdicao");
            }
        });
         
    $(this).children().first().blur(function(){
        $(this).parent().text(conteudoOriginal);
        $(this).parent().removeClass("celulaEmEdicao");
    });
    });
});