function moveButton() {
    var button = document.getElementById('no-button');
    var randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}
