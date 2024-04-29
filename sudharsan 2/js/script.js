
let texts = ['வணக்கம்', 'హలో', 'ഹലോ', 'नमस्ते','Bonjour','مرحبًا','Hola','ನಮಸ್ಕಾರ','Hi There']; // Array of texts to display
let index = 0; // Current index of the text



function menuToggle(){
    $(".menudiv").toggleClass("hidden");
}

function changeText() {
    try {
        document.getElementsByClassName('hithere')[0].innerHTML = texts[index] + ', I\'m <span class="highlight">Sudharsan</span>' ; // Set the text
        index = (index + 1) % texts.length; // Increment index, loop back to 0 if reached the end
    } catch (error) {
        
    }
   
}

setInterval(changeText, 3000);
$(document).ready(function() {
    if(!window.location.pathname.includes("index.html") && window.location.pathname != "/" ){
        $('#myElement').addClass("visiblescrollele");
    }
    $(document).on('scroll', function() {
        var $element = $('#myElement');
        var elementTop = $element.offset().top;
        var viewportHeight = $(window).height();
        var scrollTop = $(this).scrollTop();
        var pathval = window.location.pathname;
        if(pathval.includes("index.html") || pathval == "/"){
            if(scrollTop > $("section").eq(0).height()){
                $element.addClass("visiblescrollele");
                $element.addClass("sticky");
            }
            else{
                $element.removeClass("visiblescrollele");
            }
        }
        else if(scrollTop !=0){
            $element.addClass("sticky");
        }
        else if(scrollTop ==0){
            $element.removeClass("sticky");
        }
    });
});