$(document).ready(function() {

    const canvas = document.getElementById("canvas2");
    const context = canvas.getContext("2d");
    let img = document.getElementById("image2");
    
    
     
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


    const span = document.querySelector('.item2 span');

    window.addEventListener('scroll', () => {
      const t = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      span.style.backgroundPosition = `${-t * 200}% 0`;
      
      
    });

    //change image
   
  const imageList = [
    'images/сердце_0б.svg', 'images/сердце_0з.svg', 'images/сердце_0к.svg'
  ]

  const img1 = document.querySelector('.img1')
  const next = document.getElementById('next')
  var numImage = 0
  img1.src = imageList[numImage]
  
  next.addEventListener('click', () => {
    numImage++
    if (numImage >= imageList.length) {
      numImage = 0
    }
    console.log(numImage >= imageList.length)
    console.log(numImage)
    img1.src = imageList[numImage]
  })
  const imageList2 = [
    'images/мозг_б.svg', 'images/мозг_з.svg', 'images/мозг_к.svg'
  ]

  const img2 = document.querySelector('.img2')
  const next2 = document.getElementById('next2')
  var numImage = 0
  img2.src = imageList2[numImage]
  
  next2.addEventListener('click', () => {
    numImage++
    if (numImage >= imageList2.length) {
      numImage = 0
    }
    console.log(numImage >= imageList2.length)
    console.log(numImage)
    img2.src = imageList2[numImage]
  })


    })

    
    