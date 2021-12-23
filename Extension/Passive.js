var URLAudio;
document.querySelector('#confirm').addEventListener('click', function herewegoagain(){
  URLAudio = document.querySelector('#uri').value;
});

document.querySelector('#language').addEventListener('change', function(){
  if(this.value=="Português){
     document.querySelector("h3").innerHTML="Se quiser ter outro audio como toque de notificação, cole o link dele aqui: ";
  }else{
     document.querySelector("h3").innerHTML="If you want to have a custom audio as a notification sound, just paste it's link here: ";
  };
});
