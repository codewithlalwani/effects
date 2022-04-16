
$('#text1 ').textillate({ in: { effect: 'fadeInUp' , delay : 80} } ) ;

$('#text2 ').textillate({ in: { effect: 'fadeInUp',delay : 80 } });



window.addEventListener("mousemove",function(dets){
    
    document.querySelector("#cursor").style.top = `${dets.clientY}px`
   
 document.querySelector("#cursor").style.left = `${dets.clientX}px`
   
})






document.querySelectorAll("#img").forEach(function(element) {
    element.addEventListener("mousemove",function(dets){
        
        document.querySelector("#pointer").style.left = `${dets.clientX}px`
        document.querySelector("#pointer").style.top = `${dets.clientY}px`
        document.querySelector("#cursor").style.opacity = `0`
       document.querySelector("#main").style.backgroundColor = `red`
        document.querySelector("#pointer").style.mixBlendMode = `difference`
    })

    element.addEventListener("mouseleave",function(dets){
      
        document.querySelector("#pointer").style.top = `-200px`
        document.querySelector("#cursor").style.width =`20px`
        document.querySelector("#cursor").style.opacity = `1`
        document.querySelector("#cursor").style.height = `20px`
        document.querySelector("#main").style.backgroundColor = `transparent`
        document.querySelector("#cursor").style.mixBlendMode = `initial`
    })


});

document.querySelectorAll("#img2").forEach(function(element) {
    element.addEventListener("mousemove",function(dets){
    
        document.querySelector("#pointer").style.left = `${dets.clientX}px`
        document.querySelector("#pointer").style.top = `${dets.clientY}px`
        document.querySelector("#cursor").style.opacity = `0`
       document.querySelector("#main").style.backgroundColor = `blue`
        document.querySelector("#pointer").style.mixBlendMode = `difference`
    })

    element.addEventListener("mouseleave",function(dets){
        document.querySelector("#pointer").style.top = `-200px`
        document.querySelector("#cursor").style.width =`20px`
        document.querySelector("#cursor").style.opacity = `1`
        document.querySelector("#cursor").style.height = `20px`
        document.querySelector("#main").style.backgroundColor = `transparent`
        document.querySelector("#cursor").style.mixBlendMode = `initial`
    })


});

document.querySelector("#text1 ")("mousemove",function(element) {
    element.addEventListener("mousemove",function(dets){
        document.querySelector("#cursor").style.mixBlendMode = `difference`
    })



    element.addEventListener("mousemove",function(dets){
        document.querySelector("#cursor").style.mixBlendMode = `initial`
    })

});



document.querySelector("#text2 ")("mousemove",function(element) {
    element.addEventListener("mousemove",function(dets){
    
        
        document.querySelector("#cursor").style.mixBlendMode = `difference`
    })


    element.addEventListener("mousemove",function(dets){
        document.querySelector("#cursor").style.mixBlendMode = `initial`
    })
});



