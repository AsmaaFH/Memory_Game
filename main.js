    var images = ['images/html5-logo.png', 'images/css3-logo.png', 'images/js-logo.png', 'images/sass-logo.png',
    'images/jquery-logo.png', 'images/nodejs-logo.png', 'images/wordpress-logo.png', 'images/python-logo.png'];

    createGameStructure(images);
    var gameContainer = document.getElementById('game-container');
    let blocks = Array.from(document.querySelectorAll('.img-block'));

    console.log (blocks);
    blocks.forEach((block)=>{
    block.addEventListener('click', function(){
    this.classList.add('is-flipped');
    var flipped = document.querySelectorAll('.is-flipped');
    if(flipped.length == 2){
    var backimgs = document.querySelectorAll('.is-flipped .back');
    if(backimgs[0].getAttribute('src') == backimgs[1].getAttribute('src')){
    matched(flipped);
    setTimeout(function(){
        var matchedElements = document.querySelectorAll('.is-match');
        if(matchedElements.length == images.length*2 ){
            gameContainer.classList.add('is-blocked');
            alert('you win');
            clearInterval(stopWatchInterval);
        }
    }, 1000) 
    }else{
    unMatched(flipped);
    }
    }

    })
    })

    function createGameStructure(images){
    var randomIndexArr = randomRandomArray(images.length);
    for(var i = 0 ; i<images.length*2 ; i++){
    var index = randomIndexArr[i];
    var gameBlock = document.createElement('div');
    gameBlock.classList.add('img-block')
    var imgBack = document.createElement('img');
    var imgFront = document.createElement('img');
    imgFront.classList.add('front');
    imgBack.classList.add('back');
    imgFront.setAttribute('src','images/q-mark.png');
    imgBack.setAttribute('src',images[index]);
    gameBlock.appendChild(imgFront);
    gameBlock.appendChild(imgBack);
    document.getElementById('game-container').appendChild(gameBlock);
    }

    }
    function randomRandomArray(ArrLenght){
    var i=0, randomIndexArr = [];
    while(i< ArrLenght*2){
    var randomIndex = Math.floor(Math.random()*ArrLenght);
    if(countInArray(randomIndexArr,randomIndex) < 2){
    randomIndexArr.push(randomIndex);
    i++;
    }
    }
    return randomIndexArr;
    }
    function countInArray(array, what) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
    if (array[i] === what) {
    count++;
    }
    }
    return count;
    }
    function matched(flipped){
    flipped[0].classList.add('is-blocked');
    flipped[1].classList.add('is-blocked');
    setTimeout(function(){
    flipped[0].classList.remove('is-flipped');
    flipped[1].classList.remove('is-flipped');
    flipped[0].classList.add('is-match');
    flipped[1].classList.add('is-match');
    }, 1000)  
    }
    function unMatched(flipped){
    gameContainer.classList.add('is-blocked');
    setTimeout(function(){
    flipped[0].classList.remove('is-flipped');
    flipped[1].classList.remove('is-flipped');
    gameContainer.classList.remove('is-blocked');
    }, 1000);
    }
    var timer = document.getElementById("timer");
    var hr=0, min=0, sec=0;

    var stopWatchInterval = setInterval(stopwatch, 1000);
    function stopwatch() {
    hr = parseInt(hr);
    min = parseInt(min);
    sec = parseInt(sec);
    sec += 1;
    if (sec == 60) {
    min = min + 1;
    sec = 0;
    }
    if (min == 60) {
    hr = hr + 1;
    min = 0;
    sec = 0;
    }
    if (sec < 10 || sec == 0) {
    sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
    min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
    hr = '0' + hr;
    }
    timer.innerHTML = hr + ':' + min + ':' + sec;            
    }