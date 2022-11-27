        html = window.document.getElementById('html');
        mobile = window.document.getElementById('mobile');
        node = window.document.getElementById('node');
        js = window.document.getElementById('js');
        designer = window.document.getElementById('designer');
        css = window.document.getElementById('css');
        php = window.document.getElementById('php');


function activar_links(valores){
     
     zone_links = window.document.getElementById('esquerda'); 
     if (valores == 1) {
           zone_links.style.display = 'block'; 
           zone_links.style.marginLeft = '0px';    
     }else if(valores == 0){
               zone_links.style.display = 'none';
     }
}

let mensa = 0;

function profissoes(){
    setInterval("call_back()", 4000); 
}

function call_back(){
    mensa++;    
    conhecimentos(mensa);
    pontos(mensa);

    if (mensa >= 5) {
        mensa = 0;
    }
}
        
    function conhecimentos(mensa){
       let dados = mensa;
       campo_texto = window.document.getElementById('proficao');
       if (dados == 1) {
            campo_texto.innerText = 'Desenvolvedor Back-end';
            campo_texto.style.transition = "1s";
       }else if (dados == 2) {
            campo_texto.innerText = 'Desenvolvedor Front-End';
            campo_texto.style.transition = "1s";
       }else if (dados == 3) {
            campo_texto.innerText = 'Desenvolvedor De Aplicações Mobiles';
            campo_texto.style.transition = "1s";
       }else if (dados == 4){
            campo_texto.innerText = 'Web designer';
            campo_texto.style.transition = "1s";
       }
    }
    function pontos(mensa){
        let dados = mensa;
       welcome = window.document.getElementById('welcome');
       if (dados == 1) {
            numero4 = window.document.getElementById('ponto4');
            numero4.classList.remove('enfase');
            numero1 = window.document.getElementById('ponto1');
            numero1.classList.add('enfase');
            welcome.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
       }else if (dados == 2) {
            numero1 = window.document.getElementById('ponto1');
            numero1.classList.remove('enfase');
            numero2 = window.document.getElementById('ponto2');
            numero2.classList.add('enfase');
            welcome.style.backgroundColor = "red";
       }else if (dados == 3) {
            numero2 = window.document.getElementById('ponto2');
            numero2.classList.remove('enfase');
            numero3 = window.document.getElementById('ponto3');
            numero3.classList.add('enfase');
            welcome.style.backgroundColor = "orangered";
       }else if (dados == 4){
            numero2 = window.document.getElementById('ponto3');
            numero3.classList.remove('enfase');
            numero4 = window.document.getElementById('ponto4');
            numero4.classList.add('enfase');
            welcome.style.backgroundColor = "darkblue";
       }
    } 
function animarSessao(){
     windowTop = window.pageYOffset / 20 ;
     sobre = window.document.getElementById('habilidades');                         
     sobreTop = sobre.offsetHeight * 4 - 40; 
       if (windowTop >= sobreTop) {
          somarValores() 
       }else{
          animarSessaoOff();
       } 
}
    function somarValores(){
          html.style.width = "85%";
          mobile.style.width = "60%"; 
          node.style.width = "40%"; 
          js.style.width = "70%";
          designer.style.width = "70%";
          css.style.width = "80%"; 
          php.style.width = "60%"
     }
     
     function animarSessaoOff(){
          html.style.width = "10%";
          mobile.style.width = "10%"; 
          node.style.width = "10%"; 
          js.style.width = "10%";
          designer.style.width = "10%";
          css.style.width = "10%"; 
          php.style.width = "10%"
     }
