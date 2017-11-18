//Se o usuário for brasileiro traduzir a página para português Brasil.
//Translate the page if the user is brazilian.
function translate() {
  var userLang = navigator.language || navigator.userLanguage;
  if(userLang == 'pt-BR') {
    $('#nav1').text('Sobre');
    $('#nav2').text('Portfólio');
    $('#nav3').text('Autoria');
    $('.navigation-social h3').text('Redes Sociais');

    $('#aboutBox h1').text('Sobre Paulo Raoni');
    $('#para1').text('Desenvolvedor Front-End | Técnico em Programação de Jogos Digitais pela UNICARIOCA-RJ-Brasil e Atualmente cursando Análise e Desenvolvimento de Sistemas na mesma universidade | Estudante de TI em vários cursos na web, incluindo principalmente, o renomado ambiente de aprendizagem Free Code Camp.');
    $('#para2').text('<Caminho do Aprendizado/>');

    $('#portfolioBox h1').text('Portfólio');
    $('#contactBox h1').text('Contato');

    $('label.input1').text('Nome:');
    $('button.send-button').text('Enviar');

    $('.footer h3').text('Sobre Esta Página');
    

  }
}
//Call translate() in a IIFE.
(function(){
  translate();
})();

//Animation functions.
var $root = $("html, body");
var $list_item = $(".list-item a");
var $myphoto = $("#personal-foto");

function rootAnimation() {
  $root.animate({
    scrollTop: $($.attr(this, "href")).offset().top
  },
                1500, 'easeOutBounce'    
               );
  return false;
}
$($list_item).on("click", rootAnimation);


// Hide Header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').hide(100);
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').show(100);
        }
    }
    
    lastScrollTop = st;
}

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

