
$('#text1').textillate({ in: { effect: 'fadeInUp' , delay : 80} } ) ;

$('#text2').textillate({ in: { effect: 'fadeInUp',delay : 80 } });



window.addEventListener("mousemove",function(dets){
    
    document.querySelector("#cursor").style.top = `${dets.clientY}px`
   
 document.querySelector("#cursor").style.left = `${dets.clientX}px`
   
})






document.querySelectorAll("#img>img").forEach(function(element) {
    element.addEventListener("mousemove",function(dets){
        
        document.querySelector("#pointer").style.left = `${dets.clientX}px`
        document.querySelector("#pointer").style.top = `${dets.clientY}px`
        document.querySelector("#cursor").style.opacity = `0`
       document.querySelector("#main").style.backgroundColor = `red`
        document.querySelector("#pointer").style.mixBlendMode = `difference`
    })

    element.addEventListener("mouseleave",function(dets){
      
        document.querySelector("#pointer").style.top = `-150px`
        document.querySelector("#cursor").style.width =`20px`
        document.querySelector("#cursor").style.opacity = `1`
        document.querySelector("#cursor").style.height = `20px`
        document.querySelector("#main").style.backgroundColor = `silver`
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
        document.querySelector("#pointer").style.top = `-150px`
        document.querySelector("#cursor").style.width =`20px`
        document.querySelector("#cursor").style.opacity = `1`
        document.querySelector("#cursor").style.height = `20px`
        document.querySelector("#main").style.backgroundColor = `silver`
        document.querySelector("#cursor").style.mixBlendMode = `initial`
    })


});

document.querySelector("#text1"),function(element) {
    element.addEventListener("mousemove",function(dets){
        document.querySelector("#cursor").style.mixBlendMode = `difference`
    })

    element.addEventListener("mouseleave",function(dets){
        document.querySelector("#cursor").style.mixBlendMode = `initial`
    })
};



document.querySelector("#text2"),function(element) {
    element.addEventListener("mousemove",function(dets){
    
        
        document.querySelector("#cursor").style.mixBlendMode = `difference`
    })


    element.addEventListener("mouseleave",function(dets){
        document.querySelector("#cursor").style.mixBlendMode = `initial`
    })
};


document.querySelector("#email").addEventListener("mousemove",function(dets){
     
        document.querySelector("#email").style.transform = `translate(${dets.clientX*0.04}px,${dets.clientY*0.04}px)`;
        // document.querySelector('#email').style.backgroundColor = "white";

    })

    document.querySelector("#txt").addEventListener("mousemove",function(dets){
        
        document.querySelector("#cursor").style.backgroundColor = `white`
        document.querySelector("#cursor").style.width = "60px"
        document.querySelector("#cursor").style.height = "60px"
        document.querySelector("#cursor").style.mixBlendMode = `difference`
    })

    document.querySelector("#txt").addEventListener("mouseleave",function(dets){
        
        document.querySelector("#cursor").style.backgroundColor = `transparent`
        document.querySelector("#cursor").style.width = "20px"
        document.querySelector("#cursor").style.height = "20px"
        document.querySelector("#cursor").style.mixBlendMode = `initial`
    })

    document.querySelector("#email").addEventListener("mousemove",function(dets){
        
        document.querySelector("#cursor").style.backgroundColor = `white`
        document.querySelector("#cursor").style.width = "60px"
        document.querySelector("#cursor").style.height = "60px"
        document.querySelector("#cursor").style.mixBlendMode = `difference`
    })

    document.querySelector("#email").addEventListener("mouseleave",function(dets){
        
        document.querySelector("#cursor").style.backgroundColor = `transparent`
        document.querySelector("#cursor").style.width = "20px"
        document.querySelector("#cursor").style.height = "20px"
        document.querySelector("#cursor").style.mixBlendMode = `initial`
    })


    
        $('.txt').textillate({
            in:{effect:'fadeInUp',sequence:true,delay:40},
            out:{effect:'fadeOutUp' ,sequence:true,delay: 40},
            loop:true
        });

    

    


