let cellsArray = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6'];
let ComputersPick = [];
let userClick = 0;
let playersScore = 0;
let round = 1;
let tilesCount = 3;

$(() => {
  const $playerScoreElement = $('.player-score');
  const $startButton = $('#start-button');
  console.log($playerScoreElement);
  function resetBoard(){
    cellsArray = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6'];
    ComputersPick = [];
    userClick = 0;
    $('td').removeClass('yellow');
    $('td').removeClass('green');
  }

  // Initial reset
  resetBoard();

  // This function selects a random cell from the above cells, and turns it yellow
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
    for (let i = 1; i <= tilesCount; i++) {
      // Run selectRandomCell function per second
      setTimeout(selectRandomCell, i * 1000);
      // Remove the yellow colour and clear the cells
      setTimeout(function(){
        $('td').removeClass('yellow');
      }, 4000);
    }
  }

  function endGame(){
    playersScore = 0;
    $playerScoreElement.text(0);
    $('table').hide();
    $startButton.show();
    $startButton.text('Play Again');
  }

  function youLost(){
    endGame();
    $('#Messages').text('Game Over!');
    round = 1;
  }

  // When a user clicks start button
  $startButton.on('click', function() {
    $('table').show();
    runSequence();
    $startButton.hide();
  });



  // When user clicks on cell
  $('td').on('click', function(){
    $(this).addClass('green');
    if(ComputersPick[userClick] !== $(this).attr('id')){
      youLost();
      // If computer and user cells match
    } else {

      // On third click
      if(userClick === 2){

        // Add a score
        playersScore++;
        // View new score
        console.log(playersScore, $playerScoreElement);

        if(round < 4){
          setTimeout(function() {
            $('td').removeClass('green');
            runSequence();
            $playerScoreElement.text(playersScore);
          }, 500);

        } else {
          alert('You won');
          tilesCount++
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
