
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