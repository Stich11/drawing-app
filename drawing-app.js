$(document).ready(function(){    
    var run = false;
    var hexcolor = "blue";
    var worh = false;
    var brush = "circle";
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
                console.log(hexcolor)
            }
        }
    },100)
    $('.toggleinput').on("click", function(){
        worh = event.toElement.checked
    })
    $('.colorp').on("click",function(){
        if(!worh){
            hexcolor = event.toElement.classList[1]
        } 
    })
    $('.circle').on("click",function(){
        brush = "circle"
    })
    $('.square').on("click",function(){
        brush = "square"
    })
    slider.oninput = function() {
    $('.deme').remove()
      var $mydive = $('<div class="deme '+brush+'-base" style="border:1px solid black; width:'+slider.value+'px; height:'+slider.value+'px; "></div>');
      $('.demo').append($mydive)
}
});