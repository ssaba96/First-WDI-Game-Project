const cellsArray = ['cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', 'cell-6'];

// This function selects a random cell from the above cells, and turns it yellow
function selectRandomCell(){

  // Get a random index from cells array
  const index = Math.floor(Math.random()*cellsArray.length);
  // Find that cell value through the index i.e array[index]
  const randomCell = cellsArray[index];

  // Add Yellow class to it
  $('#'+ randomCell).addClass('yellow');

  // Remove it from collection so we don't pick it again
  cellsArray.splice(index, 1);

}

// Self invoking function
$(function() {


  // When a user clicks start button
  document.getElementById('start-button').onclick = function() {

    // Do this 3 times
    for (let i = 1; i < 4; i++) {

      // Run selectRandomCell function per second
      setTimeout(selectRandomCell, i * 1000);

      // Remove the yellow colour and clear the cells
      setTimeout(function(){
        $('td').removeClass('yellow');
      }, 4000);

    }

  };

});
