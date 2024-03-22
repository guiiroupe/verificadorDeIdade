function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.getElementById('res');
  
  console.log("Valor fornecido pelo usuário: ", fano.value);

  if (isNaN(Number(fano.value)) || Number(fano.value) == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e teste novamente!');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    console.log("Idade calculada: ", idade);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade > 0 && idade < 10) {
        img.setAttribute('src', 'criancamas.jpg');
      } else if (idade < 21) {
        img.setAttribute('src', 'jovemmasculino.jpeg');
      } else if (idade < 50) {
        img.setAttribute('src', 'adultmas.jpg');
      } else {
        img.setAttribute('src', 'idosomas.jpg');
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher';
      if (idade > 0 && idade < 10) {
        img.setAttribute('src', 'criancafeminina.jpeg');
      } else if (idade < 21) {
        img.setAttribute('src', 'jovemfem.jpg');
      } else if (idade < 50) {
        img.setAttribute('src', 'adultafem.jpg');
      } else {
        img.setAttribute('src', 'idosafem.jpg');
      }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}

