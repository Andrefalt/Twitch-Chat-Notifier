const audio = document.createElement("audio");
audio.src = URLAudio;
var notified = [];
setInterval(function Main(){
    var messages = document.getElementsByClassName("text-fragment");
    for(i=0;i<messages.length;i++){
        if(notified.toString().match(messages[i].innerHTML)){
            continue;
        } else {
            notified.push(messages[i].innerHTML);
            audio.play();
        }
    }
},200);
