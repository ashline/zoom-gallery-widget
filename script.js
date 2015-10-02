$(document).ready(function() {
    var $preview  = $('#preview');
    var scaleFactor = 5;
    var imageHeight = $('#source').height();
console.log(imageHeight);
    var scaleFactorY = 5 - (400 / imageHeight);
    var scaleFactorX = 3;
    $('#source').on('mousemove', function(e) {
        var offsetY = e.offsetY;
        var offsetX = e.offsetX;
        var scaledOffsetX = scaleFactorX * offsetX;
        var scaledOffsetY = scaleFactorY * offsetY;
        
        $preview.css('background-position', '-' + 
                     scaledOffsetX + 'px -' + scaledOffsetY +
                     'px');
        console.log(scaledOffsetX, scaledOffsetY)
    });
});
