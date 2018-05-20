// Self invoking function
$(function() {

  const cellsArray = ["cell-1", "cell-2", "cell-3", "cell-4", "cell-5", "cell-6"];

  // Run the computer generating logic only two times
  for (i = 1; i < 3; i++) {

    // This function will run 2 times
    // It will pick random cell and change its background color to yellow
    function selectRandomCells(){

      let randomCell = cellsArray[Math.floor(Math.random()*cellsArray.length)];
      $('#'+ randomCell).css('background-color', 'yellow');

    }

    // First time i = 1, (1 * 1000) which means run first colour change on 1 second
    // Second time i = 2 (2 * 2000) which means run second colour change on 2nd second

    setTimeout(selectRandomCells, i * 1000)


  }

});
