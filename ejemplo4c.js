function cambiarImg() {
  var imagen = document.getElementById("MiImagen");
  if (imagen.src.match("2")) {
    imagen.src = "puente1.jpeg";
  } else {
    imagen.src = "puente2.jpeg";
  }
}
var img_width = 300;
function ampliarImagen() {
  img_width += 100;
  var imagen = document.getElementById("MiImagen");
  imagen.width = img_width;
}
function reducirImagen() {
  img_width -= 100;
  var imagen = document.getElementById("MiImagen");
  imagen.width = img_width;
}
