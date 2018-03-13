// Select color input
var color = $('#colorPicker').val();

$('#colorPicker').on('change',function() {
  color = $('#colorPicker').val();
  //console.log("Color: " + color);
});

// Select size input
$('#sizePicker').on('submit',function(event){
  event.preventDefault();
  var cols = $('#inputWeight').val();
  var rows = $('#inputHeight').val();
  //console.log("Height: " + rows);
  //console.log("Width: " + cols);
  //console.log("Color: " + color);
  //$('#input').text(rows + "  " + cols +  "  " );
  makeGrid(cols, rows);
});

// When size is submitted by the user, call makeGrid()
function makeGrid(cols, rows) {
  // Your code goes here!
  //$('#input').text(rows + "  " + cols +  "  "  + color);
  $("#pixelCanvas tr").remove();

  for (var i=0; i<rows; i++){
    $('#pixelCanvas').append('<tr> </tr>');
    for (var j=0; j<cols; j++){
      $( "#pixelCanvas tr:last-child" ).append('<td> </td>');
    }
  }
}

//event listener function to change background-color of the clicked cell
$('#pixelCanvas').on('click','td', function(event) {
  $(this).css('background-color',color);
});
