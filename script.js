var audio = document.getElementById('audio');
var count = 0;
audio.play();
function nextPage() {
  var imagen = document.getElementById('gif-img');
  imagen.src = './assets/images/gif5.gif'; 
}

function moveButton() {
  var imagen = document.getElementById('gif-img');
  var noSpan = document.getElementById('no-span');
  
  count++;
  if(count > 30){
    imagen.src = './assets/images/gif4.gif'; 
    noSpan.innerText = 'DEJA DE BUSCAR EL NO!';
  }
  else if (count > 15){
    imagen.src = './assets/images/gif3.gif';
    noSpan.innerText = 'NO?! :(';
  }
  else{
    imagen.src = './assets/images/gif2.gif'; 
    noSpan.innerText = 'NO?';
  }
  var button = document.getElementById('btn-no');
  var x = Math.random() * (window.innerWidth - button.offsetWidth);
  var y = Math.random() * (window.innerHeight - button.offsetHeight);

  x = Math.max(
    0,
    Math.min(x, window.innerWidth - button.offsetWidth)
  );
  y = Math.max(
    0,
    Math.min(y, window.innerHeight - button.offsetHeight)
  );

  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}