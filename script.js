var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var cw = canvas.width;
var ch = canvas.height;

function drawCheckeredPattern(row, col){
var boxWidth = cw/col;
var boxHeight = ch/row;
for (var i = 0; i < col; i++){
  for (var j = 0; j < row; j++){

  if (i%2 != j%2){
  context.fillStyle = 'rgba( 0, 0, 0, 0.5 )';
}
  else {
  context.fillStyle = 'rgba( 255, 255, 255, 0.2 )';
}
  context.fillRect(boxWidth*i, boxHeight*j, boxWidth, boxHeight);
}
}
return;
}

drawCheckeredPattern(8, 8);