//Se o usuário for brasileiro traduzir a página para português Brasil.
//Translate the page if the user is brazilian.
function translate() {
  var userLang = navigator.language || navigator.userLanguage;
  if(userLang == 'pt-BR') {
    $('#nav1').text('Sobre');
    $('#nav2').text('Portfólio');
    $('#nav3').text('Contato');

    $('#aboutBox h1').text('Sobre Paulo Raoni');
    $('#para1').text('Desenvolvedor front-end | Técnico em Programação de Jogos Digitais pela UNICARIOCA-RJ-Brasil e Atualmente cursando Análise e Desenvolvimento de Sistemas na mesma universidade | Estudante de TI em vários cursos na web, incluindo principalmente, o renomado ambiente de aprendizagem Free Code Camp.');
    $('#para2').text('<Caminho do Aprendizado/>');

    $('#portfolioBox h1').text('Portfólio');
    $('#contactBox h1').text('Contato');

    $('label.input1').text('Nome:');
    $('button.send-button').text('Enviar');

    $('.first-foot h3').text('Sobre Esta Página');
    $('.second-foot h3').text('Me encontre no:');

  }
}
//Call translate() in a IIFE.
(function(){
  translate();
})();

//Animation functions.
var $root = $("html, body");
var $list_item = $(".list-item a");

function rootAnimation() {
  $root.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    1500, 'easeOutBounce'    
  );
  return false;
}

$($list_item).on("click", rootAnimation);

var $myphoto = $("#personal-foto");