//First, we create an audio tag and assign an audio to it.
//Primeiro, nós criamos uma tag de áudio e adicionamos um valor à tag.
const audio = document.createElement("audio");
audio.src = "https://www.freesoundslibrary.com/wp-content/uploads/2018/03/right-answer-ding-ding-sound-effect.mp3";

//Now we create an array which will store notified messages.
//Agora criamos uma array que vai armazenar mensagens notificadas.
var notified = [];

//And finally, the main function. It's responsible for notifying you and sending notified messages to the notified array.
//E finalmente, a função main. Ela é responsável por te notificar e enviar mensagens notificadas para a array notified.
setInterval(function Main(){
    //Messages.
    //Mensagens.
    var messages = document.getElementsByClassName("text-fragment");
    
    //Loop that verifies if the message has been notified.
    //Loop que verifica se a mensagem foi notificada.
    for(i=0;i<messages.length;i++){
        
        //If the message is in the notified array, it will ignore that message. If it isn't, then it will send it to the notified array and play an audio.
        //Se a mensagem estiver na array notified ele vai ignorar a mensagem. Se não estiver, então o loop vai enviar ela para a array notified e tocar um audio.
        if(notified.toString().match(messages[i].innerHTML)){
            continue;
        } else {
            notified.push(messages[i].innerHTML);
            audio.play();
        }
    }
},200);

//Andrefalt was here
//Andrefalt esteve aqui
