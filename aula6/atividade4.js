document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const inputString = document.getElementById('inputString').value;
  const numeroDeVogais = contarVogais(inputString);
  
  document.getElementById('resultado').textContent = `O número de vogais em '${inputString}' é: ${numeroDeVogais}`;
});

function contarVogais(string) {
  const vogais = "aeiouAEIOU";
  let contador = 0;
  
  for (let caractere of string) {
      if (vogais.includes(caractere)) {
          contador += 1;
      }
  }
  
  return contador;
}