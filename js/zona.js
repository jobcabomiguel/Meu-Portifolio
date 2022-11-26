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
       
       if (dados == 1) {
            numero4 = window.document.getElementById('ponto4');
            numero4.classList.remove('enfase');
            numero1 = window.document.getElementById('ponto1');
            numero1.classList.add('enfase');
       }else if (dados == 2) {
            numero1 = window.document.getElementById('ponto1');
            numero1.classList.remove('enfase');
            numero2 = window.document.getElementById('ponto2');
            numero2.classList.add('enfase');
       }else if (dados == 3) {
            numero2 = window.document.getElementById('ponto2');
            numero2.classList.remove('enfase');
            numero3 = window.document.getElementById('ponto3');
            numero3.classList.add('enfase');
       }else if (dados == 4){
            numero2 = window.document.getElementById('ponto3');
            numero3.classList.remove('enfase');
            numero4 = window.document.getElementById('ponto4');
            numero4.classList.add('enfase');
       }
    }
    
