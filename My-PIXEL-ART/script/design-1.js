var canvas, inputHeight, inputWidth;
function makeGrid() {

        canvas = $('#pixelCanvas');
        inputHeight = $('#inputHeight').val();
        inputWidth = $('#inputWeight').val();

        canvas.children().remove();

        for (x = 0; x < inputHeight; x++){
            canvas.append('<tr></tr>');
        }
        
        var tableRow = $('tr');
        
        for (y = 0; y < inputWidth; y++) {
            tableRow.append('<td></td>');
        } 
}
var createCanvas;
createCanvas = $('input[type="submit"]');
$(createCanvas).on('click', function(event){
    event.preventDefault();
    makeGrid();
});