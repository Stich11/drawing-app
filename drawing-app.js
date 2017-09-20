$(document).ready(function(){    
    var run = false;
    var hexcolor = "blue";
    var worh = false;
    var brush = "circle";
    var counter = 0;
    var slider = document.getElementById("myRange");
    $(".dive").mouseup(function(){
        run = false;
    });
    $(".dive").mousedown(function(){
        run = true;
    });
    $(document).mousemove(function(event){
        if(run){
            var left = event.pageX - (slider.value / 2);
            var top = event.pageY - (slider.value / 2);
            if(left <= $('.dive').width() - slider.value){ // edit
                if(left >= -2.5){
                    if(top <= $('.dive').height() - slider.value){ // edit
                        if(top >= -2.5){
                            var $div = $('<div class="'+brush+'-base" style="height:'+slider.value+'px; width:'+slider.value+'px; background-color:'+hexcolor+';position:absolute;left:'+left+'px; top:'+top+'px;"></div>');
                            $('.dive').append($div);
                            $("span").text(event.pageX + ", " + event.pageY);
                        }else{
                            run = false
                        };
                    }else{
                        run = false
                    };
                }else{
                    run = false
                }; 
            }else{
                run = false
            };  
        };
    });
    setInterval(function(){
        if($('.inputingcolor')[0].value !== hexcolor){
            if(worh){
                hexcolor = $('.inputingcolor')[0].value
            }
        }
    },100)
    $('.menu2').click(function(){
        worh = true
    })
    $('.menu1').click(function(){
        worh = false
    })
    $('.home').click(function(){
        worh = false
    })
    $('.addColor').click(function(){
        if(worh){
            var alredy = false
            var arr = $('.plate')
            arr = arr[0].children
            var color = $('.inputingcolor')[0].value
            for(let s = 1; s < arr.length;s++){
                if(!alredy){
                    alredy = arr[s].style.background === color
                } 
            }
            console.log(alredy)
            if(!alredy){
                counter++
                if(color === "#ffffff"){
                    var $divee = $('<div class="colorp hi'+counter+'" style="border:1px solid black;background-color:'+color+';"></div>')
                }else{
                    var $divee = $('<div class="colorp hi'+counter+'" style="background-color:'+color+';"></div>')
                }
                $('.plate').append($divee)
                $('.hi'+counter+'').click(function(){
                    if(!worh){
                        hexcolor = event.toElement.style.backgroundColor
                    } 
                })
            } 
        }
    })
    $('.colorp').click(function(){
        if(!worh){
            hexcolor = event.toElement.style.backgroundColor
        } 
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