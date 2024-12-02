window.onload = function() {
    var flashlight = document.querySelector('#flashlight');
    window.addEventListener('mousemove', function(event) {
      flashlight.style.left = (event.pageX-500) + 'px';
      flashlight.style.top = (event.pageY-500) + 'px';
    });
};

const audioElement = document.getElementById('getout');

document.getElementById('anime').addEventListener('mouseover', () => {
    audioElement.play();
});

// I copy and pasted :c
// I must redeem myself chat.