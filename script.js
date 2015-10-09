$(document).ready(function() {
    var $preview  = $('#preview');
    var scaleFactor = 5;
    var imageHeight = $('#source').height();
console.log(imageHeight);
    var scaleFactorY = 5 - (400 / imageHeight);
    var scaleFactorX = 3;
    var $square = $('#square');
    var $sourceContainer =  $('#source-container');
    var containerOffset = $sourceContainer.offset();
    
    function moveSquare(top, left) {
        var width = $square.width();

        $square.css({top:top,
                          left: left});
    }
    $sourceContainer.on('mousemove', function(e) {
        var offsetY = e.pageY - containerOffset.top;
        var offsetX = e.pageX - containerOffset.left;
        var scaledOffsetX = scaleFactorX * offsetX;
        var scaledOffsetY = scaleFactorY * offsetY;
        
        moveSquare(offsetY - $square.height()/2, offsetX - $square.width()/2);
        $preview.css('background-position', '-' + 
                     scaledOffsetX + 'px -' + scaledOffsetY +
                     'px');
//        console.log(scaledOffsetX, scaledOffsetY)
    });
    $square.on('mousemove', function() {
    });
});
