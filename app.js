function trocarConteudo() {
  var imagem = document.getElementById('imagem');
  var texto = document.getElementById('texto');
  var userInput = document.getElementById('txt').value;

  // Se a imagem estiver visível, oculte-a e mostre o texto
  if (imagem.style.display !== 'none') {
      imagem.style.display = 'none';
      texto.style.display = 'block';
      texto.textContent = userInput;
  } else {
      // Se o texto estiver visível, oculte-o e mostre a imagem
      imagem.style.display = 'block';
      texto.style.display = 'none';
  }
}

function cripitografar() {
  // A letra "e" é convertida para "enter"
  // A letra "i" é convertida para "imes"
  // A letra "a" é convertida para "ai"
  // A letra "o" é convertida para "ober"
  // A letra "u" é convertida para "ufat"
  var texto = document.getElementById('area_texto_input').value;

  var texto_cripitografado = texto.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

  document.getElementById('area_texto_output').value = texto_cripitografado;
  
  
}

function descripitografar() {

  var input = document.getElementById('area_texto_input').value;
  
  var texto_descripitografado = input.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

  document.getElementById('area_texto_output').value = texto_descripitografado;


}


function copiar() {
  var textarea = document.getElementById('area_texto_output').value;

  navigator.clipboard.writeText(textarea)
  console.log(textarea)
  
}