var match = false;
var newMove = true;
var firstImage = '';
var secondImage = '';
var number = 'none';
var turn = 0;
var pairs = 0;

function  fill() {
  var string = '';
  var container = document.getElementById('container');
  var images = ["CB","CG","CO","CP","CR","CY","EB","EG","EO","EP","ER","EY","FB","FG","FO","FP","FR","FY","JB","JG","JO","JP","JR","JY","OB","OG","OO","OP","OR","OY","TB","TG","TO","TP","TR","TY"];
  images = shuffle(images);

  for (var i = 1; i <= 36; i++) {
      string +=  '<div class="cards" id="card'+i+'">';
      string +=  '<div class="front">';
      string +=   '<img onmouseover="checkBoard()" onclick="flip(this.id)" id="front'+i+'" src="images/IB.png">';
      string +=  '</div>';
      string +=  '<div class="back">';
      string +=   '<img id="back'+i+'" src="images/'+images[i-1]+'.png">';
      string +=  '</div>';
      string += '</div>';    
  }
  container.innerHTML = string;
}

function flip(clicked_id){
  number = clicked_id.substring(5);
  var imageId = 'back'+number;
  var path = document.getElementById(imageId).src;
  var length = path.length;
  var animal = path.charAt(length-6);
  var color = path.charAt(length-5);
  var coloredAnimal = animal + color;

  if (newMove) {
    firstImage = coloredAnimal;
    newMove = false;
  }else{
    secondImage = coloredAnimal;
    newMove = true;
    pairs++;
  }
  nextTurn();
  $("#card"+number).flip(true);
  if (pairs == 18) {
    checkMatch();
    if (match){
    alert("¡¡¡FELICIDADES HAS CONSEGUIDO ORGANIZAR EL DESASTRE DE LA GRANJA!!!");
    }else{
      alert("BUEN INTENTO, PERO NO ES LA SOLUCIÓN");
    }
    pairs = 0;
    unflip();
  }
}

function checkBoard(){
  if ((number != 'none')&&(newMove)) {
    checkMatch();
    newMove = true;
    if (!match) { 
      unflip();
      pairs = 0;
      number = 'none';
    }
    match = false;
  }
}

function checkMatch(){
  if(firstImage.charAt(0) == secondImage.charAt(0)){
    match = true;
  }
  if(firstImage.charAt(1) == secondImage.charAt(1)){
    match = true;
  }
}

function unflip(){ 
  $(".cards").flip(false); 
}

function nextTurn(){
  turn++;
  document.getElementById("turn").innerHTML = turn;
}

function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
