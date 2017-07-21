$(document).ready(function(){
    
$('#carousel-example-generic').carousel({
  interval: 9000
  
})
    $('#testimonial-carusel').carousel({
  interval: 9000
})
    
    $(".option-box i ").click(function(){
       
        $(".color-box").animate({ width:'toggle' },600);
    });
   //---------------------option box  
    $(".option-box .color-box li ").click(function(){
       
        $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    });
    
    //--------------up screen--------------------
    
    $(window).scroll(function(){
         
        $(this).scrollTop()>=700 ? $(".up-screen").fadeIn(1000) : $(".up-screen").fadeOut(1000);

        });
    $(".up-screen").click(function(){ $("html,body").animate({scrollTop:0},600); });
    
});


 //--------------loading window-------------------------------------------

$(window).on('load', function(){ 
    
    $(".sk-folding-cube").fadeOut(2000,function(){
        
        $(this).parent().fadeOut(1000);
        $('body').css("overflow","auto");
    });

});


