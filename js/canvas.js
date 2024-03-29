$(document).ready(function() {

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let img = document.getElementById("image");


 
const mouse = { x:0, y:0};      
// нажатие мыши
let draw = false;
canvas.addEventListener("mousedown", function(e){
    // Нужны для координат
    draw = true;
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
    context.drawImage(img, mouse.x, mouse.y, 481, 292) 

});
// перемещение мыши
// перемещение мыши
canvas.addEventListener("mousemove", function(e){
        
        if(draw==true){
            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
            context.drawImage(img, mouse.x, mouse.y, 481, 292)
        }
});
// отпускаем мышь
canvas.addEventListener("mouseup", function(e){
    draw = false;
    // Рисуем изображение в canvas: 
    // 1 аргумент берет изображение
    // 2 аргумент берет координаты мыши по x
    // 3 аргумент берет координаты мыши по y
    // 4 аргумент меняет в изображении длину
    // 5 аргумент меняет в изображении ширину
    
});
})


