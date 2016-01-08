
//make circle object
var Circle = {

    sequence: [],
    round: 0,
    activeIndex: 0,
    sound: 'on',
}
//get option for sound on/off
$(document).on('click', "#newGame", function() {

    Circle.sound = document.querySelector('input[name="sound"]:checked').value;
    startGame();
});

/* when start button is clicked (reset everything)
hide elements to make page minimal
*/
function startGame() {

    this.sequence = [];
    this.round = 0;
    this.activeIndex = 0;
    $('#lost').hide();
    $('#rounds').show();
    $('.turn').text('');
    lockBoard();
    this.nextRound();
}

//when user gets round correct
function nextRound() {

    this.activeIndex = 0;
    $('[round]').text(++this.round);
    this.sequence.push(Math.floor(Math.random() * 4) + 1);
    this.showSequence(this.sequence)
}

//check if clicked board is correct
function registerClick(boardClicked) {

    var answer = sequence[this.activeIndex];
    
    if (boardClicked == answer)
    {
        this.activeIndex++;
        checkEnd();
    }

    //if its not correct
    else {

        lockBoard();
        gameOver();
    }
}

//if reached end of sequence
function checkEnd() {

    if (activeIndex >= sequence.length) {
        lockBoard();
        nextRound();
    }
}

//if lose game
function gameOver() {

    $('#rounds').hide();
    $('#lost').show();
    $('[span=round]').text('' + Circle.round);

}
//------------------ helper functions -----------------------

//allow user to click board
function allowPlay() {

    $('.turn').text('Your Turn');

    $('#wrapAround')
    .on('click', '[data]', function() {
        registerClick($(this).attr('data'));

    })
    .on('mousedown', '[data]', function(data) {
        soundClick($(this).attr('data'));
        turnOn($(this).attr('data'));
    })
}

//disable clicks on board
function lockBoard() {

    $('.turn').text("Computer's Turn");

    $('#wrapAround')
    .off('click', '[data]')
    .off('mousedown', '[data]');
}

//show board sequence (light up and sounds)
function showSequence() {

    var i = 0;

    var showSlots = setInterval(function() {
        turnOn(sequence[i]);
        soundClick(sequence[i]);

        i++;

        //if reached end of sequence
        if (i >= sequence.length) {
            clearInterval(showSlots);
            allowPlay();
        }
    }, 700);
}

//light up slots
function turnOn(slot) {

    //which number in board is clicked
    var $button = $('[data =' + slot + ']').addClass('turnOn');

    window.setTimeout(function() {
        //turn off slot
        $button.removeClass('turnOn');
    }, 300);
}

//sounds corresponding to each slot
function soundClick(slot) {
    //make sure sound option is on
    if (Circle.sound != 'off') {

        var audio = $('<audio autoplay></audio>');
        audio.append('<source src="sounds/' + slot + '.mp3" type="audio/mp3" />');
        $('[audio=sound]').html(audio);

    }
}

