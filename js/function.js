/**
document.getElementById('boton').onclick=function(){
    console.log("Capturamos el evento click");
    document.getElementById('demo').innerHTML="Estamos probando nuestro primer evento en JS";
}
*/
document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola mundo desde EventListener");
    document.getElementById('demo').innerHTML="Estamos probando nuestro primer evento en JS";
});

document.getElementById('boton_color').addEventListener('click', function(){
    document.body.style.backgroundColor ='#150EA9';
  
});

document.getElementById('boton_default').addEventListener('click', function(){
    document.body.style.backgroundColor ='yellowgreen';
  
});
document.getElementById('boton_hora').addEventListener('click', function(){
innerHTML=Date();

});