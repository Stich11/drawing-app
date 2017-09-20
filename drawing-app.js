$(document).ready(function(){ 
    var width = $('.canvas1').width()
    var height = $('.canvas1').height()
    $('.canvas1')[0].height = height
    $('.canvas1')[0].width = width
    var run = false;
    var hexcolor = "blue";
    var worh = false;
    var brush = "circle";
    var counter = 0;
    var slider = document.getElementById("myRange");
    $(".canvas1").mouseup(function(){
        run = false;
    });
    $(".canvas1").mousedown(function(){
        run = true;
    });
    $(document).mousemove(function(event){
        if(run){
            var left = event.pageX - (slider.value / 2);
            var top = event.pageY - (slider.value / 2);
            if(event.pageX < width){
                if(event.pageX > 0){
                    if(event.pageY < height){
                        if(event.pageY > 0){
                            if(brush === "circle"){
                                var c = document.getElementById("myCanvas");
                                var ctx = c.getContext("2d");
                                ctx.beginPath();
                                ctx.fillStyle = hexcolor
                                ctx.arc(event.pageX, event.pageY, slider.value, 0, 2 * Math.PI);
                                ctx.fill();
                            }else{
                                var c = document.getElementById("myCanvas");
                                var ctx = c.getContext("2d");
                                ctx.beginPath();
                                ctx.rect(left, top, slider.value * 2, slider.value * 2);
                                ctx.fillStyle = hexcolor;
                                ctx.fill();
                            }   
                        }else{
                            run = false
                        } 
                    }else{
                        run = false
                    } 
                }else{
                    run = false
                } 
            }else{
                run = false
            }     
        };
    });
    
    $('.addColor').click(function(){
        var alredy = false
        var arr = $('.plate')
        arr = arr[0].children
        var color = $('.inputingcolor')[0].value
        for(let s = 3; s < arr.length;s++){
            if(!alredy){
                alredy = arr[s].style.background == color
            } 
        }
        if(!alredy){
            counter++
            if(color === "#ffffff"){
                var $divee = $('<div class="colorp hi'+counter+'" style="border:1px solid black;background-color:'+color+';"></div>')
            }else{
                var $divee = $('<div class="colorp hi'+counter+'" style="background-color:'+color+';"></div>')
            }
            $('.plate').append($divee)
            $('.hi'+counter+'').click(function(){
                hexcolor = event.toElement.style.backgroundColor
            })
        } 
    })
    $('.colorp').click(function(){
        hexcolor = event.toElement.style.backgroundColor
    })
    $('.circle').click(function(){
        brush = "circle"
    })
    $('.square').click(function(){
        brush = "square"
    })
    slider.oninput = function() {
    $('.deme').remove()
      var $mydive = $('<div class="deme '+brush+'-base" style="border:1px solid black; width:'+slider.value+'px; height:'+slider.value+'px; "></div>');
      $('.demo').append($mydive)
    }
});