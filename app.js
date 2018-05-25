let cellsArray = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6', 'cell-7','cell-8','cell-9','cell-10','cell-11','cell-12','cell-13','cell-14','cell-15','cell-16','cell-17','cell-18','cell-19','cell-20','cell-21','cell-22',
  'cell-23','cell-24','cell-25','cell-26','cell-27','cell-28','cell-29','cell-30'];

let ComputersPick = [];
let userClick = 0;
let playersScore = 0;
let round = 1;

$(() => {

  const $playerScoreElement = $('.player-score');
  const $startButton = $('#start-button');
  const audio = document.querySelector('.audio');

  function resetBoard(){
    cellsArray = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6', 'cell-7','cell-8','cell-9','cell-10','cell-11','cell-12','cell-13','cell-14','cell-15','cell-16','cell-17','cell-18','cell-19','cell-20','cell-21','cell-22',
      'cell-23','cell-24','cell-25','cell-26','cell-27','cell-28','cell-29','cell-30'];
    ComputersPick = [];
    userClick = 0;
    $('td').removeClass('yellow');
    $('td').removeClass('usersPick');
  }

  // Initial reset
  resetBoard();

  // This function will select a random cell from the above cells, and turns it yellow
  function selectRandomCell(){

    // Get a random index from cells array
    const index = Math.floor(Math.random()*cellsArray.length);
    // Find that cell value through the index i.e array[index]
    const randomCell = cellsArray[index];

    // Add to array, Computer's picks
    ComputersPick.push(randomCell);

    // Add Yellow class to it
    $('#'+ randomCell).addClass('yellow');

    // Remove it from collection so we don't pick it again
    // Ideally Should Remove from array, only if we are in same round
    cellsArray.splice(index, 1);

  }

  function runSequence(){
    resetBoard();

    // Do this 3 times
    for (let i = 1; i < 4; i++) {
      // Run selectRandomCell function per second
      setTimeout(selectRandomCell, i * 1000);
      // Remove the yellow colour and clear the cells
      setTimeout(function(){
        $('td').removeClass('yellow');
      }, 4000);
    }
  }

  function endGame(){
    $('table').hide();
    $startButton.show();
    $startButton.text('Play Again');
  }

  function youLost(){
    endGame();
    $('#Messages').show();
    $('#Messages').text('Game Over!');
  }

  function youWon(){
    endGame();
    $('#Messages').show();
    $('#Messages').text('You won!');
  }

  // When a user clicks start button
  $startButton.on('click', function() {
    round = 1;
    playersScore = 0;
    $playerScoreElement.text(0);
    $('table').show();
    runSequence();
    $startButton.hide();
    $('#Messages').hide();
    audio.src = './horrorMusic.mp3';
    audio.play();
  });



  // When user clicks on cell
  $('td').on('click', function(){
    $(this).addClass('usersPick');

    // Iterating through ComputersPick array using userClick value i.e 0, 1, 2
    if(ComputersPick[userClick] !== $(this).attr('id')){

      youLost();

    } else {

      // On third click
      if(userClick === 2){

        // Add a score
        playersScore++;

        if(round < 4){

          setTimeout(

            function() {
              $('td').removeClass('usersPick');
              runSequence();
              $playerScoreElement.text(playersScore);
            }, 500);

        } else {
          youWon();
          endGame();
          $('#start-button').text('Play Again');

        }

        round++;
      } else {
        userClick++;
      }
    }
  });
});
