let sound = document.createElement('audio')
sound.id = 'audio'
sound.controls = ''
sound.src = '/assets/backsound.mp3'
sound.type = 'audio/mp3'
document.body.appendChild(sound)

function playAudio() {
  document.getElementById('audio').play();
}

setTimeout("playAudio()", 2700);

let mutedButton = document.getElementById('mutedBtn')

mutedButton.onclick = function (e) {
  sound.muted = true
};