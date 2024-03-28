let listaDeNumeroSorteados = [];
let numeroLimite =10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', { rate: 1.0 }); 
}

function exibirMensagemInicial(){
  exibirTexto('h1','Numero secreto');
  exibirTexto('p','Escolha um numero de 1 a 10');
}   

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
      exibirTexto('h1','Você Acertou!!');
      let palavraTentativa = tentativas > 1? 'tentativas':'tentativa';
      let mansagemTentativas =`Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
      exibirTexto('p', mansagemTentativas );
      document.getElementById('reiniciar').removeAttribute('disabled');

    }else if(chute > numeroSecreto){
      exibirTexto('p','numero secreto é menor!');

    }else{
      exibirTexto('p','numero secreto é maior!');
    }
    
    tentativas++;
    limpaCampo();  
}


function numeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * 10 + 1);
  let quantidadeDeNumeroNaLista = listaDeNumeroSorteados.length;

  if(quantidadeDeNumeroNaLista == numeroLimite){
    listaDeNumeroSorteados = [];
  }


  if(listaDeNumeroSorteados.includes(numeroEscolhido)){
    return numeroAleatorio();
  }else{
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
  }
}

function limpaCampo(){
   chute = document.querySelector('input');
   chute.value = ''; 
}

function reiniciarJogo(){
  numeroSecreto = numeroAleatorio();
  limpaCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true);
}

